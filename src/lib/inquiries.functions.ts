import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const inquirySchema = z.object({
  name: z.string().min(1).max(100),
  email: z.string().min(3).max(255),
  session_type: z.string().max(100).nullable(),
  preferred_date: z.string().max(100).nullable(),
  location: z.string().max(200).nullable(),
  message: z.string().min(1).max(2000),
});

const NOTIFY_TO = "Alifpicster@gmail.com";
const GATEWAY_URL = "https://connector-gateway.lovable.dev/google_mail/gmail/v1";

const b64 = (s: string) =>
  btoa(Array.from(new TextEncoder().encode(s), (b) => String.fromCharCode(b)).join(""));
const mimeHeader = (v: string) => (/^[\x00-\x7F]*$/.test(v) ? v : `=?UTF-8?B?${b64(v)}?=`);

function createRawEmail(to: string, subject: string, body: string): string {
  const email = [
    `To: ${to}`,
    `Subject: ${mimeHeader(subject)}`,
    "MIME-Version: 1.0",
    'Content-Type: text/plain; charset="UTF-8"',
    "",
    body,
  ].join("\r\n");
  return b64(email).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
}

export const notifyInquiry = createServerFn({ method: "POST" })
  .inputValidator((data) => inquirySchema.parse(data))
  .handler(async ({ data }) => {
    const lovableKey = process.env["LOVABLE_API_KEY"];
    const connectionKey = process.env["GOOGLE_MAIL_API_KEY"];
    if (!lovableKey || !connectionKey) {
      console.error("Inquiry email not configured");
      return { sent: false as const };
    }

    const lines = [
      `New enquiry from alifsuvo.lovable.app`,
      "",
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      data.session_type ? `Type of session: ${data.session_type}` : null,
      data.preferred_date ? `Preferred date: ${data.preferred_date}` : null,
      data.location ? `Location: ${data.location}` : null,
      "",
      "Message:",
      data.message,
    ].filter((line): line is string => line !== null);

    const raw = createRawEmail(NOTIFY_TO, `New enquiry — ${data.name}`, lines.join("\n"));

    const response = await fetch(`${GATEWAY_URL}/users/me/messages/send`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${lovableKey}`,
        "X-Connection-Api-Key": connectionKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ raw }),
    });

    if (!response.ok) {
      const errorBody = await response.text();
      console.error(`Inquiry email failed [${response.status}]: ${errorBody}`);
      return { sent: false as const };
    }

    return { sent: true as const };
  });

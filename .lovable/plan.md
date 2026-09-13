# Inquiry email notifications via Gmail

## Goal
Every inquiry submitted through the Contact form is emailed to alifpicster@gmail.com, sent from your own Gmail account. No domain purchase or DNS setup needed.

## Steps

1. **Connect Gmail** — you approve a one-click Google connection; this authorizes your Gmail so the site can send you the inquiry email.
2. **Send email after each inquiry** — when someone submits the Contact form, after the inquiry is saved (as it is today), the site sends you an email with the client's name, email, session type, preferred date, location, and message.
3. **Keep the visitor experience unchanged** — the form, the "Thank you for reaching out. I will get back to you soon." confirmation, and the visual design stay exactly as they are. If the email fails for any reason, the inquiry is still saved and the visitor still sees the success message.
4. **Verify** — submit a test inquiry and confirm the email arrives in your inbox, then remove the test inquiry.

## Technical details
- Gmail is linked through the Gmail connector (`google_mail`, gateway mode); credentials are stored as server-only environment variables and never exposed to the browser.
- A server function builds a plain-text RFC 2822 message (base64url-encoded) and calls the Gmail `messages/send` endpoint through the Lovable connector gateway, addressed to alifpicster@gmail.com.
- The existing `public.inquiries` insert is untouched; the email send happens after a successful insert and its failure is logged without affecting the visitor.

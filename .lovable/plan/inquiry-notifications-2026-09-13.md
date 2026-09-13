# Inquiry notifications

## Current state
Submitted inquiries from the Contact page are saved to the backend database table `inquiries`. They are not emailed anywhere automatically.

## Goal
Send Alif an email notification each time a client submits an inquiry, while keeping the existing form and confirmation message unchanged.

## Plan

1. **Email domain prerequisite**
   - App email notifications require a real domain you own (Lovable does not provide a free sender domain).
   - Set up the sender domain first; once it is verified we can continue with the rest.

2. **Scaffold email templates**
   - Add the managed email template registry and send helper if not already present.
   - Create a simple notification template for new inquiries that includes the client's name, email, session type, preferred date, location, and message.

3. **Wire the contact form**
   - After the inquiry is saved to the database, trigger the notification email.
   - Send it to `Alifpicster@gmail.com`.
   - Keep the existing on-page success message: "Thank you for reaching out. I will get back to you soon."
   - If the email send fails for a non-recoverable reason, the inquiry will still be saved and the user will still see the success message; the failure will be logged server-side.

4. **Verify**
   - Submit a test inquiry and confirm the email is delivered.
   - Confirm the backend still stores the inquiry correctly.

## What is needed from you
A domain you own to use as the sender domain (for example `notify.yourdomain.com`). If you do not have one yet, you can buy a domain through Project Settings → Domains or any registrar.

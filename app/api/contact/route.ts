import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Make sure this runs on the Node.js runtime (not edge)
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type Body = {
  name?: string;
  email?: string;
  service?: string;
  message?: string;
};

export async function POST(req: Request) {
  try {
    const body = (await req.json().catch(() => ({}))) as Body;
    const name = (body.name || "").trim();
    const email = (body.email || "").trim();
    const service = (body.service || "").trim();
    const message = (body.message || "").trim();

    // Basic validation to avoid empty sends
    if (!name || !email || !message) {
      console.log("[CONTACT] missing fields", { name, email, messageLen: message.length });
      return NextResponse.json(
        { success: false, error: "Missing required fields." },
        { status: 400 }
      );
    }

    // Read env (and provide safe defaults only for host/port)
    const host = process.env.SMTP_HOST || "smtp.hostinger.com";
    const port = Number(process.env.SMTP_PORT || "465");
    const user = process.env.SMTP_USER || "";
    const pass = process.env.SMTP_PASS || "";

    // IMPORTANT: from must be the authenticated Hostinger mailbox:
    // We'll set from = user, and put the visitor’s email in replyTo
    const toEmail =
      process.env.TO_EMAIL && process.env.TO_EMAIL.trim().length > 0
        ? process.env.TO_EMAIL.trim()
        : user; // fallback to mailbox itself

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465, // true for 465, false for 587
      auth: { user, pass },
      // Loosen TLS just for debugging (you can remove after it works)
      tls: { rejectUnauthorized: false },
    });

    console.log("[CONTACT] About to verify SMTP", { host, port, user, toEmail });

    // Verify connectivity & auth
    await transporter.verify();
    console.log("[CONTACT] SMTP verify OK");

    const mail = {
      from: `"Xtreme Digitonix" <${user}>`, // must equal SMTP_USER mailbox
      to: toEmail,
      replyTo: email, // so you can reply to the visitor
      subject: `New Contact: ${service || "Website Enquiry"}`,
      text:
        `Name: ${name}\n` +
        `Email: ${email}\n` +
        `Service: ${service}\n\n` +
        `Message:\n${message}\n`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Service:</b> ${service}</p>
        <p><b>Message:</b><br/>${message.replace(/\n/g, "<br/>")}</p>
      `,
    };

    console.log("[CONTACT] Sending mail", { to: toEmail });
    const info = await transporter.sendMail(mail);
    console.log("[CONTACT] Mail sent", { messageId: info.messageId, response: info.response });

    return NextResponse.json({ success: true, messageId: info.messageId });
  } catch (err: any) {
    // Log the real error so we can see it on Vercel Logs
    console.error("[CONTACT] ERROR", {
      message: err?.message,
      code: err?.code,
      command: err?.command,
      response: err?.response,
      stack: err?.stack,
    });
    return NextResponse.json(
      { success: false, error: err?.message || "Email failed" },
      { status: 500 }
    );
  }
}

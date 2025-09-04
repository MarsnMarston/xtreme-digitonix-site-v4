import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const dynamic = "force-dynamic"; // ensure this is always executed on server

export async function POST(req: Request) {
  try {
    const { name, email, service, message } = await req.json();

    // 1) Basic validation so we don't send empty emails
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Missing required fields." },
        { status: 400 },
      );
    }

    // 2) Read env vars (fall back to Hostinger defaults where it’s harmless)
    const host = process.env.SMTP_HOST || "smtp.hostinger.com";
    const port = Number(process.env.SMTP_PORT || 465);
    const user = process.env.SMTP_USER;           // support@xtremedigitonix.com
    const pass = process.env.SMTP_PASS;           // the *mailbox* password
    const to   = process.env.TO_EMAIL || user;    // start by sending to your Hostinger mailbox

    if (!user || !pass) {
      console.error("[MAILER] Missing SMTP_USER / SMTP_PASS in env");
      return NextResponse.json(
        { success: false, error: "SMTP credentials missing." },
        { status: 500 },
      );
    }

    // 3) Create transporter with full debug logging
    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,        // true for 465, false for 587
      auth: { user, pass },
      logger: true,                // print SMTP conversation to Vercel logs
      debug: true,
    });

    // 4) Verify server is reachable and creds are correct
    await transporter.verify();
    console.log("[MAILER] SMTP verify OK");

    // 5) Build and send message
    const info = await transporter.sendMail({
      from: `"${name}" <${user}>`,  // FROM must be your domain mailbox
      replyTo: email,               // user email goes here so you can reply
      to,
      subject: `New Contact - ${service || "General"}`,
      text: `Name: ${name}\nEmail: ${email}\nService: ${service}\n\n${message}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Service:</strong> ${service || "-"}</p>
        <p><strong>Message:</strong></p>
        <p>${(message || "").replace(/\n/g, "<br/>")}</p>
      `,
    });

    console.log("[MAILER] accepted:", info.accepted, "rejected:", info.rejected, "messageId:", info.messageId);

    return NextResponse.json({
      success: true,
      id: info.messageId,
      accepted: info.accepted,
      rejected: info.rejected,
    });
  } catch (err: any) {
    console.error("[MAILER] ERROR:", err);
    return NextResponse.json(
      { success: false, error: err?.message || "send failed" },
      { status: 500 },
    );
  }
}

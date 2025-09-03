
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { name, email, service, message } = body || {}
    if (!name || !email || !service || !message) return NextResponse.json({ error: 'Missing fields' }, { status: 400 })

    const RESEND_API_KEY = process.env.RESEND_API_KEY
    const TO = process.env.CONTACT_TO || 'support@xtremedigitonix.com'

    if (!RESEND_API_KEY) {
      console.log('[CONTACT]', { name, email, service, message })
      return NextResponse.json({ ok: true, message: 'Message logged (email provider not configured).' }, { status: 200 })
    }

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: { 'Authorization': `Bearer ${RESEND_API_KEY}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: 'Xtreme Digitonix <onboarding@resend.dev>',
        to: [TO],
        subject: `New Contact Form: ${service}`,
        reply_to: email,
        html: `<h2>New Contact Submission</h2>
               <p><b>Name:</b> ${name}</p>
               <p><b>Email:</b> ${email}</p>
               <p><b>Service:</b> ${service}</p>
               <p><b>Message:</b><br/>${(message || '').replace(/\n/g, '<br/>')}</p>`
      })
    })

    if (!res.ok) return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
    return NextResponse.json({ ok: true }, { status: 200 })
  } catch (e) {
    console.error(e); return NextResponse.json({ error: 'Server error' }, { status: 500 })
  }
}

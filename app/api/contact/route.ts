import { NextRequest, NextResponse } from 'next/server'
import { query } from '@/lib/db'
import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.SMTP_USER || 'contactpcnexus@gmail.com',
    pass: process.env.SMTP_PASS, // App password configured in Google account settings
  },
})

export async function POST(request: NextRequest) {
  try {
    const { name, email, phone, subject, message } = await request.json()

    // Validate input
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Insert into database
    const result = await query(
      `INSERT INTO contacts (name, email, phone, subject, message) 
       VALUES ($1, $2, $3, $4, $5) RETURNING id, created_at`,
      [name, email, phone || null, subject, message]
    )

    // Forward details to email inbox
    try {
      const mailOptions = {
        from: `"PC Nexus Contact" <${process.env.SMTP_USER || 'contactpcnexus@gmail.com'}>`,
        to: 'contactpcnexus@gmail.com',
        replyTo: email,
        subject: `New Lead: ${subject} from ${name}`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff;">
            <h2 style="color: #1e3a8a; margin-bottom: 20px; border-bottom: 2px solid #3b82f6; padding-bottom: 10px;">New Quote Request</h2>
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #475569; width: 140px;">Client Name:</td>
                <td style="padding: 8px 0; color: #0f172a;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #475569;">Email Address:</td>
                <td style="padding: 8px 0; color: #3b82f6;"><a href="mailto:${email}">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #475569;">Phone Number:</td>
                <td style="padding: 8px 0; color: #0f172a;">${phone || 'Not provided'}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #475569;">Project Type:</td>
                <td style="padding: 8px 0; color: #1e3a8a; font-weight: 600;">${subject}</td>
              </tr>
            </table>
            <div style="background-color: #f8fafc; padding: 15px; border-radius: 8px; border: 1px solid #e2e8f0;">
              <h4 style="margin-top: 0; color: #475569; margin-bottom: 10px;">Project Description:</h4>
              <p style="white-space: pre-wrap; margin: 0; color: #334155; line-height: 1.6;">${message}</p>
            </div>
            <p style="font-size: 11px; color: #94a3b8; margin-top: 30px; border-top: 1px solid #f1f5f9; padding-top: 15px; text-align: center;">
              This notification was generated automatically by the PC Nexus Technologies contact API.
            </p>
          </div>
        `,
      }

      if (process.env.SMTP_PASS) {
        await transporter.sendMail(mailOptions)
        console.log('[API] Contact forward email successfully sent to contactpcnexus@gmail.com')
      } else {
        console.warn('[API] Email forwarding skipped: process.env.SMTP_PASS is not configured.')
      }
    } catch (emailError) {
      // Log forwarding errors but do not crash the database response
      console.error('[API] Failed to forward contact details via email:', emailError)
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Your message has been sent successfully!',
        id: result.rows[0].id,
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('[API] Contact error:', error)
    return NextResponse.json(
      { error: 'Failed to process your message' },
      { status: 500 }
    )
  }
}

export async function GET() {
  try {
    const result = await query('SELECT * FROM contacts ORDER BY created_at DESC LIMIT 50')
    return NextResponse.json(result.rows)
  } catch (error) {
    console.error('[API] Get contacts error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch contacts' },
      { status: 500 }
    )
  }
}

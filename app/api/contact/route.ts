import { NextRequest, NextResponse } from 'next/server'
import { query } from '@/lib/db'

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

import { NextResponse } from 'next/server'
import { query } from '@/lib/db'

export async function GET() {
  try {
    const result = await query(
      'SELECT * FROM testimonials WHERE is_featured = true ORDER BY created_at DESC'
    )
    return NextResponse.json(result.rows || [])
  } catch (error) {
    console.error('[API] Testimonials error:', error)
    // Return empty array as fallback
    return NextResponse.json([], { status: 200 })
  }
}

export async function POST(request: Request) {
  try {
    const { name, role, company, message, rating, imageUrl } = await request.json()

    if (!name || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const result = await query(
      `INSERT INTO testimonials (name, role, company, message, rating, image_url, is_featured) 
       VALUES ($1, $2, $3, $4, $5, $6, false) 
       RETURNING *`,
      [name, role || null, company || null, message, rating || 5, imageUrl || null]
    )

    return NextResponse.json(
      {
        success: true,
        message: 'Testimonial submitted successfully!',
        data: result.rows[0],
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('[API] Create testimonial error:', error)
    return NextResponse.json(
      { error: 'Failed to submit testimonial' },
      { status: 500 }
    )
  }
}

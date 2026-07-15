import { NextResponse } from 'next/server'
import { query } from '@/lib/db'

export async function GET() {
  try {
    const result = await query(
      'SELECT * FROM projects ORDER BY created_at DESC'
    )
    return NextResponse.json(result.rows || [])
  } catch (error) {
    console.error('[API] Projects error:', error)
    // Return empty array as fallback
    return NextResponse.json([], { status: 200 })
  }
}

export async function POST(request: Request) {
  try {
    const { title, description, imageUrl, category, tags, link, isFeatured } = await request.json()

    if (!title) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const result = await query(
      `INSERT INTO projects (title, description, image_url, category, tags, link, is_featured) 
       VALUES ($1, $2, $3, $4, $5, $6, $7) 
       RETURNING *`,
      [title, description || null, imageUrl || null, category || null, tags || null, link || null, isFeatured || false]
    )

    return NextResponse.json(result.rows[0], { status: 201 })
  } catch (error) {
    console.error('[API] Create project error:', error)
    return NextResponse.json(
      { error: 'Failed to create project' },
      { status: 500 }
    )
  }
}

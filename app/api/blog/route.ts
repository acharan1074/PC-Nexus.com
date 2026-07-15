import { NextRequest, NextResponse } from 'next/server'
import { query } from '@/lib/db'

export async function GET(request: NextRequest) {
  try {
    const category = request.nextUrl.searchParams.get('category')
    const page = parseInt(request.nextUrl.searchParams.get('page') || '1', 10)
    const limit = parseInt(request.nextUrl.searchParams.get('limit') || '10', 10)
    const offset = (page - 1) * limit

    let queryText = 'SELECT * FROM blog_posts WHERE is_published = true'
    const params: any[] = []

    if (category) {
      queryText += ` AND category = $1`
      params.push(category)
    }

    queryText += ' ORDER BY published_at DESC LIMIT $' + (params.length + 1) + ' OFFSET $' + (params.length + 2)
    params.push(limit, offset)

    const result = await query(queryText, params)

    // Get total count
    let countQuery = 'SELECT COUNT(*) as total FROM blog_posts WHERE is_published = true'
    if (category) {
      countQuery += ' AND category = $1'
      const countResult = await query(countQuery, [category])
      const total = parseInt(countResult.rows[0].total, 10)

      return NextResponse.json({
        posts: result.rows,
        pagination: {
          page,
          limit,
          total,
          pages: Math.ceil(total / limit),
        },
      })
    }

    const countResult = await query(countQuery)
    const total = parseInt(countResult.rows[0].total, 10)

    return NextResponse.json({
      posts: result.rows,
      pagination: {
        page,
        limit,
        total,
        pages: Math.ceil(total / limit),
      },
    })
  } catch (error) {
    console.error('[API] Blog error:', error)
    // Return empty posts array as fallback
    return NextResponse.json(
      {
        posts: [],
        pagination: {
          page: 1,
          limit: 10,
          total: 0,
          pages: 0,
        },
      },
      { status: 200 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const { title, slug, excerpt, content, category, author, imageUrl } = await request.json()

    if (!title || !slug || !content) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const result = await query(
      `INSERT INTO blog_posts (title, slug, excerpt, content, category, author, image_url, is_published, published_at) 
       VALUES ($1, $2, $3, $4, $5, $6, $7, true, CURRENT_TIMESTAMP) 
       RETURNING *`,
      [title, slug, excerpt || null, content, category || null, author || null, imageUrl || null]
    )

    return NextResponse.json(result.rows[0], { status: 201 })
  } catch (error) {
    console.error('[API] Create blog error:', error)
    return NextResponse.json(
      { error: 'Failed to create blog post' },
      { status: 500 }
    )
  }
}

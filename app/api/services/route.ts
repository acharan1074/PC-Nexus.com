import { NextResponse } from 'next/server'
import { query } from '@/lib/db'

export async function GET() {
  try {
    const result = await query(
      'SELECT * FROM services WHERE is_active = true ORDER BY id ASC'
    )
    return NextResponse.json(result.rows || [])
  } catch (error) {
    console.error('[API] Services error:', error)
    // Return empty array as fallback
    return NextResponse.json([], { status: 200 })
  }
}

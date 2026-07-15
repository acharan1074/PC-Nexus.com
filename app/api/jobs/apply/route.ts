import { NextRequest, NextResponse } from 'next/server'
import { query } from '@/lib/db'

export async function POST(request: NextRequest) {
  try {
    const {
      jobId,
      jobTitle,
      fullName,
      email,
      phone,
      experienceYears,
      coverLetter,
    } = await request.json()

    // Validate input
    if (!jobId || !jobTitle || !fullName || !email) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Check if already applied
    const existingApplication = await query(
      'SELECT id FROM job_applications WHERE email = $1 AND job_id = $2',
      [email, jobId]
    )

    if (existingApplication.rows.length > 0) {
      return NextResponse.json(
        { error: 'You have already applied for this position' },
        { status: 400 }
      )
    }

    // Insert application
    const result = await query(
      `INSERT INTO job_applications 
       (job_id, job_title, full_name, email, phone, experience_years, cover_letter) 
       VALUES ($1, $2, $3, $4, $5, $6, $7) 
       RETURNING id, created_at`,
      [jobId, jobTitle, fullName, email, phone || null, experienceYears || null, coverLetter || null]
    )

    return NextResponse.json(
      {
        success: true,
        message: 'Your application has been submitted successfully!',
        id: result.rows[0].id,
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('[API] Job application error:', error)
    return NextResponse.json(
      { error: 'Failed to submit application' },
      { status: 500 }
    )
  }
}

export async function GET(request: NextRequest) {
  try {
    const jobId = request.nextUrl.searchParams.get('jobId')

    if (jobId) {
      const result = await query(
        'SELECT * FROM job_applications WHERE job_id = $1 ORDER BY created_at DESC',
        [jobId]
      )
      return NextResponse.json(result.rows)
    }

    const result = await query(
      'SELECT * FROM job_applications ORDER BY created_at DESC LIMIT 100'
    )
    return NextResponse.json(result.rows)
  } catch (error) {
    console.error('[API] Get applications error:', error)
    return NextResponse.json(
      { error: 'Failed to fetch applications' },
      { status: 500 }
    )
  }
}

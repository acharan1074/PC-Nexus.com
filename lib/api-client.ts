'use client'

export async function submitContact(data: {
  name: string
  email: string
  phone?: string
  subject: string
  message: string
}) {
  const response = await fetch('/api/contact', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })

  if (!response.ok) {
    const error = await response.json()
    throw new Error(error.error || 'Failed to submit contact form')
  }

  return response.json()
}

export async function submitJobApplication(data: {
  jobId: string
  jobTitle: string
  fullName: string
  email: string
  phone?: string
  experienceYears?: number
  coverLetter?: string
}) {
  const response = await fetch('/api/jobs/apply', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })

  if (!response.ok) {
    const error = await response.json()
    throw new Error(error.error || 'Failed to submit application')
  }

  return response.json()
}

export async function fetchBlogPosts(params?: {
  category?: string
  page?: number
  limit?: number
}) {
  const searchParams = new URLSearchParams()
  if (params?.category) searchParams.set('category', params.category)
  if (params?.page) searchParams.set('page', String(params.page))
  if (params?.limit) searchParams.set('limit', String(params.limit))

  const response = await fetch(`/api/blog?${searchParams}`)

  if (!response.ok) {
    throw new Error('Failed to fetch blog posts')
  }

  return response.json()
}

export async function fetchProjects() {
  const response = await fetch('/api/projects')

  if (!response.ok) {
    throw new Error('Failed to fetch projects')
  }

  return response.json()
}

export async function fetchTestimonials() {
  const response = await fetch('/api/testimonials')

  if (!response.ok) {
    throw new Error('Failed to fetch testimonials')
  }

  return response.json()
}

export async function fetchServices() {
  const response = await fetch('/api/services')

  if (!response.ok) {
    throw new Error('Failed to fetch services')
  }

  return response.json()
}

export async function submitTestimonial(data: {
  name: string
  role?: string
  company?: string
  message: string
  rating?: number
  imageUrl?: string
}) {
  const response = await fetch('/api/testimonials', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })

  if (!response.ok) {
    const error = await response.json()
    throw new Error(error.error || 'Failed to submit testimonial')
  }

  return response.json()
}

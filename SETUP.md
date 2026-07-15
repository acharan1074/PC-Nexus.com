# PC Nexus Website - Setup Guide

## Project Overview

A modern, professional tech agency website built with:
- **Frontend**: React + Next.js 16
- **Styling**: Tailwind CSS with modern white background design
- **Backend**: Next.js API Routes
- **Database**: PostgreSQL

## Architecture

### Frontend
- Modern white/light background UI design
- Responsive components (mobile, tablet, desktop)
- Reusable component system
- Client-side data fetching with React hooks

### Backend API Routes
All backend operations are handled through Next.js API routes (no separate Express server):

```
/api/contact        - Contact form submissions
/api/jobs/apply     - Job applications
/api/blog           - Blog posts (paginated)
/api/projects       - Portfolio projects
/api/services       - Service listings
/api/testimonials   - Client testimonials
```

### Database
PostgreSQL database with the following tables:
- `contacts` - Contact form submissions
- `job_applications` - Career page applications
- `testimonials` - Client feedback
- `blog_posts` - Blog articles
- `projects` - Portfolio projects
- `services` - Service offerings

## Setup Instructions

### 1. Install Dependencies
```bash
pnpm install
```

### 2. Database Setup

#### Option A: Local PostgreSQL
If you have PostgreSQL installed locally:

```bash
# Create database
createdb pc_nexus

# Create environment file
echo "DATABASE_URL=postgresql://localhost/pc_nexus" > .env.local
```

#### Option B: Cloud Database (Neon, Supabase, etc.)
Get your database connection string from your provider and add to `.env.local`:

```bash
DATABASE_URL=postgresql://[user]:[password]@[host]/[database]
```

### 3. Initialize Database

The database schema will be created automatically when you run the application. The schema includes:

```sql
-- tables.sql
CREATE TABLE contacts (...)
CREATE TABLE job_applications (...)
CREATE TABLE testimonials (...)
CREATE TABLE blog_posts (...)
CREATE TABLE projects (...)
CREATE TABLE services (...)
```

### 4. Environment Variables

Create `.env.local` file:

```env
DATABASE_URL=postgresql://user:password@localhost/pc_nexus
```

### 5. Run Development Server

```bash
pnpm dev
```

Visit `http://localhost:3000`

## Project Structure

```
/app
  /api              - API routes
    /contact/       - Contact form API
    /jobs/          - Job applications API
    /blog/          - Blog posts API
    /projects/      - Projects API
    /services/      - Services API
    /testimonials/  - Testimonials API
  /about            - About page
  /services         - Services page
  /portfolio        - Portfolio page
  /pricing          - Pricing page
  /careers          - Careers page
  /blog             - Blog listing page
  /case-studies     - Case studies page
  /contact          - Contact page
  /legal/
    /privacy-policy/
    /terms-of-service/
  /page.tsx         - Homepage
  /layout.tsx       - Root layout
  /globals.css      - Global styles

/components         - Reusable components
  /header.tsx       - Navigation header
  /footer.tsx       - Footer
  /service-card.tsx
  /project-card.tsx
  /testimonial-card.tsx
  /faq-accordion.tsx

/lib
  /db.ts            - Database connection
  /db-schema.ts     - Database initialization
  /api-client.ts    - API client utilities
```

## Features

### Homepage Sections
1. Hero Section - Eye-catching banner with CTA
2. Statistics - Key metrics
3. About - Company overview
4. Services - 6 core services
5. Why Choose Us - Key differentiators
6. Technologies - Tech stack
7. Process - Development methodology
8. Featured Projects - Portfolio showcase
9. Testimonials - Client feedback
10. FAQs - Common questions
11. CTA - Call to action
12. Contact Info - Multiple contact methods

### Pages
- **About**: Company story, team, values
- **Services**: Detailed service offerings
- **Portfolio**: Project showcase with filtering
- **Pricing**: Tiered pricing options
- **Careers**: Job listings and company culture
- **Blog**: Article listings with categories
- **Case Studies**: Detailed client stories
- **Contact**: Contact form with validation
- **Legal**: Privacy policy & Terms

### API Endpoints

#### Contact Form
```
POST /api/contact
Body: { name, email, phone, subject, message }
```

#### Job Applications
```
POST /api/jobs/apply
Body: { jobId, jobTitle, fullName, email, phone, experienceYears, coverLetter }
```

#### Blog Posts
```
GET /api/blog?category=&page=1&limit=10
POST /api/blog
Body: { title, slug, excerpt, content, category, author, imageUrl }
```

#### Projects
```
GET /api/projects
POST /api/projects
Body: { title, description, imageUrl, category, tags, link, isFeatured }
```

#### Services
```
GET /api/services
```

#### Testimonials
```
GET /api/testimonials
POST /api/testimonials
Body: { name, role, company, message, rating, imageUrl }
```

## Design System

### Colors
- **Primary**: #2563eb (Blue)
- **Accent**: #7c3aed (Purple)
- **Background**: #ffffff (White)
- **Text**: #1a1a1a (Dark)
- **Muted**: #6b7280 (Gray)

### Typography
- **Headings**: Bold, Dark Gray
- **Body**: Regular, Medium Gray
- **Accents**: Blue gradient text

### Components
- Cards with hover effects
- Rounded corners (xl = 0.75rem)
- Shadow elevation on hover
- Smooth transitions

## Building for Production

```bash
pnpm build
pnpm start
```

## Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Connect repo to Vercel
3. Set `DATABASE_URL` environment variable
4. Deploy

### Other Platforms
1. Build: `pnpm build`
2. Set `DATABASE_URL` environment variable
3. Start: `pnpm start`
4. Run migrations if needed

## API Client Usage

```typescript
// In client components (marked with 'use client')
import { submitContact, fetchBlogPosts, submitJobApplication } from '@/lib/api-client'

// Submit contact form
await submitContact({
  name: 'John',
  email: 'john@example.com',
  phone: '123-456-7890',
  subject: 'Project Inquiry',
  message: 'I have a project...'
})

// Fetch blog posts
const { posts, pagination } = await fetchBlogPosts({
  category: 'web-development',
  page: 1,
  limit: 10
})

// Submit job application
await submitJobApplication({
  jobId: 'dev-001',
  jobTitle: 'Senior Developer',
  fullName: 'Jane Doe',
  email: 'jane@example.com'
})
```

## Troubleshooting

### Database Connection Issues
1. Check `DATABASE_URL` in `.env.local`
2. Verify database is running and accessible
3. Check connection limits if using cloud database

### API Routes Not Working
1. Verify `/app/api` folder structure
2. Check route syntax: `/api/[resource]/route.ts`
3. Review error logs in browser console

### Styling Issues
1. Clear cache: `rm -rf .next`
2. Rebuild: `pnpm build`
3. Restart dev server: `pnpm dev`

## Performance Tips

1. **Images**: Use Next.js Image component with proper sizing
2. **Caching**: Configure revalidation for API routes
3. **Bundle Size**: Use dynamic imports for large components
4. **Database**: Add indexes on frequently queried columns

## Security Notes

1. **Environment Variables**: Never commit `.env.local`
2. **Input Validation**: All API routes validate input
3. **SQL Injection**: Using parameterized queries
4. **CORS**: Configure as needed for your deployment

## Support & Documentation

- Next.js: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com
- PostgreSQL: https://www.postgresql.org/docs
- React: https://react.dev

## License

This project is proprietary to PC Nexus.

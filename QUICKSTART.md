# PC Nexus Website - Quick Start Guide

## 30-Second Setup

### 1. Install & Run
```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev
```

Visit: `http://localhost:3000`

---

## With Database (Recommended)

### Option A: Local PostgreSQL

```bash
# 1. Create database
createdb pc_nexus

# 2. Create .env.local
echo "DATABASE_URL=postgresql://localhost/pc_nexus" > .env.local

# 3. Start server
pnpm dev
```

### Option B: Cloud Database (Neon, Supabase, Railway, etc.)

```bash
# 1. Get connection string from your provider

# 2. Create .env.local
echo "DATABASE_URL=postgresql://user:pass@host/db" > .env.local

# 3. Start server
pnpm dev
```

---

## What You Get

✅ Modern homepage with all sections
✅ 9 dedicated pages (about, services, portfolio, pricing, etc.)
✅ Contact form with validation
✅ Job application system
✅ Blog with pagination
✅ API routes for all data
✅ Responsive design (mobile, tablet, desktop)
✅ Professional white UI with blue accents

---

## Key Endpoints

### Pages
- `/` - Homepage
- `/about` - About company
- `/services` - Services offered
- `/portfolio` - Project showcase
- `/pricing` - Pricing plans
- `/careers` - Job listings
- `/blog` - Blog articles
- `/case-studies` - Case studies
- `/contact` - Contact form

### API Routes
- `POST /api/contact` - Submit contact form
- `POST /api/jobs/apply` - Apply for job
- `GET /api/blog?page=1` - Get blog posts
- `GET /api/projects` - Get projects
- `GET /api/services` - Get services
- `GET /api/testimonials` - Get testimonials

---

## Build for Production

```bash
# Build
pnpm build

# Test production build
pnpm start
```

---

## Database Schema (Auto-Created)

Tables automatically created:
- `contacts` - Contact submissions
- `job_applications` - Job applications
- `testimonials` - Client feedback
- `blog_posts` - Blog articles
- `projects` - Portfolio projects
- `services` - Service offerings

---

## File Structure

```
pc-nexus/
├── app/
│   ├── api/                 ← API routes
│   ├── about/               ← About page
│   ├── services/            ← Services page
│   ├── portfolio/           ← Portfolio page
│   ├── contact/             ← Contact page
│   └── page.tsx             ← Homepage
├── components/              ← React components
├── lib/
│   ├── db.ts               ← Database connection
│   ├── db-schema.ts        ← Database setup
│   └── api-client.ts       ← API client
├── public/                 ← Static files
└── package.json
```

---

## Common Commands

```bash
# Development
pnpm dev                    # Start dev server
pnpm build                  # Build for production
pnpm start                  # Run production build
pnpm lint                   # Run linter

# Database (manual operations)
psql pc_nexus              # Connect to database
\dt                        # List tables
\d contacts                # Describe table
SELECT * FROM contacts;    # Query data
```

---

## Troubleshooting

### Server won't start
```bash
# Clear Next.js cache
rm -rf .next

# Reinstall dependencies
pnpm install

# Try again
pnpm dev
```

### Database connection error
1. Check `.env.local` has `DATABASE_URL`
2. Verify database is running
3. Test connection: `psql postgresql://localhost/pc_nexus`

### API routes not working
1. Restart dev server
2. Clear browser cache
3. Check browser console for errors

---

## Configuration

### Environment Variables (`.env.local`)
```env
# Required
DATABASE_URL=postgresql://localhost/pc_nexus

# Optional for future use
NEXT_PUBLIC_API_URL=http://localhost:3000
```

---

## Performance Tips

1. **Images**: Already optimized with Next.js Image
2. **Caching**: Add revalidation to API routes
3. **Database**: Add indexes for frequently queried columns
4. **Bundle**: Already tree-shaked and optimized

---

## Deployment to Vercel

```bash
# 1. Push to GitHub
git add .
git commit -m "Initial commit"
git push

# 2. Connect to Vercel
# - Go to vercel.com
# - Connect GitHub repo
# - Set DATABASE_URL env var
# - Deploy

# Or via CLI
vercel
```

---

## Deployment to Other Platforms

### Railway
```bash
railway login
railway init
railway up
# Set DATABASE_URL in Railway dashboard
```

### Render
1. Create account on render.com
2. Create new web service
3. Connect GitHub repo
4. Set environment variables
5. Deploy

---

## What's Included

### Design
✅ Modern white background
✅ Blue (#2563eb) & purple accents
✅ Responsive on all devices
✅ Smooth animations
✅ Professional typography

### Content
✅ Homepage with 11 sections
✅ 9 full-featured pages
✅ Contact form integration
✅ Job application system
✅ Blog with pagination
✅ Case studies
✅ FAQ sections
✅ Testimonials

### Technology
✅ React 19
✅ Next.js 16
✅ TypeScript
✅ Tailwind CSS
✅ PostgreSQL
✅ API routes

---

## Next Steps

1. **Install**: `pnpm install && pnpm dev`
2. **Customize**: Update company info in pages
3. **Database**: Set up PostgreSQL
4. **Deploy**: Push to Vercel or your hosting
5. **Enhance**: Add features as needed

---

## Support

- 📚 Full docs: See `SETUP.md` and `IMPLEMENTATION.md`
- 🐛 Issues: Check `QUICKSTART.md` troubleshooting
- 📖 Docs: https://nextjs.org/docs
- 💬 Community: https://nextjs.org/community

---

## You're All Set! 🚀

Your PC Nexus website is ready to launch. Start with:

```bash
pnpm install
pnpm dev
```

Then visit `http://localhost:3000` to see your beautiful new website!

import Link from 'next/link'
import { Users, Zap, Heart, TrendingUp } from 'lucide-react'

export const metadata = {
  title: 'Careers - PC Nexus',
  description: 'Join our growing team at PC Nexus. We&apos;re hiring talented developers, designers, and team members.',
}

export default function Careers() {
  const jobOpenings = [
    {
      id: 1,
      title: 'Senior Full Stack Developer',
      department: 'Engineering',
      location: 'San Francisco, CA',
      type: 'Full-time',
      experience: '5+ years',
      description: 'We&apos;re looking for an experienced full-stack developer to lead technical projects.',
    },
    {
      id: 2,
      title: 'React/Next.js Developer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Join our frontend team and build amazing user interfaces for our clients.',
    },
    {
      id: 3,
      title: 'Mobile App Developer',
      department: 'Engineering',
      location: 'New York, NY',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Develop high-performance mobile applications for iOS and Android.',
    },
    {
      id: 4,
      title: 'UI/UX Designer',
      department: 'Design',
      location: 'Remote',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Create beautiful and functional designs for web and mobile applications.',
    },
    {
      id: 5,
      title: 'DevOps Engineer',
      department: 'Infrastructure',
      location: 'San Francisco, CA',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Build and maintain scalable cloud infrastructure and deployment pipelines.',
    },
    {
      id: 6,
      title: 'QA Engineer',
      department: 'Quality Assurance',
      location: 'Remote',
      type: 'Full-time',
      experience: '2+ years',
      description: 'Ensure product quality through comprehensive testing and automation.',
    },
  ]

  const benefits = [
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance, wellness programs, and gym memberships.',
    },
    {
      icon: TrendingUp,
      title: 'Professional Growth',
      description: 'Training budget, conference attendance, and career development opportunities.',
    },
    {
      icon: Zap,
      title: 'Flexible Work',
      description: 'Remote work options, flexible hours, and work-life balance.',
    },
    {
      icon: Users,
      title: 'Great Culture',
      description: 'Collaborative environment, team outings, and social events.',
    },
  ]

  const cultureValues = [
    {
      title: 'Innovation',
      description: 'We encourage creative thinking and experimentation to solve complex problems.',
    },
    {
      title: 'Collaboration',
      description: 'We work together as a team, sharing knowledge and supporting each other.',
    },
    {
      title: 'Excellence',
      description: 'We strive for excellence in everything we do and continuously improve.',
    },
    {
      title: 'Integrity',
      description: 'We operate with honesty, transparency, and ethical business practices.',
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-background to-card border-b border-border">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
              Join Our <span className="gradient-text">Team</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Build amazing software and grow your career with PC Nexus.
            </p>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-16 md:py-24 bg-card">
        <div className="section-container">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Why Join PC Nexus?</h2>
            <p className="text-lg text-muted-foreground">
              We&apos;re more than just a software company. We&apos;re a community of passionate people solving real-world problems.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="p-8 rounded-lg bg-background border border-border hover:border-primary transition-all">
                <div className="mb-4 inline-block p-3 rounded-lg bg-primary/10">
                  <benefit.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Culture */}
      <section className="py-16 md:py-24 bg-background">
        <div className="section-container">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Our Culture</h2>
            <p className="text-lg text-muted-foreground">
              Values that define who we are and how we work
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {cultureValues.map((value, idx) => (
              <div key={idx} className="p-8 rounded-lg bg-card border border-border">
                <h3 className="text-lg font-semibold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-16 md:py-24 bg-card">
        <div className="section-container">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Open Positions</h2>
            <p className="text-lg text-muted-foreground">
              We&apos;re actively hiring talented team members
            </p>
          </div>

          <div className="space-y-4">
            {jobOpenings.map((job) => (
              <div
                key={job.id}
                className="p-6 rounded-lg bg-background border border-border hover:border-primary transition-all group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {job.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">{job.department}</p>
                  </div>
                  <div className="text-right">
                    <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-2">
                      {job.type}
                    </span>
                  </div>
                </div>

                <p className="text-muted-foreground text-sm mb-4">{job.description}</p>

                <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                  <span>📍 {job.location}</span>
                  <span>💼 {job.experience}</span>
                </div>

                <Link
                  href={`/contact?position=${job.title}`}
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                >
                  Apply Now
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 10l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>

          {jobOpenings.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground mb-4">
                We don&apos;t currently have any open positions, but we&apos;re always interested in talented people!
              </p>
              <p className="text-muted-foreground">
                Send us your resume at{' '}
                <a href="mailto:contact@pcnexus.com" className="text-primary hover:underline">
                  contact@pcnexus.com
                </a>
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Team Statistics */}
      <section className="py-16 md:py-24 bg-background">
        <div className="section-container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: '6', label: 'Team Members' },
              { number: '1', label: 'Office' },
              { number: '100%', label: 'Remote / Hybrid' },
              { number: '24/7', label: 'Client Support' },
            ].map((stat, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.number}</div>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="py-16 md:py-24 bg-card">
        <div className="section-container">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">How to Apply</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { step: '1', title: 'Submit Your CV', description: 'Send your resume and cover letter' },
              { step: '2', title: 'Initial Review', description: 'We review your application' },
              { step: '3', title: 'Interview', description: 'Meet our team and discuss the role' },
              { step: '4', title: 'Join Us', description: 'Welcome aboard!' },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary/10 to-accent/10 border-y border-border">
        <div className="section-container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Ready to Make an Impact?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Apply today or reach out to learn more about opportunities at PC Nexus.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Apply Now
              </Link>
              <a
                href="mailto:contact@pcnexus.com"
                className="px-6 py-3 rounded-lg font-semibold border border-primary text-primary hover:bg-primary hover:text-white transition-colors"
              >
                Email Careers
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

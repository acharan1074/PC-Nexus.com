import Link from 'next/link'
import Image from 'next/image'

export const metadata = {
  title: 'Case Studies - PC Nexus',
  description: 'Explore detailed case studies of successful projects and how we delivered business results.',
}

export default function CaseStudies() {
  const caseStudies = [
    {
      id: 1,
      title: 'E-commerce Platform for Fashion Retailer',
      client: 'StyleHub Inc',
      industry: 'Retail',
      image: 'https://images.unsplash.com/photo-1661956600684-40bab6278d21?w=600&h=400&fit=crop',
      challenge: 'The client needed a scalable e-commerce platform to handle peak traffic during sales and integrate with their existing inventory system.',
      solution: 'We built a Next.js-based e-commerce platform with real-time inventory sync, payment processing, and performance optimizations.',
      results: [
        '300% increase in online sales',
        '99.9% uptime during peak traffic',
        '50% reduction in page load times',
        '$2.5M revenue in first year',
      ],
      technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'Stripe', 'AWS'],
    },
    {
      id: 2,
      title: 'SaaS Analytics Platform for Data-Driven Decision Making',
      client: 'DataViz Analytics',
      industry: 'Data Analytics',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      challenge: 'The startup needed a real-time analytics dashboard to help businesses visualize and analyze their data.',
      solution: 'We developed a comprehensive SaaS platform with real-time data processing, advanced visualizations, and customizable dashboards.',
      results: [
        '500+ active users in first quarter',
        'NPS score of 65',
        'Average session duration: 25 minutes',
        'Successfully raised $5M Series A funding',
      ],
      technologies: ['React', 'TypeScript', 'Python', 'PostgreSQL', 'GraphQL'],
    },
    {
      id: 3,
      title: 'Mobile Banking App with 100K+ Downloads',
      client: 'SecureBank',
      industry: 'Finance',
      image: 'https://images.unsplash.com/photo-1556656793-08538906a9f8?w=600&h=400&fit=crop',
      challenge: 'A fintech startup needed a secure mobile banking app with biometric authentication and real-time notifications.',
      solution: 'We built a React Native app with bank-grade security, biometric authentication, and real-time transaction updates.',
      results: [
        '100K+ downloads in 6 months',
        '4.8/5 app store rating',
        '80% daily active users',
        'Processing $1M+ transactions daily',
      ],
      technologies: ['React Native', 'Firebase', 'Node.js', 'AWS', 'Stripe'],
    },
    {
      id: 4,
      title: 'Enterprise CRM System for Global Fortune 500',
      client: 'GlobalCorp',
      industry: 'Enterprise',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop',
      challenge: 'A large enterprise needed a customized CRM system to replace their legacy system and improve sales team productivity.',
      solution: 'We designed and implemented a comprehensive CRM system with advanced reporting, automation, and integrations.',
      results: [
        '30% increase in sales team productivity',
        '50% reduction in sales cycle',
        '10K+ users across 25 countries',
        'ROI achieved in first year',
      ],
      technologies: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'Docker'],
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-background to-card border-b border-border">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
              Case <span className="gradient-text">Studies</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Real-world success stories and measurable results from our projects.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-16 md:py-24 bg-background">
        <div className="section-container">
          <div className="space-y-16">
            {caseStudies.map((study, idx) => (
              <div key={study.id} className="border border-border rounded-lg overflow-hidden hover:border-primary transition-all">
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Image */}
                  <div className={`relative h-96 md:h-full min-h-96 ${idx % 2 === 1 ? 'md:order-2' : ''}`}>
                    <Image
                      src={study.image}
                      alt={study.title}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Content */}
                  <div className={`p-8 md:p-12 flex flex-col justify-center bg-card ${idx % 2 === 1 ? 'md:order-1' : ''}`}>
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold mb-4">
                        {study.industry}
                      </span>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">{study.title}</h3>
                    <p className="text-sm text-muted-foreground mb-6">Client: {study.client}</p>

                    <div className="space-y-6 mb-8">
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Challenge</h4>
                        <p className="text-muted-foreground">{study.challenge}</p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-foreground mb-2">Solution</h4>
                        <p className="text-muted-foreground">{study.solution}</p>
                      </div>
                    </div>

                    <div className="mb-8">
                      <h4 className="font-semibold text-foreground mb-3">Results</h4>
                      <ul className="space-y-2">
                        {study.results.map((result, ridx) => (
                          <li key={ridx} className="flex items-start gap-2 text-muted-foreground">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0"></span>
                            {result}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-8">
                      <h4 className="font-semibold text-foreground mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {study.technologies.map((tech, tidx) => (
                          <span key={tidx} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all w-fit"
                    >
                      Similar Project? Let&apos;s Talk
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 10l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary/10 to-accent/10 border-y border-border">
        <div className="section-container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Ready to Write Your Success Story?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Let&apos;s discuss your project and create a case study together.
            </p>
            <Link href="/contact" className="btn-primary inline-block">
              Start Your Project
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

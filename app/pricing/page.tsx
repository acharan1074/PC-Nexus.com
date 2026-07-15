import Link from 'next/link'
import { CheckCircle } from 'lucide-react'

export const metadata = {
  title: 'Pricing - PC Nexus',
  description: 'Transparent and flexible pricing plans for our software development services. Choose the plan that fits your needs.',
}

export default function Pricing() {
  const pricingPlans = [
    {
      name: 'Startup',
      price: '$5,000',
      period: 'project',
      description: 'Perfect for early-stage projects and MVPs',
      features: [
        'Up to 160 hours of development',
        '4-week project timeline',
        'Basic web application',
        'Single platform (web)',
        'Standard support',
        'Git version control',
        'Basic testing',
      ],
      cta: 'Get Started',
      highlighted: false,
    },
    {
      name: 'Professional',
      price: '$15,000',
      period: 'project',
      description: 'Ideal for mid-sized projects',
      features: [
        'Up to 480 hours of development',
        '8-12 week project timeline',
        'Full-featured web application',
        'Mobile-responsive design',
        'API development',
        'Priority support',
        'Comprehensive testing',
        'Post-launch support (1 month)',
      ],
      cta: 'Get Started',
      highlighted: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'quote',
      description: 'For complex, large-scale projects',
      features: [
        'Unlimited hours and timeline',
        'Web + Mobile application',
        'Advanced integrations',
        'Cloud deployment',
        'Dedicated account manager',
        '24/7 priority support',
        'Advanced security measures',
        'Post-launch support (6 months)',
        'Custom solutions',
      ],
      cta: 'Request Quote',
      highlighted: false,
    },
  ]

  const additionalServices = [
    { name: 'Mobile App Development', price: '+$8,000 - $20,000' },
    { name: 'Cloud Deployment & DevOps', price: '+$3,000 - $10,000' },
    { name: 'Third-party API Integration', price: '+$2,000 - $8,000' },
    { name: 'Database Design & Optimization', price: '+$2,000 - $6,000' },
    { name: 'SEO & Performance Optimization', price: '+$2,000 - $5,000' },
    { name: 'Security Audit & Implementation', price: '+$3,000 - $8,000' },
    { name: 'Post-launch Support (Monthly)', price: '$1,000 - $5,000/month' },
    { name: 'Maintenance & Bug Fixes', price: '$800 - $3,000/month' },
  ]

  const faqs = [
    {
      question: 'Do you offer payment plans?',
      answer: 'Yes, we can structure payments across project milestones. Typically 30% upfront, 40% at mid-point, and 30% upon completion.',
    },
    {
      question: 'What is included in the pricing?',
      answer: 'Our pricing includes development, testing, basic documentation, and support during development. Additional services are available separately.',
    },
    {
      question: 'Can I customize a plan?',
      answer: 'Absolutely! We can customize any plan based on your specific requirements. Contact us for a custom quote.',
    },
    {
      question: 'What about ongoing support?',
      answer: 'Post-launch support is included for a limited period. Extended support packages are available at discounted rates.',
    },
    {
      question: 'Do you offer retainer services?',
      answer: 'Yes! We offer retainer packages for ongoing maintenance, updates, and support. These can be customized to your needs.',
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept bank transfers, credit cards, and other payment methods. We can also discuss custom payment arrangements.',
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-background to-card border-b border-border">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
              Transparent <span className="gradient-text">Pricing</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Simple, flexible plans for projects of any size. No hidden fees.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-16 md:py-24 bg-background">
        <div className="section-container">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {pricingPlans.map((plan, idx) => (
              <div
                key={idx}
                className={`rounded-lg border transition-all duration-300 flex flex-col ${
                  plan.highlighted
                    ? 'border-primary bg-card shadow-lg scale-105 md:scale-105'
                    : 'border-border bg-card hover:border-primary'
                }`}
              >
                {plan.highlighted && (
                  <div className="bg-primary text-white text-center py-2 text-sm font-semibold">
                    Most Popular
                  </div>
                )}

                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                  <p className="text-muted-foreground text-sm mb-6">{plan.description}</p>

                  <div className="mb-6">
                    <span className="text-4xl font-bold text-primary">{plan.price}</span>
                    <span className="text-muted-foreground ml-2">/ {plan.period}</span>
                  </div>

                  <ul className="space-y-3 mb-8 flex-1">
                    {plan.features.map((feature, fidx) => (
                      <li key={fidx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    href="/contact"
                    className={`py-3 rounded-lg font-semibold text-center transition-all ${
                      plan.highlighted
                        ? 'bg-primary text-white hover:opacity-90'
                        : 'border border-primary text-primary hover:bg-primary hover:text-white'
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-primary/5 rounded-lg p-8 text-center border border-primary/20">
            <p className="text-foreground mb-4">
              <span className="font-semibold">Need something custom?</span> Every project is unique. Contact us for a personalized quote.
            </p>
            <Link href="/contact" className="btn-primary">
              Request Custom Quote
            </Link>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 md:py-24 bg-card">
        <div className="section-container">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Additional Services</h2>
            <p className="text-lg text-muted-foreground">
              Add these services to any project package
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {additionalServices.map((service, idx) => (
              <div key={idx} className="p-6 rounded-lg bg-background border border-border hover:border-primary transition-all">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-foreground">{service.name}</span>
                  <span className="text-primary font-semibold">{service.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What&apos;s Included */}
      <section className="py-16 md:py-24 bg-background">
        <div className="section-container">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">What&apos;s Included</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Development',
                items: ['Custom coding', 'Code reviews', 'Version control', 'Architecture design'],
              },
              {
                title: 'Quality Assurance',
                items: ['Testing', 'Bug fixes', 'Performance optimization', 'Security review'],
              },
              {
                title: 'Support & Delivery',
                items: ['Documentation', 'Deployment', 'Knowledge transfer', 'Initial support'],
              },
            ].map((section, idx) => (
              <div key={idx} className="p-8 rounded-lg bg-card border border-border">
                <h3 className="text-lg font-semibold text-foreground mb-4">{section.title}</h3>
                <ul className="space-y-2">
                  {section.items.map((item, iidx) => (
                    <li key={iidx} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 flex-shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-16 md:py-24 bg-card">
        <div className="section-container">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Pricing FAQs</h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, idx) => (
              <div key={idx} className="p-6 rounded-lg bg-background border border-border">
                <h3 className="font-semibold text-foreground mb-2">{faq.question}</h3>
                <p className="text-muted-foreground text-sm">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-primary/10 to-accent/10 border-y border-border">
        <div className="section-container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">Ready to Get Started?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Contact us today to discuss your project and get a detailed quote.
            </p>
            <Link href="/contact" className="btn-primary inline-block">
              Get Your Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

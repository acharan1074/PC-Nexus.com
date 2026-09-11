import Image from 'next/image'
import Link from 'next/link'
import { Lightbulb, Star, Handshake } from 'lucide-react'

export const metadata = {
  title: 'About Us - PC Nexus Technologies',
  description: 'Learn about PC Nexus Technologies, our mission, vision, and core values that guide our commitment to delivering innovative software solutions.',
}

export default function About() {
  const coreValues = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We believe in the power of innovative thinking and continuously push boundaries to create cutting-edge solutions.',
    },
    {
      icon: Star,
      title: 'Quality',
      description: 'Excellence is not an act but a habit. Every project is delivered with the highest standards of quality and attention to detail.',
    },
    {
      icon: Handshake,
      title: 'Trust',
      description: 'We build lasting relationships based on transparency, reliability, and a commitment to delivering what we promise.',
    },
  ]

  const stats = [
    { number: '1+', label: 'Years Experience' },
    { number: '25+', label: 'Projects Completed' },
    { number: '20+', label: 'Happy Clients' },
    { number: '6', label: 'Dedicated Engineers' },
  ]

  const timeline = [
    {
      year: '2025',
      title: 'Founded',
      description: 'PC Nexus Technologies was established with a vision to deliver innovative software and digital solutions.',
    },
    {
      year: '2026',
      title: 'Growth & Expansion',
      description: 'Expanded our operations, grew the core team to 6 dedicated members, and expanded service offerings.',
    },
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-white via-blue-50 to-white border-b border-gray-200">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gray-900">
              About PC Nexus Technologies
            </h1>
            <p className="text-xl text-gray-600">
              Transforming Ideas Into Innovative Digital Solutions Since 2025
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Our Story</h2>
              <p className="text-gray-600 mb-4 leading-relaxed">
                PC Nexus Technologies Pvt. Ltd. was founded with a passion for technology and a vision to help businesses succeed in the digital world. We believe that every business, whether it&apos;s a startup, small business, educational institution, healthcare provider, or large enterprise, deserves a strong online presence and reliable digital solutions.
              </p>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Our goal is to simplify technology for our clients by delivering high-quality websites, software, mobile applications, AI-powered solutions, and digital services tailored to their unique business needs. We focus on understanding our clients&apos; goals, solving real business challenges, and creating solutions that improve efficiency, increase growth, and build a lasting online presence.
              </p>
              <p className="text-gray-600 leading-relaxed">
                At PC Nexus Technologies, we don&apos;t just develop software—we build long-term relationships based on transparency, quality, and trust. Every project is delivered with innovation, attention to detail, and a commitment to customer satisfaction.
              </p>
            </div>

             <div className="relative h-96 w-96 mx-auto rounded-full overflow-hidden shadow-xl border-4 border-gray-100">
              <Image
                src="/our_story.jpg"
                alt="Our Team at PC Nexus"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="section-container">
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div className="p-8 rounded-xl bg-white border border-gray-200 shadow-sm flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-shrink-0 relative w-20 h-20 bg-pink-50 rounded-full flex items-center justify-center border border-pink-100 shadow-inner">
                <Image
                  src="/mission_icon.png"
                  alt="Our Mission"
                  fill
                  className="object-contain p-3"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Our Mission</h3>
                <p className="text-gray-600 leading-relaxed">
                  To empower businesses with innovative, reliable, and scalable technology solutions that accelerate growth and digital transformation. We are committed to delivering excellence in every project and creating lasting value for our clients.
                </p>
              </div>
            </div>
            <div className="p-8 rounded-xl bg-white border border-gray-200 shadow-sm flex flex-col md:flex-row gap-6 items-start">
              <div className="flex-shrink-0 relative w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center border border-blue-100 shadow-inner">
                <Image
                  src="/vision_icon.png"
                  alt="Our Vision"
                  fill
                  className="object-contain p-3"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Our Vision</h3>
                <p className="text-gray-600 leading-relaxed">
                  To become a trusted global technology partner known for delivering innovative software solutions that create lasting value for businesses. We envision a world where every business has access to world-class digital solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Core Values */}
      <section className="py-16 md:py-24 bg-white">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Our Core Values</h2>
            <p className="text-lg text-gray-600">
              These values guide everything we do and define who we are as a company.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {coreValues.map((value, idx) => (
              <div key={idx} className="p-8 rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 border border-gray-200 shadow-sm hover:shadow-lg transition-all card-hover">
                <div className="mb-4 inline-block p-3 rounded-lg bg-blue-600">
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3 text-gray-900">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="section-container">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, idx) => (
              <div key={idx}>
                <div className="text-5xl font-bold text-white mb-2">{stat.number}</div>
                <p className="text-blue-100">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-24 bg-white">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Our Journey</h2>
            <p className="text-lg text-gray-600">
              From humble beginnings to becoming a trusted technology partner for businesses worldwide.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            {timeline.map((item, idx) => (
              <div key={idx} className="relative mb-8 pb-8 border-l-2 border-blue-600 pl-8 last:border-none last:pb-0">
                <div className="absolute -left-3 top-0 w-4 h-4 rounded-full bg-blue-600 border-4 border-white" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{item.year}</h3>
                <h4 className="text-lg font-semibold text-blue-600 mb-2">{item.title}</h4>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder & Team Section */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 font-display">Our Team & Leadership</h2>
            <p className="text-lg text-gray-600">
              Meet the core professionals driving our technology development and operational excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Alligaskhanpet Charan - Founder and CEO */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-md overflow-hidden flex flex-col">
              <div className="relative h-80 w-full bg-slate-100">
                <Image
                  src="/team_charan.png"
                  alt="Alligaskhanpet Charan - Founder and CEO"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className="p-8 text-center flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">Alligaskhanpet Charan</h3>
                  <p className="text-lg font-semibold text-blue-600 mb-4">Founder & CEO</p>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    With a passion for technology and a vision to empower businesses through digital transformation, Alligaskhanpet Charan founded PC Nexus Technologies to deliver innovative software solutions that create lasting value for clients worldwide.
                  </p>
                </div>
              </div>
            </div>

            {/* Prasad - Cloud Engineer */}
            <div className="bg-white rounded-xl border border-gray-200 shadow-md overflow-hidden flex flex-col">
              <div className="relative h-80 w-full bg-slate-100">
                <Image
                  src="/team_prasad.png"
                  alt="Prasad - Cloud Engineer"
                  fill
                  className="object-cover object-top"
                />
              </div>
              <div className="p-8 text-center flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">Prasad</h3>
                  <p className="text-lg font-semibold text-blue-600 mb-4">Cloud Engineer & DevOps</p>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    Prasad designs and maintains our cloud architecture, ensuring scalable hosting environments, database reliability, serverless infrastructure, and high availability systems for our enterprise products.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Expertise Section */}
      <section className="py-16 md:py-24 bg-white border-t border-b border-gray-200">
        <div className="section-container">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 font-display">Our Core Technical Expertise</h2>
            <p className="text-lg text-gray-600">
              We leverage modern frameworks, databases, and machine learning structures to build production-ready digital products.
            </p>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {[
              { category: 'Frontend', skills: ['React.js', 'Next.js', 'Tailwind CSS', 'TypeScript', 'HTML5/CSS3'] },
              { category: 'Backend & APIs', skills: ['Node.js', 'Express.js', 'FastAPI', 'Django', 'REST / GraphQL'] },
              { category: 'Databases', skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Prisma ORM'] },
              { category: 'Cloud & DevOps', skills: ['AWS', 'Vercel', 'CI/CD Pipelines', 'VPS / Linux', 'Docker'] },
              { category: 'AI & Machine Learning', skills: ['TensorFlow', 'Scikit-Learn', 'Natural Language NLP', 'Chatbots', 'Python Scripting'] },
            ].map((item, idx) => (
              <div key={idx} className="p-6 rounded-xl bg-slate-50 border border-gray-200 shadow-sm flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-gray-900 text-base mb-4 border-b border-gray-200 pb-2">{item.category}</h3>
                  <ul className="space-y-2 text-sm text-gray-600 font-medium">
                    {item.skills.map((skill, sidx) => (
                      <li key={sidx} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600 flex-shrink-0" />
                        <span>{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="section-container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Let's Work Together</h2>
            <p className="text-lg text-gray-600 mb-8">
              Ready to transform your business with innovative digital solutions? Get in touch with us today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="btn-primary">
                Get a Free Consultation
              </Link>
              <Link href="/services" className="btn-secondary">
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

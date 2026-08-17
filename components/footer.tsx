import Link from 'next/link'
import { Mail, Phone, MapPin } from 'lucide-react'
import { Logo } from './logo'

export function Footer() {
  const socialLinks = [
    { href: 'https://facebook.com', label: 'Facebook' },
    { href: 'https://twitter.com', label: 'Twitter' },
    { href: 'https://linkedin.com', label: 'LinkedIn' },
    { href: 'https://github.com', label: 'GitHub' },
  ]

  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-slate-100">
      <div className="section-container py-12 md:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <Logo />
            </div>
            <p className="text-sm text-slate-300 mb-4">
              Transforming businesses through innovative software solutions.
            </p>
            <div className="flex gap-3">
              {socialLinks.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="w-9 h-9 rounded-lg bg-slate-800 text-slate-300 hover:bg-blue-600 hover:text-white transition-colors flex items-center justify-center text-sm font-medium"
                  title={label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {label.charAt(0)}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-white mb-4">Services</h4>
            <ul className="space-y-3">
              {['Web Development', 'Mobile Apps', 'Cloud Solutions', 'Data Analytics'].map((item) => (
                <li key={item}>
                  <Link href="/services" className="text-sm text-slate-300 hover:text-white transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-white mb-4">Company</h4>
            <ul className="space-y-3">
              {[
                { label: 'About', href: '/about' },
                { label: 'Careers', href: '/careers' },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-slate-300 hover:text-white transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white mb-4">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <a href="mailto:contactpcnexus@gmail.com" className="text-sm text-slate-300 hover:text-white transition-colors">
                  contactpcnexus@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <a href="tel:+919705309630" className="text-sm text-slate-300 hover:text-white transition-colors">
                  +91 9705309630
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                <span className="text-sm text-slate-300">
                  "Kalwakurthy", Telangana 509324
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-400">
              © 2024 PC Nexus. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link href="/legal/privacy-policy" className="text-sm text-slate-300 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/legal/terms-of-service" className="text-sm text-slate-300 hover:text-white transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

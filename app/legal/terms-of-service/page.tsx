export const metadata = {
  title: 'Terms of Service - PC Nexus',
  description: 'Read our terms of service to understand the rules and regulations for using PC Nexus services.',
}

export default function TermsOfService() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-background to-card border-b border-border">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Terms of Service</h1>
            <p className="text-muted-foreground">Last updated: January 2024</p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="section-container">
          <div className="max-w-3xl mx-auto prose prose-invert space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Acceptance of Terms</h2>
              <p className="text-muted-foreground mb-4">
                By accessing and using the PC Nexus website and services, you accept and agree to be bound by the terms
                and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Service Description</h2>
              <p className="text-muted-foreground mb-4">
                PC Nexus provides software development, consulting, and related services (&quot;Services&quot;). The Company
                reserves the right to modify, suspend, or discontinue any service with or without notice to you.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">3. User Responsibilities</h2>
              <p className="text-muted-foreground mb-4">You agree to:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Provide accurate and complete information</li>
                <li>Maintain the confidentiality of your account</li>
                <li>Not engage in any unlawful or inappropriate activities</li>
                <li>Respect intellectual property rights</li>
                <li>Not interfere with website operations</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Intellectual Property Rights</h2>
              <p className="text-muted-foreground mb-4">
                All content on our website, including text, graphics, logos, images, and software, is the property of PC Nexus
                or its content suppliers and is protected by international copyright laws. Custom work delivered to clients
                becomes the property of the client upon final payment.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Limitation of Liability</h2>
              <p className="text-muted-foreground mb-4">
                PC Nexus shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting
                from your use of or inability to use the services or content on the website, even if PC Nexus has been advised
                of the possibility of such damages.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Payment Terms</h2>
              <p className="text-muted-foreground mb-4">
                Payment for services is due according to the terms specified in the project agreement. Late payments may incur
                interest or suspension of services at PC Nexus&apos;s sole discretion.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Confidentiality</h2>
              <p className="text-muted-foreground mb-4">
                Both parties agree to maintain confidentiality regarding any proprietary or sensitive information shared during
                the engagement, subject to applicable laws and professional obligations.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">8. Modifications to Terms</h2>
              <p className="text-muted-foreground mb-4">
                PC Nexus reserves the right to modify these terms at any time. Your continued use of the website following the
                posting of revised terms means that you accept and agree to the changes.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">9. Governing Law</h2>
              <p className="text-muted-foreground mb-4">
                These terms and conditions are governed by and construed in accordance with the laws of Telangana, India,
                and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">10. Contact Information</h2>
              <p className="text-muted-foreground mb-4">
                If you have any questions about these Terms of Service, please contact us at:
              </p>
              <div className="space-y-2 text-muted-foreground">
                <p>Email: contactpcnexus@gmail.com</p>
                <p>Address: "Kalwakurthy", Telangana 509324, India</p>
              </div>
            </div>

            <div className="bg-primary/10 p-6 rounded-lg border border-primary/20">
              <p className="text-sm text-muted-foreground">
                These Terms of Service are provided for informational purposes. For a complete legal document, please consult
                with your legal team or visit our office.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

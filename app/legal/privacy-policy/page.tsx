export const metadata = {
  title: 'Privacy Policy - PC Nexus',
  description: 'Read our privacy policy to understand how we collect, use, and protect your personal information.',
}

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-background to-card border-b border-border">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Privacy Policy</h1>
            <p className="text-muted-foreground">Last updated: January 2024</p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="section-container">
          <div className="max-w-3xl mx-auto prose prose-invert space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Introduction</h2>
              <p className="text-muted-foreground mb-4">
                PC Nexus (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) operates the website.
                This page informs you of our policies regarding the collection, use, and disclosure of personal
                data when you use our service and the choices you have associated with that data.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Information Collection and Use</h2>
              <p className="text-muted-foreground mb-4">We collect several different types of information for various purposes:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>Personal Data: Name, email address, phone number, company information</li>
                <li>Technical Data: IP address, browser type, operating system, referral source</li>
                <li>Usage Data: Pages visited, time spent, interactions with website features</li>
                <li>Communication Data: Messages sent through contact forms or email</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Use of Data</h2>
              <p className="text-muted-foreground mb-4">PC Nexus uses the collected data for various purposes:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>To provide and maintain our service</li>
                <li>To notify you about changes to our service</li>
                <li>To allow you to participate in interactive features of our service</li>
                <li>To provide customer support</li>
                <li>To gather analysis or valuable information so we can improve our service</li>
                <li>To monitor the usage of our service</li>
                <li>To detect, prevent, and address technical and security issues</li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Security of Data</h2>
              <p className="text-muted-foreground mb-4">
                The security of your data is important to us but remember that no method of transmission over the
                Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable
                means to protect your Personal Data, we cannot guarantee its absolute security.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Changes to This Privacy Policy</h2>
              <p className="text-muted-foreground mb-4">
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new
                Privacy Policy on this page and updating the &quot;Last updated&quot; date at the top of this Privacy Policy.
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Contact Us</h2>
              <p className="text-muted-foreground mb-4">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <div className="space-y-2 text-muted-foreground">
                <p>Email: contact@pcnexus.com</p>
                <p>Address: 123 Tech Street, San Francisco, CA 94105, USA</p>
              </div>
            </div>

            <div className="bg-primary/10 p-6 rounded-lg border border-primary/20">
              <p className="text-sm text-muted-foreground">
                This Privacy Policy is provided for informational purposes. For a complete legal document, please consult
                with your legal team or visit our office.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default function Accessibility() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-display font-bold mb-4 text-[var(--foreground)]">
              Accessibility Statement
            </h1>
            <p className="text-lg text-[var(--muted-foreground)]">
              EVER GREEN Tech is committed to making our website accessible to everyone
            </p>
          </div>

          <div className="space-y-8">
            <div className="card-premium p-8">
              <h2 className="text-2xl font-semibold mb-4 text-[var(--foreground)]">
                Our Commitment
              </h2>
              <p className="text-[var(--muted-foreground)] leading-relaxed mb-4">
                At EVER GREEN Tech, we are committed to ensuring digital accessibility for people with disabilities. 
                We are continually improving the user experience for everyone and applying the relevant accessibility 
                standards to ensure we provide equal access to all our users.
              </p>
              <p className="text-[var(--muted-foreground)] leading-relaxed">
                Our website follows the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA standards and 
                strives to provide an inclusive shopping experience for all customers.
              </p>
            </div>

            <div className="card-premium p-8">
              <h2 className="text-2xl font-semibold mb-4 text-[var(--foreground)]">
                Accessibility Features
              </h2>
              <ul className="space-y-3 text-[var(--muted-foreground)]">
                <li className="flex items-start">
                  <span className="text-[var(--primary)] mr-3">✓</span>
                  <span>High contrast color schemes with customizable themes</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[var(--primary)] mr-3">✓</span>
                  <span>Keyboard navigation support for all interactive elements</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[var(--primary)] mr-3">✓</span>
                  <span>Screen reader compatible with proper ARIA labels</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[var(--primary)] mr-3">✓</span>
                  <span>Responsive design that works with assistive technologies</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[var(--primary)] mr-3">✓</span>
                  <span>Clear and consistent navigation structure</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[var(--primary)] mr-3">✓</span>
                  <span>Alt text for all meaningful images</span>
                </li>
              </ul>
            </div>

            <div className="card-premium p-8">
              <h2 className="text-2xl font-semibold mb-4 text-[var(--foreground)]">
                Theme Accessibility
              </h2>
              <p className="text-[var(--muted-foreground)] leading-relaxed mb-4">
                Our website offers multiple theme options designed with accessibility in mind:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-[var(--secondary)] p-4 rounded-lg">
                  <h3 className="font-semibold text-[var(--foreground)] mb-2">Dark Themes</h3>
                  <p className="text-sm text-[var(--muted-foreground)]">
                    Reduced eye strain for users with light sensitivity and better contrast ratios
                  </p>
                </div>
                <div className="bg-[var(--secondary)] p-4 rounded-lg">
                  <h3 className="font-semibold text-[var(--foreground)] mb-2">Light Themes</h3>
                  <p className="text-sm text-[var(--muted-foreground)]">
                    High contrast options for users with low vision or reading difficulties
                  </p>
                </div>
              </div>
            </div>

            <div className="card-premium p-8">
              <h2 className="text-2xl font-semibold mb-4 text-[var(--foreground)]">
                Assistive Technology Support
              </h2>
              <p className="text-[var(--muted-foreground)] leading-relaxed mb-4">
                Our website is designed to work with a wide range of assistive technologies:
              </p>
              <ul className="space-y-2 text-[var(--muted-foreground)]">
                <li>• Screen readers (NVDA, JAWS, VoiceOver, TalkBack)</li>
                <li>• Screen magnifiers</li>
                <li>• Voice recognition software</li>
                <li>• Alternative input devices</li>
                <li>• Keyboard-only navigation</li>
              </ul>
            </div>

            <div className="card-premium p-8">
              <h2 className="text-2xl font-semibold mb-4 text-[var(--foreground)]">
                Feedback and Support
              </h2>
              <p className="text-[var(--muted-foreground)] leading-relaxed mb-4">
                We welcome feedback on the accessibility of our website. If you encounter any accessibility 
                barriers or have suggestions for improvement, please contact us:
              </p>
              <div className="bg-[var(--secondary)] p-4 rounded-lg">
                <p className="text-[var(--foreground)] font-medium">Email:</p>
                <p className="text-[var(--primary)]">accessibility@evergreen.tech</p>
                <p className="text-[var(--foreground)] font-medium mt-3">Phone:</p>
                <p className="text-[var(--primary)]">1800-XXX-XXXX</p>
              </div>
            </div>

            <div className="card-premium p-8">
              <h2 className="text-2xl font-semibold mb-4 text-[var(--foreground)]">
                Ongoing Efforts
              </h2>
              <p className="text-[var(--muted-foreground)] leading-relaxed">
                We are continuously working to improve the accessibility of our website. This includes regular 
                accessibility audits, user testing with people with disabilities, and staying updated with the 
                latest accessibility guidelines and best practices.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-[var(--muted-foreground)]">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Sitemap() {
  const siteStructure = [
    {
      title: 'Main Pages',
      links: [
        { name: 'Home', url: '/', priority: '1.0' },
        { name: 'About Us', url: '/about', priority: '0.8' },
        { name: 'Products', url: '/products', priority: '0.9' },
        { name: 'Categories', url: '/categories', priority: '0.8' },
        { name: 'Blog', url: '/blog', priority: '0.7' },
        { name: 'Contact', url: '/contact', priority: '0.8' },
      ]
    },
    {
      title: 'Product Categories',
      links: [
        { name: 'Kitchen Chimneys', url: '/categories/chimneys', priority: '0.8' },
        { name: 'Smart Gadgets', url: '/categories/gadgets', priority: '0.8' },
        { name: 'Water Purifiers', url: '/categories/ro', priority: '0.8' },
        { name: 'Solar Equipment', url: '/categories/solar', priority: '0.8' },
        { name: 'Lighting Solutions', url: '/categories/lighting', priority: '0.8' },
      ]
    },
    {
      title: 'Customer Service',
      links: [
        { name: 'Contact Us', url: '/contact', priority: '0.8' },
        { name: 'Shipping & Delivery', url: '/shipping', priority: '0.6' },
        { name: 'Returns & Exchanges', url: '/returns', priority: '0.6' },
        { name: 'Warranty', url: '/warranty', priority: '0.6' },
        { name: 'FAQs', url: '/faq', priority: '0.7' },
      ]
    },
    {
      title: 'Legal & Policies',
      links: [
        { name: 'Privacy Policy', url: '/privacy', priority: '0.5' },
        { name: 'Terms of Service', url: '/terms', priority: '0.5' },
        { name: 'Cookie Policy', url: '/cookies', priority: '0.4' },
        { name: 'Refund Policy', url: '/refund', priority: '0.5' },
        { name: 'Security', url: '/security', priority: '0.5' },
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'Careers', url: '/careers', priority: '0.6' },
        { name: 'Accessibility', url: '/accessibility', priority: '0.5' },
        { name: 'Sitemap', url: '/sitemap', priority: '0.4' },
        { name: 'Deals & Offers', url: '/deals', priority: '0.7' },
        { name: 'Themes', url: '/themes', priority: '0.6' },
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-display font-bold mb-4 text-[var(--foreground)]">
              Sitemap
            </h1>
            <p className="text-lg text-[var(--muted-foreground)]">
              Navigate through all pages of EVER GREEN Tech website
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteStructure.map((section, index) => (
              <div key={index} className="card-premium p-6">
                <h2 className="text-xl font-semibold mb-4 text-[var(--foreground)]">
                  {section.title}
                </h2>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link.url}
                        className="text-[var(--primary)] hover:text-[var(--accent)] transition-colors duration-200 flex items-center justify-between"
                      >
                        <span>{link.name}</span>
                        <span className="text-xs text-[var(--muted-foreground)]">
                          {link.priority}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-[var(--muted-foreground)]">
              Last updated: {new Date().toLocaleDateString()}
            </p>
            <p className="text-sm text-[var(--muted-foreground)] mt-2">
              This sitemap helps search engines and users navigate our website efficiently.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

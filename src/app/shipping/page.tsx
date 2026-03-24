export default function Shipping() {
  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-display font-bold mb-4 text-[var(--foreground)]">
              Shipping & Delivery
            </h1>
            <p className="text-lg text-[var(--muted-foreground)]">
              Fast, reliable, and secure delivery across India
            </p>
          </div>

          <div className="space-y-8">
            <div className="card-premium p-8">
              <h2 className="text-2xl font-semibold mb-4 text-[var(--foreground)]">
                Delivery Timeframes
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-[var(--secondary)] p-4 rounded-lg">
                  <h3 className="font-semibold text-[var(--foreground)] mb-2">Standard Delivery</h3>
                  <p className="text-[var(--muted-foreground)] mb-2">4-7 business days</p>
                  <p className="text-sm text-[var(--muted-foreground)]">
                    Free for orders above ₹999. ₹49 for orders below ₹999.
                  </p>
                </div>
                <div className="bg-[var(--secondary)] p-4 rounded-lg">
                  <h3 className="font-semibold text-[var(--foreground)] mb-2">Express Delivery</h3>
                  <p className="text-[var(--muted-foreground)] mb-2">2-3 business days</p>
                  <p className="text-sm text-[var(--muted-foreground)]">
                    ₹149 for all orders. Available in major cities only.
                  </p>
                </div>
              </div>
            </div>

            <div className="card-premium p-8">
              <h2 className="text-2xl font-semibold mb-4 text-[var(--foreground)]">
                Shipping Areas
              </h2>
              <p className="text-[var(--muted-foreground)] leading-relaxed mb-4">
                We deliver to over 20,000 pin codes across India, including all major cities and most rural areas. 
                Some remote locations may have extended delivery times.
              </p>
              <div className="bg-[var(--secondary)] p-4 rounded-lg">
                <h3 className="font-semibold text-[var(--foreground)] mb-2">Major Cities Covered:</h3>
                <p className="text-sm text-[var(--muted-foreground)]">
                  Delhi, Mumbai, Bangalore, Chennai, Kolkata, Hyderabad, Pune, Ahmedabad, Jaipur, 
                  Lucknow, and many more...
                </p>
              </div>
            </div>

            <div className="card-premium p-8">
              <h2 className="text-2xl font-semibold mb-4 text-[var(--foreground)]">
                Order Tracking
              </h2>
              <p className="text-[var(--muted-foreground)] leading-relaxed mb-4">
                Once your order is shipped, you'll receive a tracking number via email and SMS. 
                You can track your order in real-time on our website or the courier partner's website.
              </p>
              <ul className="space-y-2 text-[var(--muted-foreground)]">
                <li>• Real-time tracking updates</li>
                <li>• Email and SMS notifications</li>
                <li>• Estimated delivery time</li>
                <li>• Delivery partner details</li>
              </ul>
            </div>

            <div className="card-premium p-8">
              <h2 className="text-2xl font-semibold mb-4 text-[var(--foreground)]">
                Shipping Charges
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-[var(--border)]">
                      <th className="pb-3 text-[var(--foreground)]">Order Value</th>
                      <th className="pb-3 text-[var(--foreground)]">Standard</th>
                      <th className="pb-3 text-[var(--foreground)]">Express</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-[var(--border)]">
                      <td className="py-3 text-[var(--muted-foreground)]">Below ₹999</td>
                      <td className="py-3 text-[var(--foreground)]">₹49</td>
                      <td className="py-3 text-[var(--foreground)]">₹149</td>
                    </tr>
                    <tr className="border-b border-[var(--border)]">
                      <td className="py-3 text-[var(--muted-foreground)]">₹999 - ₹4,999</td>
                      <td className="py-3 text-[var(--foreground)]">Free</td>
                      <td className="py-3 text-[var(--foreground)]">₹149</td>
                    </tr>
                    <tr>
                      <td className="py-3 text-[var(--muted-foreground)]">Above ₹4,999</td>
                      <td className="py-3 text-[var(--foreground)]">Free</td>
                      <td className="py-3 text-[var(--foreground)]">₹99</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="card-premium p-8">
              <h2 className="text-2xl font-semibold mb-4 text-[var(--foreground)]">
                Special Instructions
              </h2>
              <ul className="space-y-3 text-[var(--muted-foreground)]">
                <li className="flex items-start">
                  <span className="text-[var(--primary)] mr-3">•</span>
                  <span>Delivery is attempted twice before the order is returned to our warehouse</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[var(--primary)] mr-3">•</span>
                  <span>Please ensure someone is available to receive the delivery</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[var(--primary)] mr-3">•</span>
                  <span>Check the package condition before accepting delivery</span>
                </li>
                <li className="flex items-start">
                  <span className="text-[var(--primary)] mr-3">•</span>
                  <span>Installation services are available for selected products</span>
                </li>
              </ul>
            </div>

            <div className="card-premium p-8">
              <h2 className="text-2xl font-semibold mb-4 text-[var(--foreground)]">
                International Shipping
              </h2>
              <p className="text-[var(--muted-foreground)] leading-relaxed">
                Currently, we only ship within India. We are working on expanding our services to 
                international markets. Please sign up for our newsletter to stay updated on international shipping availability.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="bg-[var(--secondary)] p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-2 text-[var(--foreground)]">
                Need Help?
              </h3>
              <p className="text-[var(--muted-foreground)] mb-4">
                Our customer support team is here to help with any shipping-related queries.
              </p>
              <p className="text-[var(--primary)]">1800-XXX-XXXX</p>
              <p className="text-[var(--primary)]">support@evergreen.tech</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

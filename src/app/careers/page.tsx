export default function Careers() {
  const openPositions = [
    {
      title: 'Senior Frontend Developer',
      department: 'Engineering',
      location: 'Jaipur, Rajasthan',
      type: 'Full-time',
      experience: '3-5 years',
      description: 'We are looking for an experienced frontend developer to join our engineering team and help build amazing user experiences.'
    },
    {
      title: 'Product Manager',
      department: 'Product',
      location: 'Jaipur, Rajasthan',
      type: 'Full-time',
      experience: '2-4 years',
      description: 'Join our product team to help shape the future of electronics e-commerce in India.'
    },
    {
      title: 'Digital Marketing Specialist',
      department: 'Marketing',
      location: 'Jaipur, Rajasthan',
      type: 'Full-time',
      experience: '2-3 years',
      description: 'Help us reach more customers with innovative digital marketing strategies.'
    },
    {
      title: 'Customer Success Manager',
      department: 'Customer Service',
      location: 'Jaipur, Rajasthan',
      type: 'Full-time',
      experience: '1-3 years',
      description: 'Be the voice of EVER GREEN Tech and ensure our customers have the best experience.'
    }
  ]

  const benefits = [
    'Competitive salary and performance bonuses',
    'Health insurance for you and your family',
    'Flexible work arrangements',
    'Professional development opportunities',
    'Employee discounts on all products',
    'Modern office space in Jaipur',
    'Regular team events and activities',
    'Career growth opportunities'
  ]

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)] py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-display font-bold mb-4 text-[var(--foreground)]">
              Careers at EVER GREEN Tech
            </h1>
            <p className="text-lg text-[var(--muted-foreground)] max-w-3xl mx-auto">
              Join our team and help us revolutionize the electronics e-commerce experience in India. 
              We're looking for passionate individuals who want to make a difference.
            </p>
          </div>

          {/* Why Join Us */}
          <div className="mb-16">
            <div className="card-premium p-8">
              <h2 className="text-3xl font-semibold mb-6 text-center text-[var(--foreground)]">
                Why Join EVER GREEN Tech?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-[var(--primary)] rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">🚀</span>
                  </div>
                  <h3 className="font-semibold mb-2 text-[var(--foreground)]">Growth</h3>
                  <p className="text-sm text-[var(--muted-foreground)]">
                    Fast-growing company with ample opportunities for career advancement
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-[var(--primary)] rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">💡</span>
                  </div>
                  <h3 className="font-semibold mb-2 text-[var(--foreground)]">Innovation</h3>
                  <p className="text-sm text-[var(--muted-foreground)]">
                    Work on cutting-edge technology and innovative solutions
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-[var(--primary)] rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">🤝</span>
                  </div>
                  <h3 className="font-semibold mb-2 text-[var(--foreground)]">Culture</h3>
                  <p className="text-sm text-[var(--muted-foreground)]">
                    Collaborative environment with amazing work-life balance
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-[var(--primary)] rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">🎯</span>
                  </div>
                  <h3 className="font-semibold mb-2 text-[var(--foreground)]">Impact</h3>
                  <p className="text-sm text-[var(--muted-foreground)]">
                    Make a real difference in the electronics retail industry
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Open Positions */}
          <div className="mb-16">
            <h2 className="text-3xl font-semibold mb-8 text-center text-[var(--foreground)]">
              Open Positions
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {openPositions.map((position, index) => (
                <div key={index} className="card-premium p-6 hover-lift">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-[var(--foreground)]">
                      {position.title}
                    </h3>
                    <span className="bg-[var(--primary)] text-white px-3 py-1 rounded-full text-sm">
                      {position.type}
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div>
                      <span className="text-sm text-[var(--muted-foreground)]">Department:</span>
                      <p className="font-medium text-[var(--foreground)]">{position.department}</p>
                    </div>
                    <div>
                      <span className="text-sm text-[var(--muted-foreground)]">Location:</span>
                      <p className="font-medium text-[var(--foreground)]">{position.location}</p>
                    </div>
                    <div>
                      <span className="text-sm text-[var(--muted-foreground)]">Experience:</span>
                      <p className="font-medium text-[var(--foreground)]">{position.experience}</p>
                    </div>
                  </div>
                  
                  <p className="text-[var(--muted-foreground)] mb-4">
                    {position.description}
                  </p>
                  
                  <button className="w-full bg-[var(--primary)] text-white py-2 rounded-lg hover:bg-[var(--primary)]/90 transition-colors">
                    Apply Now
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div className="mb-16">
            <h2 className="text-3xl font-semibold mb-8 text-center text-[var(--foreground)]">
              Benefits & Perks
            </h2>
            <div className="card-premium p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-[var(--primary)] rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-[var(--foreground)]">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Culture */}
          <div className="mb-16">
            <h2 className="text-3xl font-semibold mb-8 text-center text-[var(--foreground)]">
              Our Culture
            </h2>
            <div className="card-premium p-8">
              <p className="text-[var(--muted-foreground)] leading-relaxed mb-6">
                At EVER GREEN Tech, we foster a culture of innovation, collaboration, and continuous learning. 
                We believe in empowering our team members to take ownership of their work and make meaningful 
                contributions to our mission of making premium electronics accessible to every Indian home.
              </p>
              <p className="text-[var(--muted-foreground)] leading-relaxed">
                Our office in Jaipur provides a modern, comfortable workspace where creativity flourishes. 
                We organize regular team-building activities, workshops, and social events to ensure our team 
                stays connected and motivated.
              </p>
            </div>
          </div>

          {/* Contact */}
          <div className="text-center">
            <div className="card-premium p-8">
              <h2 className="text-2xl font-semibold mb-4 text-[var(--foreground)]">
                Don't see a fit? We'd love to hear from you!
              </h2>
              <p className="text-[var(--muted-foreground)] mb-6">
                If you're passionate about what we do and believe you can contribute to our team, 
                send us your resume at careers@evergreen.tech
              </p>
              <div className="bg-[var(--secondary)] p-4 rounded-lg inline-block">
                <p className="text-[var(--foreground)] font-medium">Email:</p>
                <p className="text-[var(--primary)]">careers@evergreen.tech</p>
                <p className="text-[var(--foreground)] font-medium mt-3">Location:</p>
                <p className="text-[var(--primary)]">Jaipur, Rajasthan</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

import QuoteRotator from './QuoteRotator';
import NassauCarousel from './NassauCarousel';

export default function Home() {
  return (
    <div className="min-h-screen bg-light">
      {/* Header */}
      <header className="bg-navy text-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-serif text-white">
                Nassau County <span className="text-gold italic">Young Democrats</span>
              </h1>
              <p className="text-muted text-sm mt-1 uppercase tracking-wide">Organizing Young Progressives on Long Island</p>
            </div>
            <nav className="hidden md:flex gap-6">
              <a href="#news" className="text-white hover:text-gold transition-colors">Our Priorities</a>
              <a href="#events" className="text-white hover:text-gold transition-colors">Next Meeting</a>
              <a href="https://forms.gle/dXRQqGqBEz4PZEG49" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gold transition-colors">Get Involved</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue to-sky text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(59,130,246,0.18)_0%,transparent_70%)] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6">
              Organizing for Change<br />in Nassau County
            </h2>
            <QuoteRotator variant="hero" />
            <a 
              href="https://forms.gle/dXRQqGqBEz4PZEG49"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-gold text-navy font-bold rounded-lg hover:bg-yellow-400 transition-colors shadow-lg"
            >
              Join Us April 9th →
            </a>
          </div>
        </div>
      </section>

      {/* News Feed Section */}
      <section id="news" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif font-bold text-navy mb-4">What We're Fighting For</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Our movement is built on action. Here's where we're making a difference in Nassau County.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Priority 1 - Climate Action */}
          <article className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border-t-4 border-blue group hover:-translate-y-1">
            <div className="flex flex-col items-center mb-6">
              <div className="w-16 h-16 bg-blue/10 rounded-full flex items-center justify-center group-hover:bg-blue/20 transition-colors">
                <svg className="w-8 h-8 text-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-navy mt-4 text-center">
                Climate Action
              </h3>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed text-left">
              Protecting Long Island's coastlines and pushing for renewable energy initiatives across Nassau County.
            </p>
          </article>

          {/* Priority 2 - Voting Rights */}
          <article className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border-t-4 border-accent group hover:-translate-y-1">
            <div className="flex flex-col items-center mb-6">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-navy mt-4 text-center">
                Voting Rights
              </h3>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed text-left">
              Registering voters, fighting suppression, and ensuring every voice in Nassau County is heard.
            </p>
          </article>

          {/* Priority 3 - Immigration Reform */}
          <article className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border-t-4 border-purple group hover:-translate-y-1">
            <div className="flex flex-col items-center mb-6">
              <div className="w-16 h-16 bg-purple/10 rounded-full flex items-center justify-center group-hover:bg-purple/20 transition-colors">
                <svg className="w-8 h-8 text-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-navy mt-4 text-center">
                Immigration Reform
              </h3>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed text-left">
              Standing with immigrant families and fighting for comprehensive, humane immigration policy.
            </p>
          </article>

          {/* Priority 4 - Economic Justice */}
          <article className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border-t-4 border-green-600 group hover:-translate-y-1">
            <div className="flex flex-col items-center mb-6">
              <div className="w-16 h-16 bg-green-600/10 rounded-full flex items-center justify-center group-hover:bg-green-600/20 transition-colors">
                <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-navy mt-4 text-center">
                Economic Justice
              </h3>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed text-left">
              Advocating for fair wages, affordable housing, and economic opportunity for all Long Islanders.
            </p>
          </article>
        </div>
      </section>

      {/* Our Nassau County Photo Gallery */}
      <section className="bg-gradient-to-b from-white to-light py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-navy mb-4">Our Nassau County</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From historic landmarks to modern venues, Nassau County is our home—and we're fighting to make it better for everyone.
            </p>
          </div>

          <NassauCarousel />
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-navy mb-8">Next Meeting</h2>
          
          {/* Featured Event - April 9th Meeting */}
          <div className="bg-gradient-to-r from-blue to-sky rounded-2xl p-8 text-white mb-8 shadow-xl">
            <div className="flex flex-col md:flex-row gap-6 items-center">
              <div className="flex-shrink-0 w-24 h-24 bg-white/20 backdrop-blur-sm rounded-xl flex flex-col items-center justify-center border-2 border-white/30">
                <span className="text-4xl font-bold">9</span>
                <span className="text-sm uppercase tracking-wide">April</span>
              </div>
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-bold mb-2">Monthly General Meeting</h3>
                <p className="text-lg text-white/90 mb-1">6:30 PM • Nassau County Democratic Committee Office</p>
                <p className="text-white/75 text-sm mb-4">Join us to organize, connect, and plan our next actions.</p>
                <a 
                  href="https://forms.gle/dXRQqGqBEz4PZEG49"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-3 bg-white text-blue font-bold rounded-lg hover:bg-gold hover:text-navy transition-colors"
                >
                  RSVP Now →
                </a>
              </div>
            </div>
          </div>

          {/* Quote Section */}
          <QuoteRotator />
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-gradient-to-r from-navy to-blue text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold mb-4">Get Involved</h2>
          <p className="text-white/90 mb-8">Stay updated on meetings, actions, and ways to make a difference in Nassau County</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a 
              href="https://forms.gle/dXRQqGqBEz4PZEG49"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-gold text-navy font-bold rounded-lg hover:bg-yellow-400 transition-colors shadow-lg"
            >
              Join Our Next Meeting
            </a>
            <a 
              href="https://mailchi.mp/85b597e87fc3/join-the-nassau-county-young-democrats"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-lg hover:bg-white/20 transition-colors border border-white/20"
            >
              Become a Member
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-serif font-bold text-gold mb-4">Nassau County Young Democrats</h3>
              <p className="text-muted text-sm">Building progressive power on Long Island.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Take Action</h4>
              <ul className="space-y-2 text-sm text-muted">
                <li><a href="https://forms.gle/dXRQqGqBEz4PZEG49" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">RSVP for April 9th</a></li>
                <li><a href="https://mailchi.mp/85b597e87fc3/join-the-nassau-county-young-democrats" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">Become a Member</a></li>
                <li><a href="https://secure.actblue.com/donate/nassauyoungdems" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">Donate</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-sm text-muted">
                <li><a href="https://www.nassauyoungdems.com" target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">Website</a></li>
                <li><a href="mailto:info@nassauyoungdems.com" className="hover:text-gold transition-colors">Contact Us</a></li>
              </ul>
              <div className="mt-6">
                <h4 className="font-semibold mb-3 text-sm">Follow Us</h4>
                <div className="flex gap-3">
                  <a href="https://www.facebook.com/NassauCountyYoungDemocrats" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-gold hover:text-navy transition-all" aria-label="Facebook">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                  <a href="https://www.instagram.com/nassaucountyyoungdems/?hl=en" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-gold hover:text-navy transition-all" aria-label="Instagram">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                    </svg>
                  </a>
                  <a href="https://www.linkedin.com/groups/12509317/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-gold hover:text-navy transition-all" aria-label="LinkedIn">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-sm text-muted">
            <p>© 2026 Nassau County Young Democrats. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

import QuoteRotator from './QuoteRotator';

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
            <div className="w-16 h-16 bg-blue/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue/20 transition-colors">
              <svg className="w-8 h-8 text-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-navy mb-3">
              Climate Action
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Protecting Long Island's coastlines and pushing for renewable energy initiatives across Nassau County.
            </p>
          </article>

          {/* Priority 2 - Voting Rights */}
          <article className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border-t-4 border-accent group hover:-translate-y-1">
            <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-accent/20 transition-colors">
              <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-navy mb-3">
              Voting Rights
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Registering voters, fighting suppression, and ensuring every voice in Nassau County is heard.
            </p>
          </article>

          {/* Priority 3 - Immigration Reform */}
          <article className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border-t-4 border-purple group hover:-translate-y-1">
            <div className="w-16 h-16 bg-purple/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-purple/20 transition-colors">
              <svg className="w-8 h-8 text-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-navy mb-3">
              Immigration Reform
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Standing with immigrant families and fighting for comprehensive, humane immigration policy.
            </p>
          </article>

          {/* Priority 4 - Economic Justice */}
          <article className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border-t-4 border-green-600 group hover:-translate-y-1">
            <div className="w-16 h-16 bg-green-600/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-green-600/20 transition-colors">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-navy mb-3">
              Economic Justice
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Advocating for fair wages, affordable housing, and economic opportunity for all Long Islanders.
            </p>
          </article>
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

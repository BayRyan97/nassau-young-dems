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
              <p className="text-muted text-sm mt-1 uppercase tracking-wide">Local Political News & Events</p>
            </div>
            <nav className="hidden md:flex gap-6">
              <a href="#news" className="text-white hover:text-gold transition-colors">News</a>
              <a href="#events" className="text-white hover:text-gold transition-colors">Events</a>
              <a href="#about" className="text-white hover:text-gold transition-colors">About</a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue to-sky text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(59,130,246,0.18)_0%,transparent_70%)] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <span className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-semibold mb-4">
              Latest Updates
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
              Stay Informed on Nassau County Politics
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Breaking news, upcoming events, and community updates from your local Young Democrats
            </p>
          </div>
        </div>
      </section>

      {/* News Feed Section */}
      <section id="news" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-serif font-bold text-navy">Latest News</h2>
          <div className="flex gap-2">
            <button className="px-4 py-2 bg-blue text-white rounded-lg hover:bg-sky transition-colors">All</button>
            <button className="px-4 py-2 bg-white text-navy rounded-lg hover:bg-light transition-colors border border-navy/10">Local</button>
            <button className="px-4 py-2 bg-white text-navy rounded-lg hover:bg-light transition-colors border border-navy/10">State</button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Sample News Card 1 */}
          <article className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden group">
            <div className="h-48 bg-gradient-to-br from-blue to-sky"></div>
            <div className="p-6">
              <span className="text-xs text-blue font-semibold uppercase tracking-wide">Local News</span>
              <h3 className="text-xl font-bold text-navy mt-2 mb-3 group-hover:text-blue transition-colors">
                Community Organizing Event Draws Record Attendance
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Over 200 young democrats gathered at the Nassau County Civic Center to discuss upcoming initiatives...
              </p>
              <div className="flex justify-between items-center text-sm text-muted">
                <span>Mar 28, 2026</span>
                <a href="#" className="text-blue hover:text-sky font-medium">Read More →</a>
              </div>
            </div>
          </article>

          {/* Sample News Card 2 */}
          <article className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden group">
            <div className="h-48 bg-gradient-to-br from-accent to-red-400"></div>
            <div className="p-6">
              <span className="text-xs text-accent font-semibold uppercase tracking-wide">Election Updates</span>
              <h3 className="text-xl font-bold text-navy mt-2 mb-3 group-hover:text-blue transition-colors">
                Voter Registration Drive Reaches Milestone
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Our voter registration campaign successfully registered 500+ new voters across Nassau County...
              </p>
              <div className="flex justify-between items-center text-sm text-muted">
                <span>Mar 25, 2026</span>
                <a href="#" className="text-blue hover:text-sky font-medium">Read More →</a>
              </div>
            </div>
          </article>

          {/* Sample News Card 3 */}
          <article className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden group">
            <div className="h-48 bg-gradient-to-br from-green-600 to-green-400"></div>
            <div className="p-6">
              <span className="text-xs text-green-600 font-semibold uppercase tracking-wide">Policy</span>
              <h3 className="text-xl font-bold text-navy mt-2 mb-3 group-hover:text-blue transition-colors">
                New Climate Initiative Proposed for Nassau
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Local leaders unveil comprehensive plan to address climate change and promote sustainable development...
              </p>
              <div className="flex justify-between items-center text-sm text-muted">
                <span>Mar 22, 2026</span>
                <a href="#" className="text-blue hover:text-sky font-medium">Read More →</a>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Events Section */}
      <section id="events" className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-serif font-bold text-navy mb-8">Upcoming Events</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Sample Event 1 */}
            <div className="bg-light rounded-xl p-6 border-l-4 border-blue hover:shadow-lg transition-shadow">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-16 h-16 bg-blue text-white rounded-lg flex flex-col items-center justify-center">
                  <span className="text-2xl font-bold">15</span>
                  <span className="text-xs">APR</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-navy mb-1">Monthly Strategy Meeting</h3>
                  <p className="text-sm text-muted mb-2">7:00 PM - Nassau County Civic Center</p>
                  <p className="text-sm text-gray-600">Join us for our monthly planning session and community updates.</p>
                </div>
              </div>
            </div>

            {/* Sample Event 2 */}
            <div className="bg-light rounded-xl p-6 border-l-4 border-accent hover:shadow-lg transition-shadow">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-16 h-16 bg-accent text-white rounded-lg flex flex-col items-center justify-center">
                  <span className="text-2xl font-bold">22</span>
                  <span className="text-xs">APR</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-bold text-navy mb-1">Phone Banking Event</h3>
                  <p className="text-sm text-muted mb-2">6:00 PM - Virtual</p>
                  <p className="text-sm text-gray-600">Help us reach voters and share information about upcoming elections.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-gradient-to-r from-navy to-blue text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-serif font-bold mb-4">Stay in the Loop</h2>
          <p className="text-white/90 mb-8">Get the latest news and event updates delivered to your inbox</p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="flex-1 px-6 py-3 rounded-lg text-navy focus:outline-none focus:ring-2 focus:ring-gold"
            />
            <button 
              type="submit"
              className="px-8 py-3 bg-gold text-navy font-semibold rounded-lg hover:bg-yellow-400 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-serif font-bold text-gold mb-4">Nassau County Young Democrats</h3>
              <p className="text-muted text-sm">Empowering young voices in Nassau County politics.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-muted">
                <li><a href="#" className="hover:text-gold transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-gold transition-colors">Get Involved</a></li>
                <li><a href="#" className="hover:text-gold transition-colors">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-sm text-muted">
                <li><a href="#" className="hover:text-gold transition-colors">Twitter</a></li>
                <li><a href="#" className="hover:text-gold transition-colors">Instagram</a></li>
                <li><a href="#" className="hover:text-gold transition-colors">Facebook</a></li>
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

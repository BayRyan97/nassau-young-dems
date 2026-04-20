export default function ContactReps() {
  return (
    <section className="bg-gradient-to-br from-navy to-blue py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-serif font-bold text-white mb-6">
          Contact Your Representatives
        </h2>
        <p className="text-xl text-white/90 mb-8 leading-relaxed">
          Democracy works when we participate. Contact your local, state, and federal representatives 
          to let them know where you stand on the issues that matter most to Nassau County.
        </p>
        <p className="text-lg text-white/80 mb-10">
          Whether it's advocating for climate action, protecting voting rights, or addressing the affordability 
          crisis, your voice makes a difference. It only takes a few minutes to send a message that can 
          shape policy and hold our leaders accountable.
        </p>
        <a
          href="https://democracy.io/#/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-10 py-5 bg-gold text-navy font-bold text-lg rounded-lg hover:bg-yellow-400 transition-all shadow-xl hover:shadow-2xl hover:scale-105"
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" 
            />
          </svg>
          Contact Your Representatives
          <svg 
            className="w-5 h-5" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
            />
          </svg>
        </a>
        <p className="text-sm text-white/60 mt-6">
          Powered by Democracy.io — A free tool to contact Congress and your local representatives
        </p>
      </div>
    </section>
  );
}

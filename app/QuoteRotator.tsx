'use client';

import { useState, useEffect } from 'react';

const quotes = [
  {
    text: "Never doubt that a small group of thoughtful, committed citizens can change the world; indeed, it's the only thing that ever has.",
    author: "— Margaret Mead, anthropologist raised in NYC"
  },
  {
    text: "The future belongs to young people with an education and the imagination to create.",
    author: "— President Bill Clinton, Long Island native"
  },
  {
    text: "Change will not come if we wait for some other person or some other time. We are the ones we've been waiting for.",
    author: "— President Barack Obama"
  },
  {
    text: "Democracy is not a state. It is an act.",
    author: "— Rep. John Lewis"
  },
  {
    text: "The power of the people is stronger than the people in power.",
    author: "— Wael Ghonim"
  }
];

export default function QuoteRotator() {
  const [currentQuote, setCurrentQuote] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentQuote((prev) => (prev + 1) % quotes.length);
        setFade(true);
      }, 500);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-light rounded-xl p-8 border-l-4 border-gold">
      <p 
        className={`text-xl md:text-2xl text-navy italic mb-4 transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'}`}
      >
        "{quotes[currentQuote].text}"
      </p>
      <p 
        className={`text-sm text-muted transition-opacity duration-500 ${fade ? 'opacity-100' : 'opacity-0'}`}
      >
        {quotes[currentQuote].author}
      </p>
    </div>
  );
}

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
    text: "We convince by our presence.",
    author: "— Walt Whitman, Long Island poet"
  },
  {
    text: "If I am to speak for ten minutes, I need a week for preparation; if fifteen minutes, three days; if half an hour, two days; if an hour, I am ready now.",
    author: "— President Theodore Roosevelt, Oyster Bay, Long Island"
  },
  {
    text: "If they don't give you a seat at the table, bring a folding chair.",
    author: "— Shirley Chisholm, Brooklyn congresswoman"
  },
  {
    text: "Fight for the things that you care about, but do it in a way that will lead others to join you.",
    author: "— Justice Ruth Bader Ginsburg, Brooklyn native"
  },
  {
    text: "The future belongs to those who believe in the beauty of their dreams.",
    author: "— Eleanor Roosevelt, NYC"
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
    text: "You may not always have a comfortable life and you will not always be able to solve all of the world's problems at once but don't ever underestimate the importance you can have.",
    author: "— Marian Wright Edelman, civil rights activist"
  },
  {
    text: "Hope will never be silent.",
    author: "— Harvey Milk"
  },
  {
    text: "The arc of the moral universe is long, but it bends toward justice.",
    author: "— Dr. Martin Luther King Jr."
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

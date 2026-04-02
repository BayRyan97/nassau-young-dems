'use client';

import { useState, useEffect, useCallback } from 'react';

const quotes = [
  {
    text: "Never doubt that a small group of thoughtful, committed citizens can change the world; indeed, it's the only thing that ever has.",
    author: "— Margaret Mead, anthropologist raised in NYC"
  },
  {
    text: "We convince by our presence.",
    author: "— Walt Whitman, Long Island poet"
  },
  {
    text: "In any moment of decision, the best thing you can do is the right thing, the next best thing is the wrong thing, and the worst thing you can do is nothing.",
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

interface QuoteRotatorProps {
  variant?: 'hero' | 'default';
  showIndicators?: boolean;
}

export default function QuoteRotator({ variant = 'default', showIndicators = true }: QuoteRotatorProps) {
  const [currentQuote, setCurrentQuote] = useState(0);
  const [fade, setFade] = useState(true);

  const changeQuote = useCallback((newIndex: number) => {
    setFade(false);
    setTimeout(() => {
      setCurrentQuote(newIndex);
      setFade(true);
    }, 300);
  }, []);

  const nextQuote = useCallback(() => {
    changeQuote((currentQuote + 1) % quotes.length);
  }, [currentQuote, changeQuote]);

  const prevQuote = useCallback(() => {
    changeQuote((currentQuote - 1 + quotes.length) % quotes.length);
  }, [currentQuote, changeQuote]);

  useEffect(() => {
    const interval = setInterval(() => {
      nextQuote();
    }, 5000);

    return () => clearInterval(interval);
  }, [nextQuote]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prevQuote();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        nextQuote();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextQuote, prevQuote]);

  if (variant === 'hero') {
    return (
      <div className="text-center relative">
        <div className="min-h-[180px] flex flex-col justify-center">
          <p className={`text-2xl text-white/90 max-w-3xl mx-auto mb-8 italic transition-opacity duration-300 ${fade ? 'opacity-100' : 'opacity-0'}`}>
            "{quotes[currentQuote].text}"
          </p>
          <p className={`text-sm text-white/75 mb-8 transition-opacity duration-300 ${fade ? 'opacity-100' : 'opacity-0'}`}>
            {quotes[currentQuote].author}
          </p>
        </div>
        {showIndicators && (
          <div className="flex gap-1.5 justify-center mb-6">
            {quotes.map((_, index) => (
              <button
                key={index}
                onClick={() => changeQuote(index)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentQuote ? 'bg-gold w-6' : 'bg-white/30 w-2 hover:bg-white/50'
                }`}
                aria-label={`Go to quote ${index + 1}`}
              />
            ))}
          </div>
        )}
        <p className="text-xs text-white/50 mb-4">Use ← → arrow keys to navigate</p>
      </div>
    );
  }

  return (
    <div className="bg-light rounded-xl p-8 border-l-4 border-gold relative min-h-[220px]">
      {showIndicators && (
        <div className="absolute top-4 right-4 flex gap-1">
          {quotes.map((_, index) => (
            <button
              key={index}
              onClick={() => changeQuote(index)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index === currentQuote ? 'bg-gold w-4' : 'bg-muted/30 w-1.5 hover:bg-muted/50'
              }`}
              aria-label={`Go to quote ${index + 1}`}
            />
          ))}
        </div>
      )}
      <div className="flex flex-col justify-center min-h-[160px]">
        <p 
          className={`text-xl md:text-2xl text-navy italic mb-4 transition-opacity duration-300 ${fade ? 'opacity-100' : 'opacity-0'}`}
        >
          "{quotes[currentQuote].text}"
        </p>
        <p 
          className={`text-sm text-muted transition-opacity duration-300 ${fade ? 'opacity-100' : 'opacity-0'}`}
        >
          {quotes[currentQuote].author}
        </p>
      </div>
      <p className="text-xs text-muted/60 mt-4 text-center">Use ← → arrow keys to navigate</p>
    </div>
  );
}

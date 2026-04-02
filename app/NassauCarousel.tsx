'use client';

import { useState, useEffect, useCallback } from 'react';

const photos = [
  {
    src: '/nassau-photos/Bethpage_Golf_Course.jpg',
    title: 'Bethpage State Park',
    description: 'Home to the world-famous Bethpage Black Course, this public golf facility has hosted multiple U.S. Open Championships. It represents Nassau County\'s commitment to accessible recreation and world-class public amenities for all residents.'
  },
  {
    src: '/nassau-photos/Belmont_Park_td_(2021-12-19)_017_-_UBS_Arena.jpg',
    title: 'UBS Arena at Belmont Park',
    description: 'Nassau County\'s newest entertainment destination, home to the New York Islanders. This state-of-the-art arena symbolizes our region\'s economic growth and modern infrastructure, creating jobs and bringing world-class entertainment to Long Island.'
  },
  {
    src: '/nassau-photos/Hempstead,_Manhasset,_and_Little_Neck_bays.jpg',
    title: 'Our Waterfront Communities',
    description: 'The stunning bays of Hempstead, Manhasset, and Little Neck are the heart of Nassau County\'s coastal beauty. Protecting these waters from climate change and pollution is critical to preserving our quality of life and marine ecosystems.'
  },
  {
    src: '/nassau-photos/Mineola_LIRR_station_at_sunset.jpg',
    title: 'Mineola LIRR Station',
    description: 'A vital transit hub connecting Nassau County residents to jobs, education, and opportunities across the region. Improving and expanding public transportation is essential for environmental sustainability and economic mobility.'
  },
  {
    src: '/nassau-photos/Nassau_Coliseum_2021.jpg',
    title: 'Nassau Veterans Memorial Coliseum',
    description: 'An iconic venue that has hosted legendary concerts, sports events, and community gatherings since 1972. The Coliseum represents our proud history and continues to serve as a landmark for entertainment and civic pride.'
  },
  {
    src: '/nassau-photos/TR_Exec_&_Leg_Bldg_1550_Franklin_Av_straight_hen.jpg',
    title: 'Theodore Roosevelt Executive Building',
    description: 'The seat of Nassau County government in Mineola, where crucial decisions about our community\'s future are made every day. Named after President Theodore Roosevelt, a native of Oyster Bay, this building reminds us of our progressive roots.'
  },
  {
    src: '/nassau-photos/Int495eRoad-Exit41S-NY106sNY107s_(31061511095).jpg',
    title: 'Our Infrastructure Network',
    description: 'The Long Island Expressway and local highways keep Nassau County connected. Investing in infrastructure maintenance, public transit alternatives, and sustainable transportation is essential for our county\'s economic vitality and environmental future.'
  }
];

export default function NassauCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  const goToNext = useCallback(() => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % photos.length);
      setFade(true);
    }, 300);
  }, []);

  const goToPrev = useCallback(() => {
    setFade(false);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length);
      setFade(true);
    }, 300);
  }, []);

  useEffect(() => {
    const interval = setInterval(goToNext, 6000);
    return () => clearInterval(interval);
  }, [goToNext]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        goToPrev();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        goToNext();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToNext, goToPrev]);

  const currentPhoto = photos[currentIndex];

  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        {/* Image Side */}
        <div className="relative">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={currentPhoto.src}
              alt={currentPhoto.title}
              className={`w-full h-full object-cover transition-opacity duration-300 ${fade ? 'opacity-100' : 'opacity-0'}`}
            />
            {/* Navigation Arrows */}
            <button
              onClick={goToPrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110"
              aria-label="Previous photo"
            >
              <svg className="w-6 h-6 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all hover:scale-110"
              aria-label="Next photo"
            >
              <svg className="w-6 h-6 text-navy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          
          {/* Indicators */}
          <div className="flex gap-2 justify-center mt-6">
            {photos.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setFade(false);
                  setTimeout(() => {
                    setCurrentIndex(index);
                    setFade(true);
                  }, 300);
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-blue w-8' : 'bg-gray-300 w-2 hover:bg-gray-400'
                }`}
                aria-label={`Go to photo ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Text Side */}
        <div className={`space-y-6 transition-opacity duration-300 ${fade ? 'opacity-100' : 'opacity-0'}`}>
          <div>
            <div className="inline-block px-4 py-1 bg-blue/10 rounded-full mb-4">
              <span className="text-blue text-sm font-semibold">
                {currentIndex + 1} of {photos.length}
              </span>
            </div>
            <h3 className="text-3xl font-serif font-bold text-navy mb-4">
              {currentPhoto.title}
            </h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              {currentPhoto.description}
            </p>
          </div>
          
          <div className="pt-4 border-t border-gray-200">
            <p className="text-sm text-gray-500 flex items-center gap-2">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Use ← → arrow keys to navigate
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

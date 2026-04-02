'use client';

import { useState, useEffect, useCallback } from 'react';

const photos = [
  {
    src: '/nassau-photos/Bethpage_Golf_Course.jpg',
    title: 'Bethpage State Park',
    description: 'Home to the world-famous Bethpage Black Course, this public golf facility has hosted multiple U.S. Open Championships. <strong>It represents Nassau County\'s commitment to accessible recreation and world-class public amenities for all residents.</strong>'
  },
  {
    src: '/nassau-photos/jones-beach.jpg.webp',
    title: 'Jones Beach State Park',
    description: 'One of America\'s most beloved beaches, Jones Beach welcomes millions of visitors each year. <strong>Protecting our coastline from rising sea levels and ensuring public beach access for all families is a cornerstone of environmental justice and quality of life on Long Island.</strong>'
  },
  {
    src: '/nassau-photos/TheBoardwalk-Beach.jpg',
    title: 'Long Beach Boardwalk',
    description: 'The iconic Long Beach boardwalk is a vibrant hub for recreation, small businesses, and community life. <strong>After Superstorm Sandy, its rebuild demonstrated our resilience and commitment to coastal communities facing climate change.</strong>'
  },
  {
    src: '/nassau-photos/Eisenhower_Park.jpg',
    title: 'Eisenhower Park',
    description: 'Nassau County\'s largest public park, offering 930 acres of green space, sports facilities, and gathering places. <strong>Public parks like Eisenhower are essential for community health, environmental sustainability, and accessible recreation for all residents regardless of income.</strong>'
  },
  {
    src: '/nassau-photos/J.20Stephen20Conn_flickr_Sagamore20Hill.jpg.avif',
    title: 'Sagamore Hill',
    description: 'Theodore Roosevelt\'s beloved home in Oyster Bay, where the 26th President championed progressive causes and environmental conservation. <strong>TR\'s legacy of trust-busting, workers\' rights, and protecting natural resources continues to inspire our movement today.</strong>'
  },
  {
    src: '/nassau-photos/Planting_Fields.jpg',
    title: 'Planting Fields Arboretum',
    description: 'This stunning 409-acre Gold Coast estate turned public garden showcases Nassau County\'s natural beauty and commitment to environmental education. <strong>Preserving green spaces and making them accessible to all is vital for both ecological health and community wellbeing.</strong>'
  },
  {
    src: '/nassau-photos/Belmont_Park_td_(2021-12-19)_017_-_UBS_Arena.jpg',
    title: 'UBS Arena at Belmont Park',
    description: 'Nassau County\'s newest entertainment destination, home to the New York Islanders. <strong>This state-of-the-art arena symbolizes our region\'s economic growth and modern infrastructure, creating jobs and bringing world-class entertainment to Long Island.</strong>'
  },
  {
    src: '/nassau-photos/Hempstead,_Manhasset,_and_Little_Neck_bays.jpg',
    title: 'Our Waterfront Communities',
    description: 'The stunning bays of Hempstead, Manhasset, and Little Neck are the heart of Nassau County\'s coastal beauty. <strong>Protecting these waters from climate change and pollution is critical to preserving our quality of life and marine ecosystems.</strong>'
  },
  {
    src: '/nassau-photos/Mineola_LIRR_station_at_sunset.jpg',
    title: 'Mineola LIRR Station',
    description: 'A vital transit hub connecting Nassau County residents to jobs, education, and opportunities across the region. <strong>Improving and expanding public transportation is essential for environmental sustainability and economic mobility.</strong>'
  },
  {
    src: '/nassau-photos/Nassau_Coliseum_2021.jpg',
    title: 'Nassau Veterans Memorial Coliseum',
    description: 'An iconic venue that has hosted legendary concerts, sports events, and community gatherings since 1972. <strong>The Coliseum represents our proud history and continues to serve as a landmark for entertainment and civic pride.</strong>'
  },
  {
    src: '/nassau-photos/TR_Exec_&_Leg_Bldg_1550_Franklin_Av_straight_hen.jpg',
    title: 'Theodore Roosevelt Executive Building',
    description: 'The seat of Nassau County government in Mineola, where crucial decisions about our community\'s future are made every day. <strong>Named after President Theodore Roosevelt, a native of Oyster Bay, this building reminds us of our progressive roots.</strong>'
  },
  {
    src: '/nassau-photos/Int495eRoad-Exit41S-NY106sNY107s_(31061511095).jpg',
    title: 'Our Infrastructure Network',
    description: 'The Long Island Expressway and local highways keep Nassau County connected. <strong>Investing in infrastructure maintenance, public transit alternatives, and sustainable transportation is essential for our county\'s economic vitality and environmental future.</strong>'
  }
];

export default function NassauCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [resetTimer, setResetTimer] = useState(0);

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
    setResetTimer(prev => prev + 1); // Reset the timer
  }, []);

  const goToNextManual = useCallback(() => {
    goToNext();
    setResetTimer(prev => prev + 1); // Reset the timer
  }, [goToNext]);

  useEffect(() => {
    const interval = setInterval(goToNext, 12000);
    return () => clearInterval(interval);
  }, [goToNext, resetTimer]); // Depend on resetTimer to restart the interval

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault();
        goToPrev();
      } else if (e.key === 'ArrowRight') {
        e.preventDefault();
        goToNextManual();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToNext, goToPrev, goToNextManual]);

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
              onClick={goToNextManual}
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
                  setResetTimer(prev => prev + 1); // Reset the timer
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
            <p className="text-gray-700 text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: currentPhoto.description }} />
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

'use client';

import { useState, useEffect, useCallback } from 'react';

interface CalendarEvent {
  id: number;
  title: string;
  date: Date;
  time: string;
  rsvpLink?: string;
}

const events: CalendarEvent[] = [
  {
    id: 1,
    title: 'Monthly General Meeting',
    date: new Date(2026, 3, 9), // April 9, 2026 (month is 0-indexed)
    time: '6:30 PM',
    rsvpLink: 'https://forms.gle/dXRQqGqBEz4PZEG49'
  }
];

export default function EventsCalendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(null);
  const [showModal, setShowModal] = useState(false);

  // Get first day of month (0 = Sunday, 6 = Saturday)
  const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();
  
  // Get number of days in current month
  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
  
  // Get today's date for highlighting
  const today = new Date();
  const isToday = (day: number) => {
    return day === today.getDate() && 
           currentDate.getMonth() === today.getMonth() && 
           currentDate.getFullYear() === today.getFullYear();
  };

  // Get events for a specific day
  const getEventsForDay = (day: number) => {
    return events.filter(event => 
      event.date.getDate() === day &&
      event.date.getMonth() === currentDate.getMonth() &&
      event.date.getFullYear() === currentDate.getFullYear()
    );
  };

  // Navigate to previous month
  const goToPrevMonth = useCallback(() => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  }, [currentDate]);

  // Navigate to next month
  const goToNextMonth = useCallback(() => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  }, [currentDate]);

  // Handle event click
  const handleEventClick = (event: CalendarEvent) => {
    setSelectedEvent(event);
    setShowModal(true);
  };

  // Close modal
  const closeModal = () => {
    setShowModal(false);
    setSelectedEvent(null);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') {
        goToPrevMonth();
      } else if (e.key === 'ArrowRight') {
        goToNextMonth();
      } else if (e.key === 'Escape' && showModal) {
        closeModal();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToPrevMonth, goToNextMonth, showModal]);

  // Generate calendar days array
  const calendarDays = [];
  
  // Add empty cells for days before the first day of month
  for (let i = 0; i < firstDayOfMonth; i++) {
    calendarDays.push(null);
  }
  
  // Add actual days of the month
  for (let day = 1; day <= daysInMonth; day++) {
    calendarDays.push(day);
  }

  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 
                      'July', 'August', 'September', 'October', 'November', 'December'];
  
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <div className="max-w-3xl mx-auto">
      {/* Calendar Header */}
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={goToPrevMonth}
          className="p-1.5 rounded-lg hover:bg-navy/10 dark:hover:bg-white/10 transition-colors group"
          aria-label="Previous month"
        >
          <svg className="w-5 h-5 text-navy dark:text-white group-hover:text-blue transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <h3 className="text-xl md:text-2xl font-serif font-bold text-navy dark:text-white">
          {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
        </h3>
        
        <button
          onClick={goToNextMonth}
          className="p-1.5 rounded-lg hover:bg-navy/10 dark:hover:bg-white/10 transition-colors group"
          aria-label="Next month"
        >
          <svg className="w-5 h-5 text-navy dark:text-white group-hover:text-blue transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Day Names Header */}
      <div className="grid grid-cols-7 gap-0.5 md:gap-1 mb-1">
        {dayNames.map(day => (
          <div key={day} className="text-center text-xs font-bold text-navy/70 dark:text-white/70 py-1">
            {day}
          </div>
        ))}
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-0.5 md:gap-1">
        {calendarDays.map((day, index) => {
          const dayEvents = day ? getEventsForDay(day) : [];
          const hasEvents = dayEvents.length > 0;
          
          return (
            <div
              key={index}
              className={`
                aspect-square border rounded p-1 relative
                ${day ? 'bg-white dark:bg-gray-800 hover:bg-blue/5 dark:hover:bg-blue/10 transition-colors border-gray-200 dark:border-gray-700' : 'bg-gray-50 dark:bg-gray-900/50 border-gray-100 dark:border-gray-800'}
                ${isToday(day || 0) ? 'ring-1 ring-blue dark:ring-sky' : ''}
                ${hasEvents ? 'cursor-pointer' : ''}
              `}
              onClick={() => {
                if (hasEvents && dayEvents[0]) {
                  handleEventClick(dayEvents[0]);
                }
              }}
            >
              {day && (
                <>
                  <div className={`
                    text-xs md:text-sm font-semibold
                    ${isToday(day) ? 'text-blue dark:text-sky' : 'text-navy dark:text-white'}
                  `}>
                    {day}
                  </div>
                  
                  {/* Event Indicators */}
                  {hasEvents && (
                    <div className="mt-0.5 flex flex-col gap-0.5">
                      {dayEvents.map((event, idx) => (
                        <div
                          key={event.id}
                          className="text-[8px] md:text-xs bg-accent text-white rounded px-1 py-0.5 truncate font-semibold"
                          title={event.title}
                        >
                          {event.title}
                        </div>
                      ))}
                    </div>
                  )}
                </>
              )}
            </div>
          );
        })}
      </div>

      {/* Event Details Modal */}
      {showModal && selectedEvent && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <div 
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl max-w-md w-full p-6 relative animate-fade-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-gray-400 hover:text-navy dark:hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Event Details */}
            <div className="mb-4">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-14 h-14 bg-gradient-to-br from-blue to-sky rounded-xl flex flex-col items-center justify-center text-white shadow-lg">
                  <span className="text-xl font-bold">{selectedEvent.date.getDate()}</span>
                  <span className="text-[10px] uppercase">
                    {monthNames[selectedEvent.date.getMonth()].slice(0, 3)}
                  </span>
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-navy dark:text-white">
                    {selectedEvent.title}
                  </h3>
                </div>
              </div>

              <div className="space-y-2 text-gray-600 dark:text-gray-400">
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-blue dark:text-sky" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="font-semibold text-sm">{selectedEvent.time}</span>
                </div>
                
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-blue dark:text-sky" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="text-sm">
                    {monthNames[selectedEvent.date.getMonth()]} {selectedEvent.date.getDate()}, {selectedEvent.date.getFullYear()}
                  </span>
                </div>
              </div>
            </div>

            {/* RSVP Button */}
            {selectedEvent.rsvpLink && (
              <a
                href={selectedEvent.rsvpLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center px-5 py-2.5 bg-gradient-to-r from-blue to-sky text-white font-bold rounded-lg hover:from-navy hover:to-blue transition-all shadow-lg text-sm"
              >
                RSVP Now →
              </a>
            )}
          </div>
        </div>
      )}

      {/* Keyboard navigation hint */}
      <p className="text-center text-xs text-gray-500 dark:text-gray-400 mt-3">
        Use arrow keys to navigate months • Click events for details
      </p>
    </div>
  );
}

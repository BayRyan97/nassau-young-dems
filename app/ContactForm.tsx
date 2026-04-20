'use client';

import { useState, FormEvent } from 'react';

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch('https://formspree.io/f/maqaboar', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        setSubmitStatus('success');
        form.reset();
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="bg-white py-16 border-t-4 border-gold">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-serif font-bold text-navy mb-4">
            Get Involved
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            Join our movement to build progressive power in Nassau County. Fill out the form below and we'll keep you updated on meetings, events, and ways to make a difference.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-light rounded-xl p-8 shadow-lg">
          {/* Two-column layout on desktop */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            {/* First Name */}
            <div>
              <label htmlFor="firstName" className="block text-sm font-semibold text-navy mb-2">
                First Name <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue focus:ring-2 focus:ring-blue/20 outline-none transition-all"
                placeholder="Your first name"
              />
            </div>

            {/* Last Name */}
            <div>
              <label htmlFor="lastName" className="block text-sm font-semibold text-navy mb-2">
                Last Name <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue focus:ring-2 focus:ring-blue/20 outline-none transition-all"
                placeholder="Your last name"
              />
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-navy mb-2">
                Email <span className="text-red-600">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue focus:ring-2 focus:ring-blue/20 outline-none transition-all"
                placeholder="your.email@example.com"
              />
            </div>

            {/* Zip Code */}
            <div>
              <label htmlFor="zipCode" className="block text-sm font-semibold text-navy mb-2">
                Zip Code <span className="text-red-600">*</span>
              </label>
              <input
                type="text"
                id="zipCode"
                name="zipCode"
                required
                pattern="[0-9]{5}"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue focus:ring-2 focus:ring-blue/20 outline-none transition-all"
                placeholder="11530"
                maxLength={5}
              />
            </div>

            {/* Phone Number (Optional) */}
            <div>
              <label htmlFor="phone" className="block text-sm font-semibold text-navy mb-2">
                Phone Number <span className="text-gray-500 text-xs">(optional)</span>
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue focus:ring-2 focus:ring-blue/20 outline-none transition-all"
                placeholder="(555) 123-4567"
              />
            </div>

            {/* How did you hear about us? */}
            <div>
              <label htmlFor="referralSource" className="block text-sm font-semibold text-navy mb-2">
                How did you hear about us? <span className="text-gray-500 text-xs">(optional)</span>
              </label>
              <select
                id="referralSource"
                name="referralSource"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue focus:ring-2 focus:ring-blue/20 outline-none transition-all bg-white"
              >
                <option value="">Select one...</option>
                <option value="social-media">Social Media</option>
                <option value="friend">Friend or Family</option>
                <option value="event">Event</option>
                <option value="website">Website</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          {/* Interests (checkboxes) */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-navy mb-3">
              I'm interested in: <span className="text-gray-500 text-xs">(optional, select all that apply)</span>
            </label>
            <div className="grid sm:grid-cols-2 gap-3">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  name="interests"
                  value="volunteering"
                  className="w-4 h-4 text-blue border-gray-300 rounded focus:ring-blue"
                />
                <span className="text-gray-700">Volunteering</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  name="interests"
                  value="attending-events"
                  className="w-4 h-4 text-blue border-gray-300 rounded focus:ring-blue"
                />
                <span className="text-gray-700">Attending Events</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  name="interests"
                  value="running-for-office"
                  className="w-4 h-4 text-blue border-gray-300 rounded focus:ring-blue"
                />
                <span className="text-gray-700">Running for Office</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  name="interests"
                  value="learning-more"
                  className="w-4 h-4 text-blue border-gray-300 rounded focus:ring-blue"
                />
                <span className="text-gray-700">Learning More</span>
              </label>
            </div>
          </div>

          {/* Message (Optional) */}
          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-semibold text-navy mb-2">
              Message <span className="text-gray-500 text-xs">(optional)</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue focus:ring-2 focus:ring-blue/20 outline-none transition-all resize-none"
              placeholder="Tell us more about yourself or ask us a question..."
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-10 py-4 bg-gold text-navy font-bold text-lg rounded-lg hover:bg-yellow-400 transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Submitting...' : 'Join Our Movement'}
            </button>
          </div>

          {/* Status Messages */}
          {submitStatus === 'success' && (
            <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-lg text-center">
              <p className="text-green-800 font-semibold">✓ Thank you for joining us! We'll be in touch soon.</p>
            </div>
          )}
          {submitStatus === 'error' && (
            <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-lg text-center">
              <p className="text-red-800 font-semibold">× Something went wrong. Please try again or email us directly at info@nassauyoungdems.com</p>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}

'use client';

import { useState, useEffect } from 'react';

interface Testimonial {
  auteur: string;
  texte: string;
}

interface TestimonialsSliderProps {
  testimonials: Testimonial[];
}

export default function TestimonialsSlider({ testimonials }: TestimonialsSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((current) => (current + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [testimonials.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-8">
        <div className="relative min-h-[300px]">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`transition-all duration-700 absolute w-full ${
                index === currentIndex ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'
              }`}
            >
              <div className="bg-white rounded-2xl p-12 shadow-lg">
                <svg className="text-red-500 w-12 h-12 mb-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"/>
                </svg>
                <p className="text-2xl font-bodoni mb-8 leading-relaxed text-gray-800">
                  {testimonial.texte}
                </p>
                <p className="text-lg font-medium text-red-500">{testimonial.auteur}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center space-x-3 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-red-500 w-8' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
} 
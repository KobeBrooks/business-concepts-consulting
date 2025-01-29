'use client'

import { useState } from 'react';
import GlassCard from './GlassCard';

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const testimonials = [
    {
      text: "BCC Accounting has transformed how we manage our finances. Their expertise is unmatched.",
      author: "John Smith",
      company: "Tech Solutions Inc."
    },
    {
      text: "Professional, thorough, and always available when we need them.",
      author: "Sarah Johnson",
      company: "Retail Partners LLC"
    },
  ];

  return (
    <div className="py-12">
      <GlassCard className="max-w-3xl mx-auto">
        <div className="text-center">
          <p className="text-lg mb-4">{testimonials[currentIndex].text}</p>
          <p className="font-bold">{testimonials[currentIndex].author}</p>
          <p className="text-sm">{testimonials[currentIndex].company}</p>
        </div>
        <div className="flex justify-center mt-6 gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? 'bg-primary-blue' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </GlassCard>
    </div>
  );
} 
'use client'

import { useState, useEffect } from 'react';
import GlassCard from './GlassCard';
import { motion, AnimatePresence } from 'framer-motion';

export default function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);
  
  const testimonials = [
    {
      text: "Chris and Audrey are the best. I own my own business and they have been doing my personal and business taxes for years. I have recommended several clients and friends to them. They are so trustworthy. Chris really takes the time to explain everything.",
      author: "Caroline Steinitz",
      rating: 5,
      date: "8 months ago"
    },
    {
      text: "Absolutely the best in the business! Simply stated - their customer service is outstanding, extremely efficient, and timely. Chris provides ongoing guidance and he is committed to educating me on the entire process.",
      author: "Nicki Baghaloo",
      rating: 5,
      date: "9 months ago"
    },
    {
      text: "We have worked with Business Concepts Consulting to complete our taxes for several years now. They are so knowledgeable and will take the time to walk you through and explain every detail. Your taxes don't have to be a mystery anymore.",
      author: "Katherine & Nathaniel Tillman",
      rating: 5,
      date: "8 months ago"
    },
    {
      text: "For many years, Chris has handled my family's taxes, consistently demonstrating professionalism in both educating us and providing excellent service.",
      author: "Nabraska Wiggan",
      rating: 5,
      date: "3 months ago"
    },
    {
      text: "Excellent and Professional Service with a knack for education as it relates to the importance of your taxes. This has been my tax provider for over 20 years and I recommend everyone I know. I could not ask for a more caring company.",
      author: "Karen Fraser",
      rating: 5,
      date: "10 months ago"
    },
    {
      text: "Mr. Earle was very professional and extremely knowledgeable, yet humble. He made me feel very comfortable in asking any question that came to mind in-regard to my situation. I was also educated about my 1099, W2 etc going forward.",
      author: "Karen Rapley",
      rating: 5,
      date: "8 months ago"
    },
    {
      text: "Chris is the best accountant that we have ever had. I love the fact that we can make an appointment and go over to his office and have our taxes done in a couple of hours. He files it with the IRS that night and we are done.",
      author: "Betty Bazzell",
      rating: 5,
      date: "10 months ago"
    },
    {
      text: "Very professional. Fast Customer Service. They've been doing my taxes since I can even remember. I'll never do my taxes anywhere else. Some of the friendliest people I have ever met, you won't regret it!",
      author: "Mikala McMichael",
      rating: 5,
      date: "11 months ago"
    },
    {
      text: "I've been using Business Concepts for years! Chris and Jem always display professionalism and integrity. Any issues or questions I have they resolve efficiently and do not hesitate to clarify any concerns I have.",
      author: "Brianna McMichael",
      rating: 5,
      date: "11 months ago"
    },
    {
      text: "Business Concepts Consulting has been preparing my tax returns since 2015, always delivering a professional, courteous, and accurate service. They always go above and beyond to explain the process and provide professional advice.",
      author: "Cecilia Dixon",
      rating: 5,
      date: "2 years ago"
    },
    {
      text: "Chris is by far one of the most competent CPAs that I have met. He takes his time with you to help you understand the intricacies of tax law while doing his best to get you back everything that you deserve.",
      author: "Roberto Johnson",
      rating: 5,
      date: "2 years ago"
    },
    {
      text: "I have used Chris and Audrey for years. I have also referred them several times. Every referral has thanked me so much. They have always supported me for any changes as I have moved from a business account to standard tax returns.",
      author: "Sandy Sirokman",
      rating: 5,
      date: "2 years ago"
    }
  ];

  useEffect(() => {
    if (!autoPlay) return;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [autoPlay, testimonials.length]);

  const StarRating = ({ rating }) => (
    <div className="flex gap-1 justify-center mb-4">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );

  return (
    <div className="py-12 relative">
      <GlassCard className="max-w-3xl mx-auto p-8 relative overflow-hidden group">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="text-center"
          >
            <StarRating rating={testimonials[currentIndex].rating} />
            <p className="text-lg mb-6 text-secondary-gray/90 leading-relaxed">
              "{testimonials[currentIndex].text}"
            </p>
            <p className="font-bold text-secondary-gray mb-2">
              {testimonials[currentIndex].author}
            </p>
            <p className="text-sm text-secondary-gray/70">
              {testimonials[currentIndex].date}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <div className="absolute left-4 right-4 top-1/2 -translate-y-1/2 flex justify-between opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            onClick={() => {
              setAutoPlay(false);
              setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
            }}
            className="p-2 rounded-full bg-glass-bg/30 hover:bg-glass-bg/50 backdrop-blur-sm transition-all"
          >
            <svg className="w-6 h-6 text-secondary-gray" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={() => {
              setAutoPlay(false);
              setCurrentIndex((prev) => (prev + 1) % testimonials.length);
            }}
            className="p-2 rounded-full bg-glass-bg/30 hover:bg-glass-bg/50 backdrop-blur-sm transition-all"
          >
            <svg className="w-6 h-6 text-secondary-gray" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Dots Navigation */}
        <div className="flex justify-center mt-6 gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setAutoPlay(false);
                setCurrentIndex(index);
              }}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-accent-teal w-6' 
                  : 'bg-secondary-gray/30 hover:bg-secondary-gray/50'
              }`}
            />
          ))}
        </div>
      </GlassCard>
    </div>
  );
} 
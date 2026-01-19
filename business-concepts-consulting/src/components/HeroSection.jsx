'use client'

import { motion, AnimatePresence } from 'framer-motion';
import GlassCard from './GlassCard';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import FloatingEmojis from './FloatingEmojis';
import { getImagePath } from '@/utils/imagePath';
import { useState, useEffect, useMemo } from 'react';

export default function HeroSection() {
  const router = useRouter();
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = useMemo(() => [
    {
      image: '/theEarles.png',
      alt: 'Chris & Audrey Earle',
      title: 'Chris & Audrey Earle',
      subtitle: 'Founders & Principal Consultants',
      showNameplate: true
    },
    {
      image: '/business-concepts-consulting-plaque.png',
      alt: 'Best Business of 2025 Award',
      title: 'Best Business of 2025',
      subtitle: 'Award Winner',
      showNameplate: false
    }
  ], []);

  // Auto-rotate carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const handleScroll = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  const handleLearnMore = () => {
    router.push('/services');
  };

  const handleGetStarted = () => {
    router.push('/contact');
  };

  return (
    <div className="relative min-h-[90vh] flex flex-col justify-between overflow-hidden pt-32 md:pt-24">
      {/* Animated Background Gradients */}
      <div className="absolute inset-0 z-0">
        <FloatingEmojis />
        
        <div className="absolute top-0 -left-[10%] w-[500px] h-[500px] rounded-full bg-gradient-to-r from-blue-500/30 to-purple-500/30 blur-[100px] animate-blob" />
        <div className="absolute bottom-0 -right-[10%] w-[500px] h-[500px] rounded-full bg-gradient-to-l from-blue-400/30 to-indigo-500/30 blur-[100px] animate-blob animation-delay-2000" />
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 relative z-10 flex-grow flex flex-col">
        {/* Hero Content */}
        <div className="flex-grow flex flex-col justify-center items-center text-center">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-8 text-center lg:text-left">
              <GlassCard className="p-8 md:p-12 backdrop-blur-xl bg-gradient-to-br from-glass-bg/80 to-glass-bg/40">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-secondary-gray to-accent-teal/90">
                    Build Financial Worth, Achieve Success
                  </span>
                </h1>
                <p className="text-lg md:text-xl text-secondary-gray/90 mb-8 leading-relaxed">
                  Our mission is to help you grow your financial success through high-quality accounting, tax, and consulting services.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <button 
                    onClick={handleGetStarted}
                    className="px-8 py-4 rounded-xl font-semibold 
                      bg-accent-teal/90 hover:bg-accent-teal
                      text-secondary-gray
                      transform hover:scale-[1.02] transition-all duration-300 
                      shadow-lg hover:shadow-accent-teal/30">
                    Get Started
                  </button>
                  <button 
                    onClick={handleLearnMore}
                    className="px-8 py-4 rounded-xl font-semibold
                      bg-glass hover:bg-white/10 
                      text-secondary-gray 
                      transition-all duration-300">
                    Learn More
                  </button>
                </div>
              </GlassCard>
            </div>

            {/* Right Column - Carousel */}
            <div className="relative h-[400px] sm:h-[500px] md:h-[600px] w-full mt-8 lg:mt-0">
              <div className="absolute inset-0 flex items-center justify-center">
                <GlassCard className="w-full h-full sm:h-[450px] md:h-[500px] relative overflow-hidden group">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentSlide}
                      initial={{ opacity: 0, scale: 0.95, x: 20 }}
                      animate={{ opacity: 1, scale: 1, x: 0 }}
                      exit={{ opacity: 0, scale: 0.95, x: -20 }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={getImagePath(slides[currentSlide].image)}
                        alt={slides[currentSlide].alt}
                        fill
                        className={`object-contain ${slides[currentSlide].showNameplate ? 'p-4 sm:p-6 md:p-8' : 'p-3 sm:p-4 md:p-8'}`}
                        priority={currentSlide === 0}
                      />
                      {/* Elegant Nameplate - only for Earles image */}
                      {slides[currentSlide].showNameplate && (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                          className="absolute bottom-0 left-0 right-0 flex justify-center mb-4 sm:mb-8"
                        >
                          <div className="backdrop-blur-xl bg-gradient-to-br from-accent-teal/80 to-accent-teal/60 border-2 border-accent-teal/40 rounded-xl px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 shadow-xl">
                            <div className="text-center space-y-1 sm:space-y-2">
                              <h3 className="font-playfair text-lg sm:text-xl md:text-2xl text-white font-bold tracking-wide">
                                {slides[currentSlide].title}
                              </h3>
                              <p className="font-light text-xs sm:text-sm text-white/90 tracking-[0.15em] uppercase">
                                {slides[currentSlide].subtitle}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      )}
                      {/* Award badge for plaque */}
                      {!slides[currentSlide].showNameplate && (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.3 }}
                          className="absolute bottom-0 left-0 right-0 flex justify-center mb-4 sm:mb-8"
                        >
                          <div className="backdrop-blur-xl bg-gradient-to-br from-accent-teal/30 to-accent-teal/10 border-2 border-accent-teal/40 rounded-xl px-4 sm:px-6 py-2 sm:py-3 shadow-xl">
                            <div className="text-center space-y-1">
                              <h3 className="font-playfair text-lg sm:text-xl md:text-2xl text-accent-teal font-bold tracking-wide">
                                {slides[currentSlide].title}
                              </h3>
                              <p className="font-light text-xs sm:text-sm text-secondary-gray/90 tracking-[0.15em] uppercase">
                                {slides[currentSlide].subtitle}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </motion.div>
                  </AnimatePresence>
                  
                  {/* Navigation Arrows - visible on mobile, hover on desktop */}
                  <button
                    onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
                    className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full backdrop-blur-md bg-glass/70 border border-glass-border/50 hover:bg-glass/90 transition-all duration-300 opacity-100 md:opacity-0 md:group-hover:opacity-100"
                    aria-label="Previous slide"
                  >
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-secondary-gray" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
                    className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full backdrop-blur-md bg-glass/70 border border-glass-border/50 hover:bg-glass/90 transition-all duration-300 opacity-100 md:opacity-0 md:group-hover:opacity-100"
                    aria-label="Next slide"
                  >
                    <svg className="w-5 h-5 sm:w-6 sm:h-6 text-secondary-gray" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                  
                  {/* Navigation Dots */}
                  <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2">
                    {slides.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`h-2 rounded-full transition-all duration-300 ${
                          currentSlide === index
                            ? 'w-6 sm:w-8 bg-accent-teal'
                            : 'w-2 bg-secondary-gray/40 hover:bg-secondary-gray/60'
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>
                </GlassCard>
              </div>
            </div>
          </div>
        </div>
        
        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { number: '700+', label: 'Clients Served' },
            { number: '15+', label: 'Years Experience' },
            { number: '100%', label: 'Satisfaction Rating' },
            { number: '24/7', label: 'Support' }
          ].map((stat, index) => (
            <GlassCard 
              key={index} 
              className="text-center p-6 transform hover:scale-105 transition-all duration-300"
            >
              <div className="text-2xl md:text-3xl font-bold mb-2">{stat.number}</div>
              <div className="text-sm text-blue-100">{stat.label}</div>
            </GlassCard>
          ))}
        </div>

        {/* Scroll Indicator moved below stats with highest z-index */}
        <div className="relative z-30 flex justify-center mb-8">
          <motion.button
            onClick={handleScroll}
            className="text-secondary-gray hover:text-accent-teal transition-colors duration-300"
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </motion.button>
        </div>
      </div>
    </div>
  );
}

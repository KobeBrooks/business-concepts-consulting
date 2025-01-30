'use client'

import { motion } from 'framer-motion';
import GlassCard from './GlassCard';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import FloatingEmojis from './FloatingEmojis';
import { getImagePath } from '@/utils/imagePath';

export default function HeroSection() {
  const router = useRouter();

  const handleScroll = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  const handleLearnMore = () => {
    router.push('/services');
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
                  <button className="px-8 py-4 rounded-xl font-semibold 
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

            {/* Right Column - Image/Visual */}
            <div className="hidden lg:block relative h-[600px]">
              <div className="absolute inset-0 flex items-center justify-center">
                <GlassCard className="w-full h-[500px] relative overflow-hidden">
                  <Image
                    src={getImagePath('/theEarles.png')}
                    alt="Chris & Audrey Earle"
                    fill
                    className="object-contain p-8"
                    priority
                  />
                  {/* Elegant Nameplate */}
                  <div className="absolute bottom-0 left-0 right-0 flex justify-center mb-8">
                    <div className="backdrop-blur-xl bg-glass/50 border border-glass-border/50 rounded-xl px-8 py-4 shadow-lg">
                      <div className="text-center space-y-2">
                        <h3 className="font-playfair text-2xl text-secondary-gray tracking-wide">
                          Chris & Audrey Earle
                        </h3>
                        <div className="w-24 h-px mx-auto bg-accent-teal/50" />
                        <p className="font-light text-sm text-secondary-gray/90 tracking-[0.2em] uppercase">
                          Founders & Principal Consultants
                        </p>
                      </div>
                    </div>
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

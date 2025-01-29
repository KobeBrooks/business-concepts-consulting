'use client'

import { motion, AnimatePresence } from 'framer-motion';
import GlassCard from './GlassCard';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function ServicesGrid() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isMounted, setIsMounted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const services = [
    {
      title: 'Individual Income Tax Return',
      description: 'Professional tax preparation services tailored to your personal financial situation.',
      icon: '📋'
    },
    {
      title: 'Business Income Tax Return',
      description: 'Comprehensive tax services for businesses of all sizes.',
      icon: '💼'
    },
    {
      title: '501(c)3 IRS Application',
      description: 'Expert assistance in obtaining non-profit status for your organization.',
      icon: '⚖️'
    },
    {
      title: '1099s & W-2s',
      description: 'Accurate preparation and filing of tax forms for your employees and contractors.',
      icon: '📑'
    },
    {
      title: 'Business Consulting',
      description: 'Strategic guidance to help your business grow and succeed.',
      icon: '💡'
    },
    {
      title: 'Bookkeeping Services',
      description: 'Comprehensive bookkeeping and accounting services to keep your finances organized.',
      icon: '📚'
    },
    {
      title: 'IRS Audit & Resolutions',
      description: 'Professional representation and support during IRS audits.',
      icon: '🔍'
    },
    {
      title: 'Incorporations',
      description: 'Assistance in business formation and incorporation processes.',
      icon: '🏢'
    }
  ];

  if (!isMounted) {
    return null;
  }

  const ServiceCard = ({ service, index }) => (
    <div className="p-6">
      <div className="text-3xl mb-4">{service.icon}</div>
      <h3 className="text-xl font-bold mb-2 text-secondary-gray">{service.title}</h3>
      <p className="text-secondary-gray/80 text-sm mb-4">{service.description}</p>
      <Link 
        href={`/services#${service.title.toLowerCase().replace(/\s+/g, '-')}`}
        className="inline-block text-sm text-accent-teal hover:text-accent-teal/80 transition-colors"
      >
        Learn More →
      </Link>
    </div>
  );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto px-4">
      {services.map((service, index) => (
        isMobile ? (
          // Mobile version - no animations
          <div key={index} className="relative">
            <GlassCard className="h-full">
              <ServiceCard service={service} index={index} />
            </GlassCard>
          </div>
        ) : (
          // Desktop version - with animations
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
              ease: 'easeOut'
            }}
            className="relative group"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <GlassCard className={`
              transform transition-all duration-300 h-full
              ${hoveredIndex === index ? 'scale-[1.02]' : ''}
              hover:shadow-xl
            `}>
              <ServiceCard service={service} index={index} />
              <AnimatePresence>
                {hoveredIndex === index && (
                  <motion.div 
                    layoutId="hoverBackground"
                    className="absolute -inset-2 bg-gradient-to-r from-accent-teal/20 to-accent-teal/10 rounded-xl blur opacity-60 -z-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.6 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  />
                )}
              </AnimatePresence>
            </GlassCard>
          </motion.div>
        )
      ))}
    </div>
  );
}
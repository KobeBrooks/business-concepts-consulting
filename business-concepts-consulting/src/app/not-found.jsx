'use client'

import GlassNavbar from '@/components/GlassNavbar';
import GlassCard from '@/components/GlassCard';
import { motion } from 'framer-motion';
import FloatingEmojis from '@/components/FloatingEmojis';
import Link from 'next/link';

export default function NotFound() {
  const quickLinks = [
    { href: '/', label: 'Home', icon: '🏠' },
    { href: '/services', label: 'Services', icon: '💼' },
    { href: '/about', label: 'About Us', icon: '👥' },
    { href: '/contact', label: 'Contact', icon: '📞' },
  ];

  return (
    <>
      <GlassNavbar />
      <main className="min-h-screen overflow-x-hidden bg-gradient-to-br from-gradient-start to-gradient-end">
        {/* Background Effects */}
        <div className="fixed inset-0 z-0 overflow-hidden">
          <FloatingEmojis />
          <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-gradient-to-r from-blue-500/30 to-purple-500/30 blur-[100px] animate-blob" />
          <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-gradient-to-l from-blue-400/30 to-indigo-500/30 blur-[100px] animate-blob animation-delay-2000" />
        </div>

        <div className="relative z-10 container mx-auto px-4 min-h-screen flex items-center justify-center">
          <GlassCard className="max-w-2xl w-full p-8 md:p-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* 404 Number */}
              <motion.div
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-8xl md:text-9xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-accent-teal to-accent-teal/60 mb-4"
              >
                404
              </motion.div>

              {/* Emoji */}
              <motion.div
                initial={{ rotate: -10 }}
                animate={{ rotate: [-10, 10, -10] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="text-6xl mb-6"
              >
                🔍
              </motion.div>

              {/* Message */}
              <h1 className="text-2xl md:text-3xl font-bold text-secondary-gray mb-4">
                Page Not Found
              </h1>
              <p className="text-secondary-gray/80 mb-8 text-lg">
                Looks like this page took an unexpected deduction. Let's get you back on track!
              </p>

              {/* Quick Links */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {quickLinks.map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      className="group flex flex-col items-center gap-2 p-4 rounded-xl 
                        bg-white/5 hover:bg-white/10 
                        border border-white/10 hover:border-accent-teal/30
                        transition-all duration-300 hover:scale-105"
                    >
                      <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                        {link.icon}
                      </span>
                      <span className="text-secondary-gray/90 text-sm font-medium">
                        {link.label}
                      </span>
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Back Button */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.8 }}
                className="mt-8"
              >
                <Link
                  href="/"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold 
                    bg-gradient-to-r from-accent-teal to-accent-teal/80
                    hover:from-accent-teal/90 hover:to-accent-teal
                    text-secondary-gray 
                    transform hover:scale-[1.02] transition-all duration-300 
                    shadow-lg hover:shadow-accent-teal/50
                    border border-accent-teal/20"
                >
                  <svg 
                    className="w-5 h-5 transform rotate-180" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M13 7l5 5m0 0l-5 5m5-5H6" 
                    />
                  </svg>
                  Back to Home
                </Link>
              </motion.div>
            </motion.div>
          </GlassCard>
        </div>
      </main>
    </>
  );
}

'use client';
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function GlassNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const navItems = [
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-glass-bg bg-opacity-40 backdrop-blur-lg z-[100]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="flex items-center">
              <Image
                src={getImagePath('/businessConceptsConsulting.png')}
                alt="BCC Accounting Logo"
                width={50}
                height={50}
                className="mr-3"
              />
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-200">
                  Business Concepts
                </span>
                <span className="text-sm font-medium tracking-wide bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-white">
                  Consulting
                </span>
              </div>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative group px-3 py-2"
              >
                <span className="relative z-10 text-sm text-white/90 group-hover:text-white transition-colors duration-200">
                  {item.name}
                </span>
                {/* Animated underline */}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-blue-200 group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
            
            {/* CTA Button */}
            <Link
              href="/contact"
              className="relative inline-flex items-center px-4 py-1.5 text-sm overflow-hidden rounded-full
                bg-gradient-to-r from-blue-500 to-blue-400
                hover:from-blue-400 hover:to-blue-500
                transition-all duration-300 transform hover:scale-105
                shadow-[0_0_20px_rgba(59,130,246,0.3)]
                hover:shadow-[0_0_25px_rgba(59,130,246,0.5)]"
            >
              <span className="relative z-10 font-semibold">
                Get Started
              </span>
              {/* Shine effect */}
              <span className="absolute top-0 -left-full w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent group-hover:left-full transition-all duration-500" />
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMobileMenu}
              className="p-1.5 rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                // Close icon
                <svg 
                  className="w-5 h-5" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M6 18L18 6M6 6l12 12" 
                  />
                </svg>
              ) : (
                // Hamburger icon
                <svg 
                  className="w-5 h-5" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M4 6h16M4 12h16M4 18h16" 
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`
          md:hidden 
          transform transition-all duration-300 ease-in-out
          ${isMobileMenuOpen 
            ? 'opacity-100 translate-y-0 max-h-0px]' 
            : 'opacity-0 -translate-y-4 max-h-0 overflow-hidden'}
        `}
      >
        <div className="px-4 pt-2 pb-3 space-y-1 backdrop-glass bg-glass/50 border-b border-glass/50">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-sm text-white/90 hover:text-white hover:bg-white/10 transition-all duration-200"
            >
              {item.name}
            </Link>
          ))}
          {/* Mobile CTA Button */}
          <Link
            href="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block mt-2 px-3 py-2 rounded-lg text-sm text-center
              bg-gradient-to-r from-blue-500 to-blue-400
              hover:from-blue-400 hover:to-blue-500
              transition-all duration-300
              shadow-[0_0_20px_rgba(59,130,246,0.3)]"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}
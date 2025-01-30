'use client'

import GlassNavbar from '@/components/GlassNavbar';
import GlassCard from '@/components/GlassCard';
import ScrollAnimation from '@/components/ScrollAnimation';
import FloatingEmojis from '@/components/FloatingEmojis';
import Link from 'next/link';

export default function ResourcesPage() {
  const forms = [
    { name: 'W-4', description: 'Employee\'s Withholding Certificate', icon: '📝' },
    { name: 'G-4 (Georgia W-4)', description: 'Georgia State Tax Withholding Form', icon: '📋' },
    { name: 'Form I-9', description: 'Employment Eligibility Verification', icon: '✅' },
    { name: 'Form SS-4', description: 'Application for Employer Identification Number', icon: '🔢' },
    { name: 'Employer Status Report', description: 'Employment Status Documentation', icon: '📊' },
    { name: 'Form 2848', description: 'Power of Attorney and Declaration of Representative', icon: '⚖️' }
  ];

  const publications = [
    { 
      name: 'Your Federal Income Tax (For Individuals)',
      description: 'Comprehensive guide for individual taxpayers',
      icon: '📚'
    },
    { 
      name: 'Tax Guides for U.S. Citizens and Resident Aliens Abroad',
      description: 'Essential information for overseas taxpayers',
      icon: '🌎'
    },
    { 
      name: 'Tax Calendars',
      description: 'Important dates and deadlines for tax filing',
      icon: '📅'
    },
    { 
      name: 'Starting a Business and Keeping Records',
      description: 'Guide for new business owners on tax compliance',
      icon: '💼'
    }
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

        <div className="relative z-10 container mx-auto px-4 py-24">
          <ScrollAnimation>
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-secondary-gray to-accent-teal/90">
                Resources
              </h1>
              <p className="text-secondary-gray/80 text-lg max-w-2xl mx-auto">
                Access important tax forms and IRS publications
              </p>
            </div>
          </ScrollAnimation>

          {/* Forms Section */}
          <ScrollAnimation>
            <GlassCard className="mb-12 p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold text-secondary-gray mb-8 text-center">
                Tax Forms
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {forms.map((form, index) => (
                  <Link 
                    key={index}
                    href="#"
                    className="group relative p-6 rounded-xl 
                      bg-gradient-to-br from-glass-bg/30 to-glass-bg/10
                      hover:from-glass-bg/40 hover:to-glass-bg/20
                      border border-glass-border/20 hover:border-glass-border/40
                      transition-all duration-300 hover:scale-[1.02]
                      shadow-lg hover:shadow-xl"
                  >
                    <div className="flex items-start gap-4">
                      <span className="text-3xl">{form.icon}</span>
                      <div>
                        <h3 className="text-xl font-semibold text-accent-teal mb-2 group-hover:text-accent-teal/90">
                          {form.name}
                        </h3>
                        <p className="text-secondary-gray/80 group-hover:text-secondary-gray/90">
                          {form.description}
                        </p>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-accent-teal/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                  </Link>
                ))}
              </div>
            </GlassCard>
          </ScrollAnimation>

          {/* Publications Section */}
          <ScrollAnimation>
            <GlassCard className="p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold text-secondary-gray mb-8 text-center">
                IRS Publications
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {publications.map((pub, index) => (
                  <Link 
                    key={index}
                    href="#"
                    className="group relative p-6 rounded-xl 
                      bg-gradient-to-br from-glass-bg/30 to-glass-bg/10
                      hover:from-glass-bg/40 hover:to-glass-bg/20
                      border border-glass-border/20 hover:border-glass-border/40
                      transition-all duration-300 hover:scale-[1.02]
                      shadow-lg hover:shadow-xl"
                  >
                    <div className="flex items-start gap-4">
                      <span className="text-3xl">{pub.icon}</span>
                      <div>
                        <h3 className="text-xl font-semibold text-accent-teal mb-2 group-hover:text-accent-teal/90">
                          {pub.name}
                        </h3>
                        <p className="text-secondary-gray/80 group-hover:text-secondary-gray/90">
                          {pub.description}
                        </p>
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-accent-teal/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                  </Link>
                ))}
              </div>
            </GlassCard>
          </ScrollAnimation>
        </div>
      </main>
    </>
  );
} 
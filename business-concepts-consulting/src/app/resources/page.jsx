'use client'

import GlassNavbar from '@/components/GlassNavbar';
import GlassCard from '@/components/GlassCard';
import ScrollAnimation from '@/components/ScrollAnimation';
import FloatingEmojis from '@/components/FloatingEmojis';

export default function ResourcesPage() {
  const forms = [
    { 
      name: 'W-4', 
      description: 'Employee\'s Withholding Certificate', 
      icon: '📝',
      url: 'http://www.irs.gov/pub/irs-pdf/fw4.pdf'
    },
    { 
      name: 'G-4 (Georgia W-4)', 
      description: 'Georgia State Tax Withholding Form', 
      icon: '📋',
      url: 'https://dor.georgia.gov/document/form/tsdemployeeswithholdingallowancecertificateg-4pdf/download'
    },
    { 
      name: 'Form I-9', 
      description: 'Employment Eligibility Verification', 
      icon: '✅',
      url: 'http://www.uscis.gov/sites/default/files/files/form/i-9.pdf'
    },
    { 
      name: 'Form SS-4', 
      description: 'Application for Employer Identification Number', 
      icon: '🔢',
      url: 'http://www.irs.gov/pub/irs-pdf/fss4.pdf'
    },
    { 
      name: 'Employer Status Report', 
      description: 'Employment Status Documentation', 
      icon: '📊',
      url: 'https://dol.georgia.gov/document/unemployment-tax/application-gdol-tax-account-or-status-change-dol-1n/download'
    },
    { 
      name: 'Form 2848', 
      description: 'Power of Attorney and Declaration of Representative', 
      icon: '⚖️',
      url: 'http://www.irs.gov/pub/irs-pdf/f2848.pdf'
    }
  ];

  const publications = [
    { 
      name: 'Your Federal Income Tax (For Individuals)',
      description: 'Comprehensive guide for individual taxpayers',
      icon: '📚',
      url: 'http://www.irs.gov/pub/irs-pdf/p17.pdf'
    },
    { 
      name: 'Tax Guides for U.S. Citizens and Resident Aliens Abroad',
      description: 'Essential information for overseas taxpayers',
      icon: '🌎',
      url: 'http://www.irs.gov/pub/irs-pdf/p54.pdf'
    },
    { 
      name: 'Tax Calendars',
      description: 'Important dates and deadlines for tax filing',
      icon: '📅',
      url: 'http://www.irs.gov/pub/irs-pdf/p509.pdf'
    },
    { 
      name: 'Starting a Business and Keeping Records',
      description: 'Guide for new business owners on tax compliance',
      icon: '💼',
      url: 'http://www.irs.gov/pub/irs-pdf/p583.pdf'
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
                  <a 
                    key={index}
                    href={form.url}
                    target="_blank"
                    rel="noopener noreferrer"
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
                  </a>
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
                  <a 
                    key={index}
                    href={pub.url}
                    target="_blank"
                    rel="noopener noreferrer"
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
                  </a>
                ))}
              </div>
            </GlassCard>
          </ScrollAnimation>
        </div>
      </main>
    </>
  );
} 
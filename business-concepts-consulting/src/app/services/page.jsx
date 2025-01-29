'use client'

import GlassNavbar from '@/components/GlassNavbar';
import GlassCard from '@/components/GlassCard';
import { motion } from 'framer-motion';
import ScrollAnimation from '@/components/ScrollAnimation';
import { useEffect, useState } from 'react';

export default function ServicesPage() {
  const [selectedId, setSelectedId] = useState('');

  useEffect(() => {
    const hash = window.location.hash.slice(1);
    setSelectedId(hash);

    if (hash) {
      scrollToService(hash);
    }
  }, []);

  const scrollToService = (serviceId) => {
    const element = document.getElementById(serviceId);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const handleCardClick = (serviceId) => {
    console.log('Card clicked:', serviceId);
    if (selectedId === serviceId) {
      setSelectedId('');
      window.history.pushState(null, '', window.location.pathname);
    } else {
      setSelectedId(serviceId);
      window.history.pushState(null, '', `#${serviceId}`);
      scrollToService(serviceId);
    }
  };

  const services = [
    {
      title: 'Individual Income Tax Return',
      description: 'Professional tax preparation services tailored to your personal financial situation.',
      icon: '📋',
      details: [
        'Personal tax return preparation and filing',
        'Tax planning and strategy development',
        'Electronic filing services',
        'Tax credit and deduction optimization',
        'Year-round tax support',
        'State and federal tax compliance',
        'Tax law updates and guidance',
        'Personal tax consultation'
      ]
    },
    {
      title: 'Business Income Tax Return',
      description: 'Comprehensive tax services for businesses of all sizes.',
      icon: '💼',
      details: [
        'Corporate tax return preparation',
        'Partnership tax filings',
        'LLC tax compliance',
        'Business tax planning',
        'Quarterly tax estimates',
        'Business deduction optimization',
        'Industry-specific tax strategies',
        'Multi-state tax compliance'
      ]
    },
    {
      title: '501(c)3 IRS Application',
      description: 'Expert assistance in obtaining non-profit status for your organization.',
      icon: '⚖️',
      details: [
        'Form 1023 preparation and filing',
        'Non-profit structure consultation',
        'IRS correspondence handling',
        'State non-profit registration',
        'Governance documentation preparation',
        'Tax-exempt status maintenance',
        'Compliance requirements guidance',
        'Board structure consultation'
      ]
    },
    {
      title: '1099s & W-2s',
      description: 'Accurate preparation and filing of tax forms for your employees and contractors.',
      icon: '📑',
      details: [
        'W-2 preparation and filing',
        '1099 form preparation',
        'Electronic submission to IRS',
        'State filing requirements',
        'Year-end processing',
        'Employee/contractor classification review',
        'Deadline compliance management',
        'Record keeping assistance'
      ]
    },
    {
      title: 'Business Consulting',
      description: 'Strategic guidance to help your business grow and succeed.',
      icon: '💡',
      details: [
        'Business strategy development',
        'Financial performance analysis',
        'Growth planning',
        'Cash flow optimization',
        'Business process improvement',
        'Risk assessment',
        'Market analysis',
        'Profitability enhancement strategies'
      ]
    },
    {
      title: 'Bookkeeping Services',
      description: 'Comprehensive bookkeeping and accounting services to keep your finances organized.',
      icon: '📚',
      details: [
        'Monthly financial recording',
        'Bank reconciliation',
        'Accounts payable/receivable',
        'General ledger maintenance',
        'Financial statement preparation',
        'Payroll processing',
        'QuickBooks setup and support',
        'Financial record organization'
      ]
    },
    {
      title: 'IRS Audit & Resolutions',
      description: 'Professional representation and support during IRS audits.',
      icon: '🔍',
      details: [
        'IRS audit representation',
        'Documentation preparation',
        'Audit strategy development',
        'IRS correspondence handling',
        'Tax notice resolution',
        'Payment plan negotiation',
        'Penalty abatement requests',
        'Tax settlement assistance'
      ]
    },
    {
      title: 'Incorporations',
      description: 'Assistance in business formation and incorporation processes.',
      icon: '🏢',
      details: [
        'Entity structure consultation',
        'State incorporation filing',
        'LLC formation',
        'Partnership establishment',
        'EIN registration',
        'Business license acquisition',
        'Corporate bylaw preparation',
        'Initial compliance setup'
      ]
    }
  ];

  return (
    <>
      <GlassNavbar />
      <main className="min-h-screen bg-gradient-to-br from-gradient-start to-gradient-end pt-24">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <ScrollAnimation>
            <div className="text-center mb-4 md:mb-32 p-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-secondary-gray to-accent-teal/90">
                Our Services
              </h1>
              <p className="text-secondary-gray/80 text-lg max-w-2xl mx-auto">
                Comprehensive financial solutions tailored to your needs
              </p>
            </div>
          </ScrollAnimation>

          <div className="grid md:grid-cols-2 gap-16 md:gap-24">
            {services.map((service, index) => {
              const serviceId = service.title.toLowerCase().replace(/\s+/g, '-');
              const isSelected = serviceId === selectedId;
              
              return (
                <ScrollAnimation key={index} threshold={0.01} duration={0.03}>
                  <div id={serviceId} className="relative group">
                    {/* Glow Effects Behind Card */}
                    {isSelected && (
                      <>
                        {/* Large outer glow */}
                        <div className="absolute -inset-8 bg-accent-teal/5 blur-2xl rounded-3xl" />
                        {/* Medium glow */}
                        <div className="absolute -inset-4 bg-accent-teal/10 blur-xl rounded-3xl" />
                        {/* Inner glow */}
                        <div className="absolute -inset-2 bg-accent-teal/10 blur-lg rounded-3xl" />
                        {/* Left accent bar */}
                        <div className="absolute left-0 top-4 bottom-4 w-1 bg-gradient-to-b from-accent-teal via-accent-teal/50 to-transparent rounded-full" />
                      </>
                    )}
                    
                    <GlassCard 
                      className={`
                        relative h-full p-6 md:p-8 backdrop-blur-xl transition-all duration-500 cursor-pointer
                        ${isSelected 
                          ? 'bg-glass/90 scale-[1.02] z-20 shadow-[0_0_40px_rgba(20,184,166,0.3)] border border-accent-teal/20' 
                          : 'bg-glass/40 hover:scale-[1.01] z-10 hover:shadow-xl'}
                        ${selectedId && !isSelected ? 'opacity-40 hover:opacity-70' : ''}
                      `}
                      onClick={() => handleCardClick(serviceId)}
                    >
                      {/* Card Content */}
                      <div className="relative z-10">
                        {/* Header Section */}
                        <div className="flex items-center gap-4 mb-6">
                          <div className={`
                            flex-shrink-0 w-14 h-14 md:w-16 md:h-16 flex items-center justify-center rounded-xl
                            transition-all duration-500
                            ${isSelected 
                              ? 'bg-accent-teal/20 shadow-[0_0_20px_rgba(20,184,166,0.3)]' 
                              : 'bg-glass-bg/30'}
                          `}>
                            <span className="text-2xl md:text-3xl">{service.icon}</span>
                          </div>
                          <h2 className={`
                            font-playfair text-lg md:text-xl font-bold transition-all duration-500
                            ${isSelected ? 'text-accent-teal' : 'text-secondary-gray'}
                          `}>
                            {service.title}
                          </h2>
                        </div>

                        {/* Description */}
                        <p className={`
                          text-sm mb-6 leading-relaxed transition-colors duration-500
                          ${isSelected ? 'text-secondary-gray' : 'text-secondary-gray/80'}
                        `}>
                          {service.description}
                        </p>

                        {/* Details Grid */}
                        <div className="space-y-2.5">
                          {service.details.map((detail, i) => (
                            <div key={i} className="flex items-start gap-3 md:gap-4">
                              <div className={`
                                transition-colors duration-500 
                                min-w-[16px] w-4 h-4 mt-1
                                flex items-center justify-center
                                ${isSelected ? 'text-accent-teal' : 'text-secondary-gray/60'}
                              `}>
                                <svg 
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="16"
                                  height="16"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="3"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  style={{ minWidth: '16px' }}
                                >
                                  <polyline points="20 6 9 17 4 12" />
                                </svg>
                              </div>
                              <span className={`
                                leading-relaxed text-sm transition-colors duration-500
                                ${isSelected ? 'text-secondary-gray' : 'text-secondary-gray/80'}
                              `}>
                                {detail}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Active Card Effects */}
                      {isSelected && (
                        <>
                          {/* Bottom border gradient */}
                          <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accent-teal via-accent-teal/50 to-transparent" />
                          
                          {/* Corner accent */}
                          <div className="absolute top-0 right-0 w-16 h-16">
                            <div className="absolute inset-0 bg-gradient-to-br from-accent-teal/20 to-transparent rounded-tr-2xl" />
                            <svg 
                              className="absolute top-3 right-3 w-6 h-6 text-accent-teal"
                              fill="none" 
                              stroke="currentColor" 
                              viewBox="0 0 24 24"
                            >
                              <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                strokeWidth="2" 
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </div>
                        </>
                      )}
                    </GlassCard>
                  </div>
                </ScrollAnimation>
              );
            })}
          </div>
        </div>
      </main>
    </>
  );
} 
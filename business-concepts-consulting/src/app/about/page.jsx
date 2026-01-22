'use client'

import GlassNavbar from '@/components/GlassNavbar';
import GlassCard from '@/components/GlassCard';
import Image from 'next/image';
import { motion } from 'framer-motion';
import ScrollAnimation from '@/components/ScrollAnimation';
import FloatingEmojis from '@/components/FloatingEmojis';
import { getImagePath } from '@/utils/imagePath';
import { useRouter } from 'next/navigation';

export default function AboutPage() {
  const router = useRouter();

  const handleContact = () => {
    router.push('/contact');
  };

  // Stats data
  const stats = [
    { label: 'Years Combined Experience', value: '50+' },
    { label: 'Happy Clients', value: '1000+' },
    { label: 'Tax Returns Filed Annually', value: '800+' }
  ];

  // Core values
  const coreValues = [
    { icon: '🤝', title: 'Trust', description: 'Building lasting relationships through transparency and reliability' },
    { icon: '⭐', title: 'Excellence', description: 'Delivering exceptional service and accurate results' },
    { icon: '💡', title: 'Innovation', description: 'Staying current with evolving financial practices' },
    { icon: '🎯', title: 'Precision', description: 'Attention to detail in every financial decision' },
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
            {/* Mission Statement */}
            <GlassCard className="mb-16 p-8 md:p-12">
              <h1 className="text-4xl md:text-5xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-secondary-gray to-accent-teal/90">
                About Business Concepts Consulting
              </h1>
              <div className="space-y-6 text-secondary-gray/90">
                <p className="text-lg leading-relaxed">
                  We provide individuals and businesses with income tax planning, preparation, & filing. Accounting & Bookkeeping services and business consulting. With over 15 years in practice, we have a broad base of Financial Planning and analytical knowledge in the performance of audits, reviews and compilations.
                </p>
                <p className="text-lg leading-relaxed">
                  Our mission is to build our clients' financial worth by providing quality accounting, tax and consulting services.
                </p>
                <p className="text-lg leading-relaxed">
                  Business Concepts Consulting is committed to your success by making it our business to know your business well enough to improve your tax position, capital position, business structure and much more. We are looking forward to a successful working relationship.
                </p>
              </div>
            </GlassCard>
          </ScrollAnimation>

          {/* Stats Section */}
          <ScrollAnimation>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-16">
              {stats.map((stat, index) => (
                <GlassCard key={index} className="p-6 text-center hover:scale-105 transition-transform duration-300">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.5 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="text-3xl md:text-4xl font-bold text-accent-teal mb-2">{stat.value}</div>
                    <div className="text-sm md:text-base text-secondary-gray/90">{stat.label}</div>
                  </motion.div>
                </GlassCard>
              ))}
            </div>
          </ScrollAnimation>

          {/* Core Values */}
          <ScrollAnimation>
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-center text-secondary-gray mb-8">Our Core Values</h2>
              <div className="grid md:grid-cols-4 gap-6">
                {coreValues.map((value, index) => (
                  <GlassCard 
                    key={index} 
                    className="p-6 text-center hover:scale-105 transition-transform duration-300"
                  >
                    <div className="text-4xl mb-4">{value.icon}</div>
                    <h3 className="text-xl font-bold text-secondary-gray mb-2">{value.title}</h3>
                    <p className="text-secondary-gray/80">{value.description}</p>
                  </GlassCard>
                ))}
              </div>
            </div>
          </ScrollAnimation>

          {/* Team Section */}
          <div className="grid md:grid-cols-2 gap-8 mt-16">
            {/* Chris Earle */}
            <ScrollAnimation>
              <GlassCard className="p-8 group hover:scale-[1.02] transition-all duration-300">
                <div className="aspect-square relative mb-6 overflow-hidden rounded-xl">
                  <Image
                    src={getImagePath('/chrisEarleNew.jpg')}
                    alt="Chris Earle"
                    fill
                    className="object-cover object-top transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h2 className="text-2xl font-bold text-secondary-gray mb-2">Chris Earle</h2>
                <h3 className="text-accent-teal mb-4">Managing Partner</h3>
                <p className="text-secondary-gray/90 leading-relaxed">
                  Chris has over 30 years of experience in tax preparation, financial accounting, and business consulting services. His clients include Individuals, S-Corporations, C Corporations, Partnerships, and Non-profit organizations. Chris also has experience in working with clients in providing advice on accounting procedures, financial statement analysis & review, and analyzing internal controls. Before joining Business Concepts, Chris spent over 9 years in the energy industry focusing primarily on SEC financial reporting.
                </p>
              </GlassCard>
            </ScrollAnimation>

            {/* Audrey Earle */}
            <ScrollAnimation>
              <GlassCard className="p-8 group hover:scale-[1.02] transition-all duration-300">
                <div className="aspect-square relative mb-6 overflow-hidden rounded-xl">
                  <Image
                    src={getImagePath('/audreyEarleNew.jpg')}
                    alt="Audrey Earle"
                    fill
                    className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h2 className="text-2xl font-bold text-secondary-gray mb-2">Audrey Earle</h2>
                <h3 className="text-accent-teal mb-4">Partner</h3>
                <p className="text-secondary-gray/90 leading-relaxed">
                  Audrey has over 27 years of corporate organizational experience. She has extensive experience as a bookkeeper for clients in a variety of industries. Since joining Business Concepts, she has compiled and maintained the financial bookkeeping records of various companies with primary industry focus on Trucking, Medical related businesses, and restaurants.
                </p>
              </GlassCard>
            </ScrollAnimation>
          </div>

          {/* Call to Action */}
          <ScrollAnimation>
            <GlassCard className="mt-16 p-8 text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-secondary-gray mb-4">
                Ready to Work Together?
              </h2>
              <p className="text-secondary-gray/90 mb-6">
                Let's discuss how we can help you achieve your financial goals.
              </p>
              <button 
                onClick={handleContact}
                className="group relative px-8 py-4 rounded-xl font-semibold 
                  bg-gradient-to-r from-accent-teal to-accent-teal/80
                  hover:from-accent-teal/90 hover:to-accent-teal
                  text-secondary-gray 
                  transform hover:scale-[1.02] transition-all duration-300 
                  shadow-lg hover:shadow-accent-teal/50
                  border border-accent-teal/20
                  animate-pulse hover:animate-none"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Contact Us Today
                  <svg 
                    className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" 
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
                </span>
                <div className="absolute inset-0 -z-10 bg-gradient-to-r from-accent-teal/20 to-accent-teal/10 blur-lg rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>
            </GlassCard>
          </ScrollAnimation>
        </div>
      </main>
    </>
  );
} 
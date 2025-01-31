'use client'

import GlassNavbar from '@/components/GlassNavbar';
import GlassCard from '@/components/GlassCard';
import ContactForm from '@/components/ContactForm';
import ScrollAnimation from '@/components/ScrollAnimation';
import FloatingEmojis from '@/components/FloatingEmojis';

export default function ContactPage() {
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
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-secondary-gray to-accent-teal/90">
                Get In Touch
              </h1>
              <p className="text-lg text-secondary-gray/90">
                Ready to take your financial success to the next level? We're here to help you achieve your goals.
              </p>
            </div>
          </ScrollAnimation>

          <ScrollAnimation>
            <div className="max-w-2xl mx-auto">
              <ContactForm />
            </div>
          </ScrollAnimation>

          {/* Contact Information */}
          <ScrollAnimation>
            <div className="grid md:grid-cols-3 gap-6 mt-16">
              <GlassCard className="p-6 text-center">
                <div className="text-3xl mb-4">📍</div>
                <h3 className="text-xl font-bold text-secondary-gray mb-2">Location</h3>
                <p className="text-secondary-gray/90">Kennesaw, Georgia</p>
              </GlassCard>

              <GlassCard className="p-6 text-center">
                <div className="text-3xl mb-4">📞</div>
                <h3 className="text-xl font-bold text-secondary-gray mb-2">Phone</h3>
                <p className="text-secondary-gray/90">(770) 241-9821</p>
              </GlassCard>

              <GlassCard className="p-6 text-center">
                <div className="text-3xl mb-4">✉️</div>
                <h3 className="text-xl font-bold text-secondary-gray mb-2">Email</h3>
                <p className="text-secondary-gray/90">chrisearle.bcc@gmail.com</p>
              </GlassCard>
            </div>
          </ScrollAnimation>
        </div>
      </main>
    </>
  );
} 
import GlassNavbar from '@/components/GlassNavbar';
import HeroSection from '@/components/HeroSection';
import ServicesGrid from '@/components/ServicesGrid';
import TestimonialSlider from '@/components/TestimonialSlider';
import ContactForm from '@/components/ContactForm';
import ScrollAnimation from '@/components/ScrollAnimation';

export default function Home() {
  return (
    <>
      <GlassNavbar />
      <main className="min-h-screen bg-gradient-to-br from-gradient-start to-gradient-end">
        {/* Hero Section */}
        <section className="pt-16">
          <HeroSection />
        </section>

        {/* Services Section */}
        <section className="py-10" id="services">
          <ScrollAnimation threshold={0.1} duration={0.3}>
            <div className="max-w-7xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
              <ServicesGrid />
            </div>
          </ScrollAnimation>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-white/5" id="testimonials">
          <ScrollAnimation>
            <div className="max-w-7xl mx-auto px-4">
              <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
              <TestimonialSlider />
            </div>
          </ScrollAnimation>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-primary-dark text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p>© 2024 BCC Accounting Services. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
} 
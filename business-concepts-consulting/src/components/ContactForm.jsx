'use client'

import { useState } from 'react';
import emailjs from '@emailjs/browser';
import GlassCard from './GlassCard';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState({
    loading: false,
    success: false,
    error: false,
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: false, message: '' });

    try {
      // EmailJS configuration
      // You'll need to set these in your .env.local file or Vercel environment variables
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'your_service_id';
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || 'your_template_id';
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'your_public_key';

      // Send email using EmailJS
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          message: formData.message,
          to_email: 'chrisearle.bcc@gmail.com',
        },
        publicKey
      );

      setStatus({
        loading: false,
        success: true,
        error: false,
        message: 'Thank you! Your message has been sent successfully.'
      });

      // Reset form
      setFormData({ name: '', email: '', phone: '', message: '' });

      // Clear success message after 5 seconds
      setTimeout(() => {
        setStatus(prev => ({ ...prev, success: false, message: '' }));
      }, 5000);
    } catch (error) {
      console.error('EmailJS error:', error);
      setStatus({
        loading: false,
        success: false,
        error: true,
        message: 'Sorry, there was an error sending your message. Please try again or contact us directly at chrisearle.bcc@gmail.com'
      });
    }
  };

  return (
    <GlassCard className="max-w-lg mx-auto p-8">
      <h2 className="text-2xl font-bold mb-6 text-secondary-gray">Contact Us</h2>
      
      {/* Success Message */}
      {status.success && (
        <div className="mb-4 p-4 rounded-lg bg-green-500/20 border border-green-500/50 text-green-200">
          {status.message}
        </div>
      )}

      {/* Error Message */}
      {status.error && (
        <div className="mb-4 p-4 rounded-lg bg-red-500/20 border border-red-500/50 text-red-200">
          {status.message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-2 text-secondary-gray">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg bg-glass/50 backdrop-blur-sm border border-glass-border text-black placeholder-secondary-gray/50 focus:outline-none focus:border-accent-teal focus:ring-2 focus:ring-accent-teal/20"
            placeholder="Your name"
            required
            disabled={status.loading}
          />
        </div>
        <div>
          <label className="block mb-2 text-secondary-gray">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg bg-glass/50 backdrop-blur-sm border border-glass-border text-black placeholder-secondary-gray/50 focus:outline-none focus:border-accent-teal focus:ring-2 focus:ring-accent-teal/20"
            placeholder="your.email@example.com"
            required
            disabled={status.loading}
          />
        </div>
        <div>
          <label className="block mb-2 text-secondary-gray">Phone</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg bg-glass/50 backdrop-blur-sm border border-glass-border text-black placeholder-secondary-gray/50 focus:outline-none focus:border-accent-teal focus:ring-2 focus:ring-accent-teal/20"
            placeholder="(770) 123-4567"
            disabled={status.loading}
          />
        </div>
        <div>
          <label className="block mb-2 text-secondary-gray">Message</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full px-4 py-2 rounded-lg bg-glass/50 backdrop-blur-sm border border-glass-border text-black placeholder-secondary-gray/50 focus:outline-none focus:border-accent-teal focus:ring-2 focus:ring-accent-teal/20 resize-none"
            rows="4"
            placeholder="Your message..."
            required
            disabled={status.loading}
          ></textarea>
        </div>
        <button
          type="submit"
          disabled={status.loading}
          className="w-full block mt-2 px-6 py-3 rounded-lg text-center font-semibold
              bg-gradient-to-r from-accent-teal to-accent-teal/80
              hover:from-accent-teal/90 hover:to-accent-teal
              disabled:from-accent-teal/50 disabled:to-accent-teal/40
              text-secondary-gray
              transition-all duration-300
              shadow-lg hover:shadow-accent-teal/30
              disabled:cursor-not-allowed"
        >
          {status.loading ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </GlassCard>
  );
}

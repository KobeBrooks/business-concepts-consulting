import GlassCard from './GlassCard';

export default function ContactForm() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
  };

  return (
    <GlassCard className="max-w-lg mx-auto">
      <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
      <form className="space-y-4">
        <div>
          <label className="block mb-2">Name</label>
          <input
            type="text"
            className="w-full px-4 py-2 rounded-lg bg-white/50 backdrop-blur-sm border border-glass"
            required
          />
        </div>
        <div>
          <label className="block mb-2">Email</label>
          <input
            type="email"
            className="w-full px-4 py-2 rounded-lg bg-white/50 backdrop-blur-sm border border-glass"
            required
          />
        </div>
        <div>
          <label className="block mb-2">Message</label>
          <textarea
            className="w-full px-4 py-2 rounded-lg bg-white/50 backdrop-blur-sm border border-glass"
            rows="4"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full block mt-2 px-3 py-2 rounded-lg text-sm text-center
              bg-gradient-to-r from-accent-teal to-accent-teal/80
              hover:from-accent-teal/90 hover:to-accent-teal
              text-secondary-gray
              transition-all duration-300
              shadow-lg hover:shadow-accent-teal/30"
        >
          Send Message
        </button>
      </form>
    </GlassCard>
  );
} 
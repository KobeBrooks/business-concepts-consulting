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
          className="w-full bg-primary-blue hover:bg-primary-dark text-white px-6 py-3 rounded-lg transition-colors"
        >
          Send Message
        </button>
      </form>
    </GlassCard>
  );
} 
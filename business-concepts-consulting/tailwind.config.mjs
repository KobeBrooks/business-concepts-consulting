/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-navy': '#1E2A38',
        'secondary-gray': '#F5F6F7',
        'accent-teal': '#2EB8B3',
        'text-charcoal': '#2C2C2C',
        'highlight-gray': '#DCDCDC',
        'glass': {
          bg: 'var(--glass-bg)',
          border: 'var(--glass-border)',
          shadow: 'var(--glass-shadow)',
        },
        'gradient': {
          start: 'var(--gradient-start)',
          end: 'var(--gradient-end)',
        },
      },
      backdropFilter: {
        'glass': 'blur(16px) saturate(180%)',
      },
      boxShadow: {
        'glass': '0 8px 32px 0 var(--glass-shadow)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
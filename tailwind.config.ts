import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors - South Florida Theme
        primary: {
          DEFAULT: '#FF6B35',
          fg: '#FFFFFF',
          int: '#E55A2B',
        },
        // Secondary Colors
        secondary: {
          DEFAULT: '#1E3A8A',
          fg: '#FFFFFF',
          int: '#1E40AF',
        },
        // Accent Colors
        accent: {
          DEFAULT: '#10B981',
          fg: '#FFFFFF',
          int: '#059669',
          extraSoft: '#F0F0F0',
        },
        // Neutral Colors
        neutral: {
          0: '#FFFFFF',
          20: '#F5F5F5',
          30: '#E5E5E5',
          50: '#F9FAFB',
          100: '#F3F4F6',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#374151',
          800: '#1F2937',
          900: '#111827',
          strong: '#000000',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Merriweather', 'Georgia', 'serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1rem' }],
        sm: ['0.875rem', { lineHeight: '1.25rem' }],
        base: ['1rem', { lineHeight: '1.5rem' }],
        lg: ['1.125rem', { lineHeight: '1.75rem' }],
        xl: ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
      },
      letterSpacing: {
        'tight-1': '-0.01em',
        'tight-2': '-0.02em',
      },
      maxWidth: {
        'screen-lg': '1024px',
      },
      aspectRatio: {
        '16/9': '16 / 9',
      },
    },
  },
  plugins: [],
}
export default config
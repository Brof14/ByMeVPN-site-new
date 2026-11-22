/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        paper: {
          DEFAULT: 'oklch(13% 0.02 260)',
          2: 'oklch(17% 0.02 260)',
          3: 'oklch(21% 0.02 260)',
          4: 'oklch(25% 0.02 260)',
        },
        ink: {
          DEFAULT: 'oklch(96% 0.01 260)',
          2: 'oklch(80% 0.015 260)',
          3: 'oklch(62% 0.02 260)',
          muted: 'oklch(52% 0.02 260)',
        },
        rule: 'oklch(26% 0.02 260)',
        brand: {
          50: 'oklch(28% 0.06 150)',
          100: 'oklch(38% 0.10 150)',
          200: 'oklch(48% 0.14 150)',
          300: 'oklch(58% 0.17 150)',
          400: 'oklch(65% 0.18 150)',
          500: 'oklch(72% 0.19 150)',
          600: 'oklch(75% 0.18 150)',
          700: 'oklch(78% 0.17 150)',
          ink: 'oklch(12% 0.03 150)',
        },
        success: 'oklch(70% 0.12 150)',
        warning: 'oklch(75% 0.15 85)',
        error: 'oklch(62% 0.19 27)',
      },
      fontSize: {
        'display': ['clamp(2.75rem, 5vw + 1rem, 5.25rem)', { lineHeight: '1.05', letterSpacing: '-0.03em', fontWeight: '700' }],
        'display-s': ['clamp(2.25rem, 4vw + 0.5rem, 3.75rem)', { lineHeight: '1.05', letterSpacing: '-0.03em', fontWeight: '700' }],
        'section': ['clamp(2rem, 2.5vw + 1rem, 3.5rem)', { lineHeight: '1.1', letterSpacing: '-0.03em', fontWeight: '700' }],
        'title': ['clamp(1.25rem, 0.75vw + 0.875rem, 1.625rem)', { lineHeight: '1.2', letterSpacing: '-0.02em', fontWeight: '700' }],
        'lead': ['clamp(1.125rem, 0.35vw + 1rem, 1.375rem)', { lineHeight: '1.45' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
        '38': '9.5rem',
        '50': '12.5rem',
      },
      borderRadius: {
        'card': '16px',
        'input': '12px',
        'pill': '999px',
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.23, 1, 0.32, 1)',
        'in-expo': 'cubic-bezier(0.7, 0, 0.84, 0)',
        'in-out-expo': 'cubic-bezier(0.77, 0, 0.175, 1)',
      },
      transitionDuration: {
        'micro': '120ms',
        'short': '220ms',
        'long': '420ms',
        'xlong': '700ms',
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.23, 1, 0.32, 1) forwards',
        'fade-in': 'fade-in 0.7s cubic-bezier(0.23, 1, 0.32, 1) forwards',
        'scale-in': 'scale-in 0.7s cubic-bezier(0.23, 1, 0.32, 1) forwards',
        'pulse-soft': 'pulse-soft 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'orbit': 'orbit 20s linear infinite',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.96)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        'orbit': {
          '0%': { transform: 'rotate(0deg) translateX(0) rotate(0deg)' },
          '100%': { transform: 'rotate(360deg) translateX(0) rotate(-360deg)' },
        },
      },
    },
  },
  plugins: [],
};

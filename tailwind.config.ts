import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        'gradient-pan': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        blob: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '33%': { transform: 'translate(12%, -18%) scale(1.08)' },
          '66%': { transform: 'translate(-10%, 8%) scale(0.95)' },
        },
        'blob-alt': {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)' },
          '50%': { transform: 'translate(-14%, 12%) scale(1.12)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%) skewX(-12deg)' },
          '100%': { transform: 'translateX(200%) skewX(-12deg)' },
        },
        'gradient-drift-y': {
          '0%, 100%': { transform: 'translateY(-1.5%)' },
          '50%': { transform: 'translateY(1.5%)' },
        },
      },
      animation: {
        'gradient-pan': 'gradient-pan 14s ease-in-out infinite',
        blob: 'blob 18s ease-in-out infinite',
        'blob-alt': 'blob-alt 22s ease-in-out infinite',
        shimmer: 'shimmer 6s ease-in-out infinite',
        'gradient-drift-y': 'gradient-drift-y 9s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

export default config

import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        /*
         * design.json primaryButton.surfaceColor = #05FF91
         * Tailwind에서 bg-neon / text-neon / border-neon 으로 사용
         */
        neon: '#05FF91',
      },
      boxShadow: {
        'neon-glow': '0px 0px 20px rgba(5, 255, 145, 0.4)',
        'neon-glow-sm': '0px 0px 8px rgba(5, 255, 145, 0.35)',
        'card-inset': 'inset 0px 1px 1px rgba(255, 255, 255, 0.05)',
      },
      keyframes: {
        'gradient-drift-y': {
          '0%, 100%': { transform: 'translateY(-1.5%)' },
          '50%': { transform: 'translateY(1.5%)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%) skewX(-12deg)' },
          '100%': { transform: 'translateX(200%) skewX(-12deg)' },
        },
      },
      animation: {
        'gradient-drift-y': 'gradient-drift-y 9s ease-in-out infinite',
        shimmer: 'shimmer 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

export default config

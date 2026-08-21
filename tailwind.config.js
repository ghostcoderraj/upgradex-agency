/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          dark: '#030305',
          card: '#090a10',
          surface: '#11131f',
          glass: 'rgba(15, 17, 28, 0.65)',
        },
        gold: {
          DEFAULT: '#d4af37',
          light: '#f3d068',
          dark: '#997517',
          glow: 'rgba(212, 175, 55, 0.35)',
        },
        cyan: {
          DEFAULT: '#00f2fe',
          glow: 'rgba(0, 242, 254, 0.35)',
        },
        accent: {
          violet: '#8b5cf6',
          indigo: '#6366f1',
          blue: '#3b82f6',
        }
      },
      fontFamily: {
        sans: ['Inter', 'Outfit', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'spin-slow': 'spin 20s linear infinite',
        'shimmer': 'shimmer 2.5s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.05)' },
        },
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-gradient': 'radial-gradient(circle at 50% 0%, rgba(99, 102, 241, 0.15) 0%, rgba(3, 3, 5, 0) 70%)',
        'gold-gradient': 'linear-gradient(135deg, #f3d068 0%, #d4af37 50%, #997517 100%)',
        'glass-gradient': 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)',
      }
    },
  },
  plugins: [],
}

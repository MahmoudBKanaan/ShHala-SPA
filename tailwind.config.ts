import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        shhala: {
          cream: '#F8F4ED',
          red: '#B03A2E',
          'red-hover': '#962F25',
          'red-light': '#D45A4E',
          green: '#2E5A3C',
          'green-dark': '#1F3D28',
          sage: '#7A9B7E',
          'sage-light': '#A8C4AB',
          gold: '#C9A227',
          brass: '#B8860B',
        },
      },
      fontFamily: {
        arabic: ['"GE DINAR ONE MEDIUM"', '"Shhala UI"', 'Tahoma', 'sans-serif'],
        'dinar-one': ['"GE DINAR ONE MEDIUM"', 'Tahoma', 'sans-serif'],
        english: ['"Girls Marks"', '"Shhala UI"', 'sans-serif'],
        display: ['"GE DINAR ONE MEDIUM"', '"Shhala UI"', 'Tahoma', 'sans-serif'],
        'home-arabic': ['"GE DINAR TWO MEDIUM"', '"GE DINAR ONE MEDIUM"', 'Tahoma', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 8px 32px rgba(46, 90, 60, 0.08)',
        card: '0 4px 20px rgba(0, 0, 0, 0.06)',
      },
      backgroundImage: {
        mountains: 'linear-gradient(180deg, transparent 40%, rgba(201, 162, 39, 0.08) 100%)',
      },
    },
  },
  plugins: [],
} satisfies Config;
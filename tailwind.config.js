/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primaryDark: '#0B100F',
        headerDark: '#070B0D',
        panelDark: '#131B18',
        lightBg: '#F5F1E8',
        cardBg: '#131B18',
        primaryText: '#F4F0E8',
        secondaryText: '#C3C7BD',
        lightText: '#9AA59C',
        borderSoft: '#2A3831',
        brandGreen: '#CBA65C',
        brandGreenHover: '#A98647',
        accentGold: '#E0C985',
      },
      boxShadow: {
        soft: '0 18px 45px rgba(203, 166, 92, 0.16)',
      },
    },
  },
  plugins: [],
};


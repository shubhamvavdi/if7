/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primaryDark: '#0A0F12',
        headerDark: '#070B0D',
        panelDark: '#101B1E',
        lightBg: '#F3F7F5',
        cardBg: '#101B1E',
        primaryText: '#EAF5F1',
        secondaryText: '#A7B8B2',
        lightText: '#7E8D88',
        borderSoft: '#1C2A2F',
        brandGreen: '#14D17A',
        brandGreenHover: '#0FAE66',
        accentGold: '#F4B400',
      },
      boxShadow: {
        soft: '0 18px 45px rgba(20, 209, 122, 0.15)',
      },
    },
  },
  plugins: [],
};


/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primaryDark: '#150305',
        headerDark: '#0D0203',
        panelDark: '#2A080C',
        lightBg: '#FFF8E8',
        cardBg: '#2A080C',
        primaryText: '#FFF4D6',
        secondaryText: '#D8C9B2',
        lightText: '#B49F8F',
        borderSoft: '#5B1A1D',
        brandGreen: '#A80F1B',
        brandGreenHover: '#760811',
        accentGold: '#F5C542',
      },
      boxShadow: {
        soft: '0 18px 45px rgba(168, 15, 27, 0.24)',
      },
    },
  },
  plugins: [],
};


/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        satisfy: ['Satisfy', 'cursive'],
      },
      keyframes: {
        fadeUp: {
          '0%': { transform: 'translateY(0)', opacity: '0' },
          '50%': { opacity: '1' },
          '100%': { transform: 'translateY(-900%)', opacity: '0' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 2s ease-in-out forwards infinite',
        fadeUp2: 'fadeUp 2.5s ease-in-out forwards infinite',
        fadeUp3: 'fadeUp 3s ease-in-out forwards infinite',

      },
    },
  },
  plugins: [],
}


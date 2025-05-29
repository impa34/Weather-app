export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        moveCloud: {
          '0%': { transform: 'translateX(-20%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        moveCloud: 'moveCloud 60s linear infinite',
      },
      fontFamily: {
        sans: ["Outfit"]
      }
    },
  },
  plugins: [],
  
}


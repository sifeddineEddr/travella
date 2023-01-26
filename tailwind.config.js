/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cyanBlue': '#078DF6',
        'darkBlue': '#1E272E',
        'softCyanBlue' : '#F2F9FF'
      },
    },
    screens : {
      'sm' : '480px',
      'md' : '820px',
      'lg' : '1024px',
    }
  },
  plugins: [],
}

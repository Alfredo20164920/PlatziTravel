/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{html,js}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        "LA": "url('https://github.com/platzi/PlatziTravel/blob/main/public/img/LA.jpg?raw=true')",
        "Bali": "url('https://github.com/platzi/PlatziTravel/blob/main/public/img/bali.jpg?raw=true')",
        "chicago": "url('https://github.com/platzi/PlatziTravel/blob/main/public/img/chicago.jpg?raw=true')",
        "europe": "url('https://github.com/platzi/PlatziTravel/blob/main/public/img/europe.jpg?raw=true')",
        "iceland": "url('https://github.com/platzi/PlatziTravel/blob/main/public/img/iceland.jpg?raw=true')",
        "miami": "url('https://github.com/platzi/PlatziTravel/blob/main/public/img/miami.jpg?raw=true')",
        "newyork": "url('https://github.com/platzi/PlatziTravel/blob/main/public/img/new_york.jpg?raw=true')",
        "norway": "url('https://github.com/platzi/PlatziTravel/blob/main/public/img/norway.jpg?raw=true')",
        "sanfrancisco": "url('https://github.com/platzi/PlatziTravel/blob/main/public/img/sanFrancisco.jpg?raw=true')",
        "sanfranciscodesktop": "url('https://github.com/platzi/PlatziTravel/blob/main/public/img/sanFranciscoDesktop.jpg?raw=true')",
        "seattle": "url('https://github.com/platzi/PlatziTravel/blob/main/public/img/seattle.jpg?raw=true')",
        "switzerland": "url('https://github.com/platzi/PlatziTravel/blob/main/public/img/switzerland.jpg?raw=true')",
        "sydney": "url('https://github.com/platzi/PlatziTravel/blob/main/public/img/sydney.jpg?raw=true')",
        "yosemite": "url('https://github.com/platzi/PlatziTravel/blob/main/public/img/yosemite.jpg?raw=true')",
      },
      backgroundColor: theme => ({
        ...theme('colors'),
        'primary': '#CC2D4A',
        'secondary': '#8FA206',
        'tertiary': '#61AEC9',
      }),
      textColor: theme => ({
        ...theme('colors'),
        'primary': '#CC2D4A',
        'secondary': '#8FA206',
        'tertiary': '#61AEC9',
      }),
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blue: {
          1: '#02295a',
          2: '#473dff',
          3: '#adbeff',
          4: '#bfe2fd',
        },
        red: '#ed3548',
        gray: {
          1: '#9699ab',
          2: '#d6d9e6',
        },
        white: {
          0: '#ffffff',
          1: '#f0f6ff',
          2: '#fafbff',
        }
      },
    },
  },
  plugins: [require("@tailwindcss/forms")]
}


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./{src,public}/**/*.{html,js,ts,jsx,tsx}", "./src/pages/*.tsx", "./src/components/*.tsx", {raw: '<div class=min-h-screen', extension: 'html' }],
  theme: {
    extend: {},
  },
  plugins: [],
}
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        glancyr: ['Glancyr', 'sans-serif'],
      },
      // minWidth: {
      //   '128': '32rem',
      // },
      // maxWidth: {
      //   '128': '32rem',
      // }
    }
  },
  plugins: []
};
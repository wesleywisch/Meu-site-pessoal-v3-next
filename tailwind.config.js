/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      roboto: ['var(--font-roboto)', 'sans-serif'],
    },
    extend: {
      backgroundImage: {
        'hero-image': "url('/imgs/hero-bg.jpg')",
      },
      fontFamily: {
        mono: ['var(--font-plex-mono)', 'monospace'],
      },
      boxShadow: {
        button: '0px 0px 68px 7px rgba(5, 150, 105, 0.4)',
      },
    },
  },
  plugins: [],
}

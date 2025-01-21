/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Onest:["Onest"]
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        bg: '#F5F8FA',
        button:'#3C5867',
        primary: '#263C48',
        secondary: '#5A6D75'
      },
      backgroundImage: {
        'hero-pattern': "url('/banner-bg.jpg')",
      }
    },
  },
  plugins: [],
};

import {nextui} from '@nextui-org/theme'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-ubuntu)", "var(--font-inter)"],
        mono: ["var(--font-fira)"]
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      layout: {
        colors: {
          primary: {
            DEFAULT: "#4D79FF",
            background: "#CCC"
          },  
        }
      },
      themes: {
        dark: {
          colors: {
            foreground: "#ffffff",
          }
        },
        light: {
          colors: {
            foreground: "#000000",
          }
        }
      }
    })
  ],
}

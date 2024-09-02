/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern1': "url('/bg1.svg')",
        'hero-pattern2': "url('/bg2.svg')",
        'hero-pattern3': "url('/bg3.svg')",
        'hero-pattern4': `repeating-linear-gradient(
                      90deg,
                      hsla(263, 82%, 28%, 0.04) 0,
                      hsla(263, 82%, 28%, 0.04) 1px,
                      transparent 1px,
                      transparent 96px
                    ),
                    repeating-linear-gradient(
                      0deg,
                      hsla(263, 82%, 28%, 0.04) 0,
                      hsla(263, 82%, 28%, 0.04) 1px,
                      transparent 1px,
                      transparent 96px
                    ),
                    repeating-linear-gradient(
                      0deg,
                      hsla(263, 82%, 28%, 0.02) 0,
                      hsla(263, 82%, 28%, 0.02) 1px,
                      transparent 1px,
                      transparent 24px
                    ),
                    repeating-linear-gradient(
                      90deg,
                      hsla(263, 82%, 28%, 0.02) 0,
                      hsla(263, 82%, 28%, 0.02) 1px,
                      transparent 1px,
                      transparent 24px
                    ),
                    linear-gradient(90deg, #FAD8F4, #BF98FF);`,
        'hero-pattern5': `repeating-linear-gradient(
                      90deg,
                      hsla(311, 77%, 91%, 0.02) 0,
                      hsla(311, 77%, 91%, 0.02) 1px,
                      transparent 1px,
                      transparent 96px
                    ),
                    repeating-linear-gradient(
                      0deg,
                      hsla(311, 77%, 91%, 0.02) 0,
                      hsla(311, 77%, 91%, 0.02) 1px,
                      transparent 1px,
                      transparent 96px
                    ),
                    repeating-linear-gradient(
                      0deg,
                      hsla(311, 77%, 91%, 0.08) 0,
                      hsla(311, 77%, 91%, 0.08) 1px,
                      transparent 1px,
                      transparent 24px
                    ),
                    repeating-linear-gradient(
                      90deg,
                      hsla(311, 77%, 91%, 0.08) 0,
                      hsla(311, 77%, 91%, 0.08) 1px,
                      transparent 1px,
                      transparent 24px
                    ),
                    linear-gradient(90deg, #3A0D84, #EB03FF);`,
      },
      animation: {
        text: 'text 5s ease infinite',
      },
      keyframes: {
        text: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center',
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center',
          },
        },
      },
    },
  }, daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#EB03FF",

          "secondary": "#3A0D84",

          "accent": "#FF0F9F",

          "neutral": "#141521",

          "base-100": "#FFF9FE",

          "info": "#3abff8",

          "success": "#36d399",

          "warning": "#fbbd23",

          "error": "#f87272",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        mono: ["Share Tech Mono", "monospace"],
      },
      colors: {
        matrix: "#00ff41",
        terminal: "#0a0a0a",
      },
      animation: {
        blink: "blink 1s step-end infinite",
        matrixFlow: "matrixFlow 20s linear infinite",
      },
      keyframes: {
        blink: {
          "50%": { opacity: "0" }
        },
        matrixFlow: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" }
        }
      }
    },
  },
  plugins: [],
}

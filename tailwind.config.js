module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.tsx", "./components/**/*.tsx"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        black: {
          100: "#0C0E12",
          90: "#191C21",
          80: "#343B43",
        },
      },
      borderColor: {
        black: {
          100: "#0C0E12",
          90: "#191C21",
          80: "#343B43",
        },
      },
      minHeight: {
        "1/4": "25%",
        "1/2": "50%",
      },
      backgroundImage: {
        waves: "url('/waves.svg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/line-clamp")],
};

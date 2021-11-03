module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: "#BB0D0D",
      primaryGradient: "#900F0F",
      secondary: "#F8F2DC",
      tertiary: "#000F08",
      white: "#FFFFFF",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
      },
      fontFamily: {
        header: "Akira",
        body: "Alef, sans-serif",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

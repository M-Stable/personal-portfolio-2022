module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: "#BB0D0D",
      primaryGradient: "#5C0A0A",
      secondary: "#F8F2DC",
      tertiary: "#000F08",
      white: "#FFFFFF",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "project-food": "url(./assets/images/food.jpg)",
        "project-music": "url(./assets/images/music.jpg)",
        "project-puzzle": "url(./assets/images/puzzle.jpg)",
        "project-budget": "url(./assets/images/budget.jpg)",
      },
      fontFamily: {
        header: "Akira",
        body: "Alef, sans-serif",
      },
      flexGrow: {
        0: 0,
        1: 1,
        2: 2,
      },
      gridTemplateRows: {
        // Simple 16 column grid
        landing: "2fr 1fr 1fr",
      },
    },
  },
  variants: {
    extend: {
      backdropFilter: ["hover"],
      backdropBrightness: ["hover"],
    },
  },
  plugins: [],
};

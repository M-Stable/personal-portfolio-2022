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
      backgroundSize: {
        "120%": "120%",
      },
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
      boxShadow: {
        card: "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;",
      },
    },
  },
  variants: {
    extend: {
      backdropFilter: ["hover"],
      backdropBrightness: ["hover"],
      backgroundSize: ["hover"],
    },
  },
  plugins: [],
};

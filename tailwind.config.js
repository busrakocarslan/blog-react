module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        primary: "#85A98F",
        primary_hover: "#5A6C57",
        dark: "#526D82",
        darker: "#27374D",
        blue: {
          950: "78B3CE",
        },
      },
      fontFamily: {
        pageFont: ["Hachi Maru Pop", "cursive"],
        blogFont: ["Edu AU VIC WA NT Pre", "cursive"],
      },
    },
  },
  plugins: [],
  darkMode: "selector",
};

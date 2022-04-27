module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        josefin: ["Josefin Sans", "sans-serif"],
      },
      backgroundImage: () => ({
        "moon-icon": "url('./images/icon-moon.svg')",
        "sun-icon": "url('./images/icon-sun.svg')",
        "check-icon": "url('./images/icon-check.svg')",
        "cross-icon": "url('./images/icon-cross.svg')",
        "dark-theme": "url('./images/bg-desktop-dark.jpg')",
        "light-theme": "url('./images/bg-desktop-light.jpg')",
      }),
      colors: {
        primary: "hsl(220, 98%, 61%)",
        "gradient-1": "hsl(192, 100%, 67%)",
        "gradient-2": "hsl(280, 87%, 65%)",
        very: {
          dark: {
            blue: "hsl(235, 21%, 11%)",
            "desaturated-blue": "hsl(235, 24%, 19%)",
            "grayish-blue": {
              100: "hsl(233, 14%, 35%)",
              200: "hsl(237, 14%, 26%)",
              300: "hsl(235, 19%, 35%)",
            },
          },
          light: {
            gray: "hsl(0, 0%, 98%)",
            "grayish-blue": "hsl(236, 33%, 92%)",
          },
        },
        dark: {
          "grayish-blue": {
            100: "hsl(234, 11%, 52%)",
            200: "hsl(236, 9%, 61%)",
          },
        },
        light: {
          "grayish-blue": {
            100: "hsl(234, 39%, 85%)",
            200: "hsl(233, 11%, 84%)",
          },
        },
      },
    },
  },
  plugins: [],
};

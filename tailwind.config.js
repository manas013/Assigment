module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        white: { A700_3f: "#ffffff3f", A700: "#ffffff" },
        blue: { A400: "#1877f2", A200: "#4285f4" },
        red: { 500: "#ea4335", 900: "#b70606" },
        light_green: { A700: "#78b509", A200: "#baef58", A200_3f: "#baef583f" },
        black: { "900_3f": "#0000003f", "900_cc": "#000000cc" },
        yellow: {
          400: "#ffe15d",
          "400_cc": "#ffe15dcc",
          "400_99": "#ffe15d99",
        },
        green: { 600: "#34a853" },
        blue_gray: { 100: "#d9d9d9", 900: "#2c2c2c" },
        gray: {
          100: "#f4f4f4",
          300: "#e0ddd6",
          500: "#989898",
          700: "#545454",
          900: "#111111",
          "900_01": "#1e1e1e",
          "300_01": "#dbdbde",
          "700_01": "#5a5a5a",
        },
        amber: { 300: "#f3de53", 400: "#f9d326", 500: "#fbbc04" },
      },
      backgroundImage: {
        gradient: "linear-gradient(180deg ,#baef58,#78b509)",
        gradient1: "linear-gradient(180deg ,#f9d326,#545454)",
      },
      fontFamily: {
        opensans: "Open Sans",
        oswald: "Oswald",
        inter: "Inter",
        dmsans: "DM Sans",
        proximanova: "Proxima Nova",
        poppins: "Poppins",
        oxygen: "Oxygen",
        gothica: "Gothic A1",
      },
      textShadow: { ts: "0px 2px  4px #baef583f" },
      boxShadow: {
        bs: "0px 2px  7px 3px #ffffff3f",
        bs1: "0px 2px  15px 4px #0000003f",
      },
    },
  },
  plugins: [require("@tailwindcss/forms"), require("tailwindcss-textshadow")],
};

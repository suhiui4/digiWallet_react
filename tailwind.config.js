module.exports = {
  mode: "jit",
  content: ["./src/**/**/*.{js,ts,jsx,tsx,html,mdx}", "./src/**/*.{js,ts,jsx,tsx,html,mdx}"],
  darkMode: "class",
  theme: {
    screens: { md: { max: "1050px" }, sm: { max: "550px" } },
    extend: {
      colors: {
        gray: { 100: "#f4f6f9", 300: "#e3e4e8", 900: "#0a0f21", "100_03": "#f3f4f5", "100_04": "#f4f4f6" },
        white: { A700: "#ffffff" },
        blue_gray: { 400: "#888ea2", 900: "#182651" },
        indigo: { 700: "#2943a1", "600_01": "#314ca3" },
        green: { 600: "#359766" },
        red: { 700: "#d13329" },
      },
      boxShadow: { xs: "4px 4px  18px -2px #e6e3e7cc", sm: "0px 2px  5px 0px #00000019" },
      fontFamily: { inter: "Inter" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],

  boxShadow: {
    xxxl: "0 4px 30px rgba(0, 0, 0, 0)",
  },
  theme: {
    extend: {
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        xxl: "1536px",
      },
      fontFamily: {
        openSans: ["Open Sans", "sans-serif"],
      },
      colors: {
        slightblack: "#08090a",
        rosequartz: "#a7a2a9",
        seasalt: "#f4f7f5",
        davysgray: "#575a5e",
        eerieblack: "#222823",
      },
      darkSelector: "",
    },
  },
  plugins: [require("daisyui"), require("autoprefixer")],
  daisyui: {
    styled: true,
    themes: [
      {
        mytheme: {
          primary: "#a7a2a9",
          secondary: "#08090a",
          accent: "#f4f7f5",
          neutral: "#575a5e",
          info: "#222823",
        },
      },
    ],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
  },
} satisfies Config;

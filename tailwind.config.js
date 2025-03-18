/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: "#FF6F00",
        secondary: "E8E8E8",
        accent: "#FFDECF",
        dark: "#000000",
        light: "#252525",
      },
    },
  },
  plugins: [],
};

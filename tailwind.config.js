/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "custom-blue": "#1E40AF", // لون blue-700
        "custom-purple": "#A855F7", // لون purple-600
        "custom-light-blue": "#60A5FA", // لون blue-400
      },
      backgroundImage: {
        mycolor: "linear-gradient(to bottom left, #1E40AF, #A855F7, #60A5FA)",
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', "monospace"],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["dark", "light"], // إضافة إعدادات الثيمات هنا
  },
};

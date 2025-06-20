/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // يمكنك الاحتفاظ بـ accent-cyan هنا إذا كنت تريده أن يكون نفس اللون بغض النظر عن الثيم
        // وإلا، يمكنك تعريفه ضمن DaisyUI Themes أيضًا إذا أردت أن يتغير مع الثيم.
        "accent-cyan-static": "#64FFDA", // لون تمييز ثابت (غير مرتبط بالثيم)
      },
      backgroundImage: {
        // هذا التدرج يمكن أن يبقى هنا إذا كنت تريده ثابتًا.
        // إذا أردت تدرجًا يتغير مع الثيم، سيكون أكثر تعقيدًا ويتطلب استخدام CSS variables.
        "navy-gradient-bg":
          "linear-gradient(to right bottom, #0A192F, #112240, #64FFDA)",
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', "monospace"],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    // هنا نعرف الثيمات
    themes: [
      {
        // ***** ثيمك الداكن المخصص *****
        "my-dark-theme": {
          primary: "#64FFDA", // لون أساسي للأزرار والعناصر البارزة
          secondary: "#112240", // لون ثانوي (أغمق قليلاً من الأساسي، للعناصر البارزة)
          accent: "#64FFDA", // لون تمييز (يمكن أن يكون نفس الـ primary)
          neutral: "#0A192F", // لون محايد (يمكن أن يكون نفس لون الخلفية)
          "base-100": "#0A192F", // **لون الخلفية الأساسي للوضع الداكن (كحلي غامق)**
          "base-200": "#112240", // لون أفتح قليلاً من base-100 (للفروقات البسيطة في الخلفية)
          "base-300": "#1E2A47", // لون أفتح أكثر (إذا احتجت له)
          "base-content": "#CCD6F6", // لون النص على الخلفيات الداكنة (فاتح)
          info: "#60A5FA",
          success: "#36D399",
          warning: "#FBBD23",
          error: "#F87272",
        },
      },
      // ***** الثيم الفاتح الافتراضي أو المخصص *****
      {
        light: {
          // هذه هي الألوان الافتراضية لـ DaisyUI light theme،
          // أو يمكنك تخصيصها هنا لتناسب ذوقك للوضع الفاتح
          primary: "#1d4ed8",
          secondary: "#a78bfa",
          accent: "#2dd4bf",
          neutral: "#f3f4f6",
          "base-100": "#FFFFFF", // **لون الخلفية الأساسي للوضع الفاتح (أبيض)**
          "base-200": "#F9FAFB",
          "base-300": "#E5E7EB",
          "base-content": "#1F2937", // لون النص على الخلفيات الفاتحة (داكن)
          info: "#3abff8",
          success: "#36d399",
          warning: "#fbbd23",
          error: "#ef4444",
        },
      },
      // لا تضع "dark" هنا إذا كنت تريد استخدام "my-dark-theme"
    ],
    // حدد الثيم الداكن الافتراضي الخاص بك
    darkTheme: "my-dark-theme",
  },
};

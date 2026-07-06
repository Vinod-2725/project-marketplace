/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        primary: "#2563EB",
        secondary: "#1E293B",
        background: "#F8FAFC",
        accent: "#0EA5E9",
        success: "#10B981",
        danger: "#EF4444",
      },

      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },

      boxShadow: {
        card: "0 10px 25px rgba(0,0,0,0.08)",
      },

      borderRadius: {
        xl2: "20px",
      },
    },
  },

  plugins: [],
};
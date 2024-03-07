/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        // Grays
        silver: "#adadadff",
        "light-silver": "#d4d4d4ff",
        charcoal: "#435269ff",
        slate: "#64748b",
        "blue-gray": "#718096",
        // Blues
        sky: "#56b4e9",
        midnight: "#0c4a6e",
        "royal-blue": "#0a4c8dff",
        navy: "#0a4c8dff",
        // Reds
        crimson: "#dc2626",
        "blood-red": "#5f0000ff",
        cinereous: "#8a736bff",
        "persian-red": "#d14136ff",
      },
    },
  },
  plugins: [],
};

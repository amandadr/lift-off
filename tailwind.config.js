/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

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
        "black-twilight": "#000914",
        // Blues
        sky: "#56b4e9",
        midnight: "#0c4a6e",
        "dark-midnight": "#001b3b",
        "royal-blue": "#0a4c8dff",
        navy: "#0a4c8dff",
        "dark-navy": "#0b0b31",
        // Greens
        "soft-green": "#65c788",
        forest: "#165e30",
        "midnight-green": "#0b4228",
        // Reds
        crimson: "#dc2626",
        "blood-red": "#990000",
        "candy-apple": "#a40000",
        cinereous: "#8a736bff",
        "persian-red": "#d14136ff",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".scrollbar-hide": {
          /* IE and Edge */
          "-ms-overflow-style": "none",

          /* Firefox */
          "scrollbar-width": "none",

          /* Safari and Chrome */
          "&::-webkit-scrollbar": {
            display: "none",
          },
        },
      });
    }),
  ],
};

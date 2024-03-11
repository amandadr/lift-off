/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      backgroundImage: {
        goku: "url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b61a00ce-99a5-4b30-be86-e7bdf7d9e8ad/dg4puho-fa2f276c-885f-4d4e-8806-5bba041461e4.jpg/v1/fit/w_720,h_899,q_70,strp/body_builder_college_boy_by_skillsclub_dg4puho-375w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9ODk5IiwicGF0aCI6IlwvZlwvYjYxYTAwY2UtOTlhNS00YjMwLWJlODYtZTdiZGY3ZDllOGFkXC9kZzRwdWhvLWZhMmYyNzZjLTg4NWYtNGQ0ZS04ODA2LTViYmEwNDE0NjFlNC5qcGciLCJ3aWR0aCI6Ijw9NzIwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.AUwa1bgFFRJC-SdXIWtt_xcF2kJj1CYvVCdTN6aFVXc')",
      },
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
        // Purples
        "light-purple": "#9f5f91",
        "dark-purple": "#572c57",
        // Yellows
        "light-yellow": "#f6ea98",
        gold: "#ffc85b",
        // Greens
        "soft-green": "#65c788",
        forest: "#165e30",
        "midnight-green": "#0b4228",
        // Reds
        "dark-red": "#551D1E",
        "soft-red": "#7B292A",
        "light-red": "#A33437",
        "blood-red": "#990000",
        "candy-apple": "#a40000",
        // Orangey-Reds
        crimson: "#dc2626",
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
        ".h1-shadow": { "text-shadow": "2px 2px 2px #000914" },
      });
    }),
  ],
};

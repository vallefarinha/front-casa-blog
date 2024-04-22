/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        bgQuote: "url(./src/assets/images/bgQuote.png)",
        bgQuotePink: "url(./src/assets/images/bgQuotePink.png)",
        bgPinkPetra1: "url(./src/assets/images/pinkRectangle1.png)",
        bgPinkPetra2: "url(./src/assets/images/pinkRectangle2.png)",
        bgPinkPetra3: "url(./src/assets/images/pinkRectangle3.png)",
        bgPinkPetra4: "url(./src/assets/images/pinkRectangle4.png)",
        bgHelp: "url(./src/assets/images/bannerColabora.png)",

      },
      boxShadow: {
        xl: "5px 5px 5px rgba(0, 0, 0, 0.3)",
      },
      colors: {

        'LetterColor' : '#073B4C', 
        'primaryColor' : '#EF476F', 
        'secondaryColor' : '#FFCF5E',
        'tertiaryColor' : '#06D6A0', 
        'quarteryColor' : '#118AB2',
        'bgColor': '#FAFAFA',
        'bgColorWithOpacity': 'rgba(250, 250, 250, 0.5)'
      },
      fontFamily: {
        poppinsBlack: ["Poppins-Black", "sans-serif"],
        poppinsExtraBold: ["Poppins-ExtraBold", "sans-serif"],
        poppinsBold: ["Poppins-Bold", "sans-serif"],
        poppinsSemiBold: ["Poppins-SemiBold", "sans-serif"],
        poppinsMedium: ["Poppins-Medium", "sans-serif"],
        poppinsRegular: ["Poppins-Regular", "sans-serif"],
        poppinsMediumItalic: ["Poppins-MediumItalic", "sans-serif"],
        poppinsSemiBoldItalic: ["Poppins-SemiBoldItalic", "sans-serif"],
      },
      screens: {
        'sm': '375px',
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};

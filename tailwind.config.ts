import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      lineHeight: {
        'custom': '81.98px', // Define a custom line height
      },
      letterSpacing: {
        '1-5': '1.5%', // Custom letter spacing value
        '2': '2%', // Custom letter spacing value
      },
      colors: {
        productBg: '#f1f0ff', // Add your custom background color
        heading: "#151875",
      },
      screens: {
        'user-4k': '3840px',        // 4K Ultra HD screens
        'user-2k': '2560px',        // 2K or WQHD screens
        'user-xl': '1920px',        // Large desktops
        'user-lg': '1440px',        // Standard desktops/laptops
        'user-md': '1024px',        // Tablets in landscape
        'user-sm': '768px',         // Tablets in portrait
        'user-xs': '640px',         // Large mobile screens
        'user-mobile': '480px',     // Medium mobile screens
        'user-mobile-sm': '360px',  // Small mobile screens
        'user-mobile-xsm': '320px',  // Small mobile screens
      },
    },
  },
  plugins: [],
};
export default config;

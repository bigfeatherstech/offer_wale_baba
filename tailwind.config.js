// /** @type {import('tailwindcss').Config} */
// export default {
//     content: [
//         "./index.html",
//         "./src/**/*.{js,ts,jsx,tsx}",
//     ],
//     theme: {
//         extend: {
//             colors: {
//                 // primary: {
//                 //     DEFAULT: '#0a1128', 
//                 //     light: '#1a2a4e',
//                 // },
//                 secondary: {
//                     DEFAULT: '#e31e24', 
//                     hover: '#c2181d',
//                 },
//                 // accent: '#09cdff', 

//                  tertiory:{
//             DEFAULT: "#f7a221",
//              hover: "#f7a221",
       
//           dark: "#B38600",
//           light: "#E6C35C",
//           },
//             },
         
//        greyish:{
//         DEFAULT:"#7f7f7f"
//        }
//         },
//     },
//     plugins: [],
// }













/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["Inter", "system-ui", "sans-serif"],
      },
      colors: {
        primary: "#0a1128",
        "primary-light": "#1a2a4e",
        secondary: "#e31e24",
        "secondary-hover": "#c2181d",
        accent: "#09cdff",
      },
    },
  },
  plugins: [],
};

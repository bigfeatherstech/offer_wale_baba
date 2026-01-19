/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#0a1128', // Navy Blue
                    light: '#1a2a4e',
                },
                secondary: {
                    DEFAULT: '#e31e24', // Red
                    hover: '#c2181d',
                },
                accent: '#09cdff', // Cyan/Aqua
            },
            fontFamily: {
                sans: ['Poppins', 'sans-serif'],
            },
        },
    },
    plugins: [],
}

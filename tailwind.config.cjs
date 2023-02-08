/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: {
                    300: "#a37502",
                    400: "#f0c760",
                    500: "#fdba12",
                    600: "#d49904",
                    700: "#9e7203",
                },
            },
            fontFamily: {
            },
            backgroundImage: {
            },
        },
    },
    plugins: [],
};

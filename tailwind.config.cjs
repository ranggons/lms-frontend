/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                primary: {
                    100: "#F9E6E7",
                    300: "#FF5B6C",
                    500: "#E21D26",
                    700: "#9D0007",
                },
                general: {
                    100: "#E6E7EB",
                    300: "#9DA2AD",
                    500: "#374151",
                    700: "#1F2937",
                }
            },
            margin: {
                15: "3.75rem"
            },
            fontFamily: {
                "Poppins": ["Poppins"]
            },
            backgroundImage: {
            },
        },
    },
    plugins: [],
};

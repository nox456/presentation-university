/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/index.html","./src/app.js"],
    theme: {
        extend: {
            gridTemplateColumns: {
                '13': 'repeat(13,minmax(0,1fr))'
            }
        },
        screens: {
            sm: { max: "640px" },
            md: { max: "768px" },
            lg: { max: "1024px" },
            xl: { max: "1280px" },
        },
    },
    plugins: [],
};

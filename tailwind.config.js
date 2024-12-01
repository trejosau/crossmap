/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                "basic-sans": ["Basic Sans", "sans-serif"],
            },
            colors: {
                "azul-bg-principal-1": "#0f1430",
                "azul-bg-principal-2": "#272066",
                "azul-bg-secundario-1": "#161d48",
                "azul-bg-secundario-2": "#13193f",
                inputs: "#1e2d56",
                "texto-azul": "#029ee5",
                "dorado-detalle": "#d6a81e",
            },
        },
    },

    plugins: ["prettier-plugin-tailwindcss"],
};

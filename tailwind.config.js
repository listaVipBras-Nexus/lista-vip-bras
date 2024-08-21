/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{js,jsx}"],
    theme: {
        extend: {
            colors: {
                nbOrangePrimary: "#FA8400",
                nbOrangeSecundary: "#79450B",
                nbBlackPrimary: "#1B1A1A",
                nbBlackSecundary: "#292929",
                nbBlackTertiary: "#333333",
                nbGreenPrimary: "#14E52C",
            },
            screens: {
                s380: "380px",
                s480: "480px",
                s580: "580px",
                s680: "680px",
                s780: "780px",
                s880: "880px",
                s980: "980px",
                s1080: "1080px",
                s1180: "1180px",
                s1280: "1280px",
                s1380: "1380px",
                s1480: "1480px",
                s1580: "1580px",
                s1680: "1680px",
                s1780: "1780px",
                s1880: "1880px",
                s1920: "1920px",
            },

            fontFamily: {
                sans: ["Roboto", "sans-serif"],
            },

            backgroundImage: {
                "nb-gradient":
                    "linear-gradient(to bottom, #1B1A1A 60%,  #79450b  150%)",
                "nb-gradientSecundary":
                    "linear-gradient(to bottom, #1B1A1A 60%,  #79450b  250%)",
            },
            spacing: {
                marginPersonalizada: "17.6rem",
                mgPersonalizada: "3.25rem",
                mgnovoPersonalizada: "40rem",
                100: "420px",
            },

            fontSize: {
                tamanhoTeste: "0.6rem",
                tamanhoTitulo: "2rem",
                fonteDescricao: "1rem",
            },

            maxWidth: {
                "nb-352": "352px",
            },

            scale: {
                102: "1.02",
            },
        },
    },
    plugins: [],
};

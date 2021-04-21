import Typography from "typography"
import "../styles/global.css"

const typography = new Typography({
    baseFontSize: `22px`,
    baseLineHeight: 2,
    headerFontFamily: [
        "Inconsolata",
        "sans-serif"
    ],
    bodyFontFamily: ["Inconsolata", "sans-serif"],
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
    typography.injectStyles();
}

export default typography;
export const rhythm = typography.rhythm;
export const scale = typography.scale;
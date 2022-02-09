import Typography from "typography"
import "../styles/global.css"

const typography = new Typography({
    baseFontSize: `22px`,
    baseLineHeight: 1.5
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
    typography.injectStyles();
}

export default typography;
export const rhythm = typography.rhythm;
export const scale = typography.scale;
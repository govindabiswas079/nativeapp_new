import { colors } from "./colors";

const fontWeight = {
    100: "Roboto-Thin",
    300: "Roboto-Light",
    400: "Roboto-Regular",
    500: "Roboto-Medium",
    700: "Roboto-Bold",
    900: "Roboto-Black",
}

export const FontStyle = (color = colors?.common?.black, fontSize = 14, fontFamily = 400) => {
    return {
        color: color,
        fontSize: fontSize,
        fontFamily: fontWeight[fontFamily]
    }
}
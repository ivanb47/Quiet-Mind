import {
  darkColors,
  lightColors,
  createTheme,
  ThemeProvider,
} from "@rneui/themed";

export const theme = createTheme({
  lightColors: {
    ...lightColors,
    background: "#fdfefc",
    primary: "#134d6e",
    secondary: "#9a586f",
    tertiary: "#1c6c8a",
    cardColor: "#fff",
    bgGradientStart: "#e8f7ff",
    bgGradientEnd: "#ffe8f0",
    modalDescription:"#C3F8FF"
  },
  darkColors: {
    ...darkColors,
    background: "#111",
    primary: "#fdfefc",
    secondary: "#9a586f",
    tertiary: "#1c6c8a",
    cardColor: "#1c1c1c",
    bgGradientStart: "#040f14",
    bgGradientEnd: "#211015",
    modalBottom:"#00ABB3"
  },
});

export const globalStyles = {
  fontSet: {
    largeTitle: 34,
    title1: 28,
    title2: 22,
    title3: 20,
    headline: 17,
    body: 17,
    callout: 16,
    subhead: 15,
    footnote: 13,
    caption1: 12,
    caption2: 11,
  },
};

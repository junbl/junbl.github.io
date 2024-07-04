import { createTheme } from "@mui/material/styles";

export const colors = {
    pink: "#F48FB1",
    blue: "#75ade6",
    white: "#e8e8e8",
    purple: "#bf94e6",
    red: "#ff6673",
    yellow: "#ffc966",
    cyan: "#87DFEB",
    green: "#a9d274",
    orange: "#fc9569",
    teal: "#18E3C8",
    black: "#1D1F28"
};

export const darkTheme = createTheme({
    typography: {
        fontSize: 14,
    },
    palette: {
        mode: "dark",
        background: {
            default: "#262626",
        },
        text: {
            primary: colors.white,
        },
        primary: {
            main: colors.blue,
            light: colors.white,
            // contrastText: colors.white,
        },
        secondary: {
            main: colors.purple,
        },
        error: {
            main: colors.red,
        },
        warning: {
            main: colors.yellow,
        },
        info: {
            main: colors.cyan,
        },
        success: {
            main: colors.green,
        },
    },
});

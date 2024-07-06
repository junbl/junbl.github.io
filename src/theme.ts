import { createTheme } from "@mui/material/styles";

export const colors = {
    red: "#ff6673",
    orange: "#fc9569",
    yellow: "#ffc966",
    green: "#a9d274",
    teal: "#18E3C8",
    cyan: "#87DFEB",
    blue: "#75ade6",
    purple: "#bf94e6",
    pink: "#F48FB1",
    white: "#e8e8e8",
    lightGray: "#a2a3a6",
    gray: "#424346",
    darkGray: "#262626",
    black: "#1D1F28",
};

export const darkTheme = createTheme({
    typography: {
        fontSize: 14,
    },
    palette: {
        mode: "dark",
        background: {
            default: colors.darkGray,
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

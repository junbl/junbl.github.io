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
    darkWhite: "#b4b4cf",
    lightGray: "#a2a3c6",
    gray: "#424356",
    // darkGray: "#262626",
    darkGray: "#1a1d23",
    // black: "#1D1F28",
    black: "#111317",

};

export const darkTheme = createTheme({
    shape: {
        borderRadius: 16,
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: ({ownerState}) => ({
                    borderRadius: ownerState.size === 'large' ? 36 : 24,
                    ...(ownerState.size === 'large' && {  
                    paddingLeft: "24px",
                    paddingRight: "24px",
          })
                }),
            },
        },
    },
    typography: {
        fontFamily: `"Averia Serif Libre", "Hanken Grotesk", sans-serif`,
        fontSize: 14,
    },
    palette: {
        mode: "dark",
        background: {
            default: colors.darkGray,
            paper: colors.darkGray,
        },
        text: {
            primary: colors.white,
        },
        primary: {
            main: colors.purple,
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

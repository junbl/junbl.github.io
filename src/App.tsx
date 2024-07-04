import { lazy } from "react";
import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Home = lazy(() => import("./Home"));
const GrimwildHome = lazy(() => import("./dice/Home"));
const GmCrucible = lazy(() => import("./dice/GmCrucible"));
const SpellCrucible = lazy(() => import("./dice/SpellCrucible"));

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

const darkTheme = createTheme({
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

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/dice",
        element: <GrimwildHome />,
    },
    {
        path: "/dice/gmcrucible",
        element: <GmCrucible />,
    },
    {
        path: "/dice/spellcrucible",
        element: <SpellCrucible />,
    },
]);

export default function App() {
    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            {/* <Header/> */}
            <RouterProvider router={router} />
        </ThemeProvider>
    );
}

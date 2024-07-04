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
            primary: "#e8e8e8",
        },
        primary: {
            main: "#75ade6",
            light: "#e8e8e8",
        },
        secondary: {
            main: "#bf94e6",
        },
        error: {
            main: "#ff6673",
        },
        warning: {
            main: "#ffc966",
        },
        info: {
            main: "#24D1E7",
        },
        success: {
            main: "#a9d274",
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

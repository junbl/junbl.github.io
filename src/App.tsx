import { lazy } from "react";
import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { darkTheme } from "./theme";

const Home = lazy(() => import("./home/Home"));
const GrimwildHome = lazy(() => import("./dice/Home"));
const GmCrucible = lazy(() => import("./dice/GmCrucible"));
const SpellCrucible = lazy(() => import("./dice/SpellCrucible"));

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

import { lazy } from "react";
import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { darkTheme } from "./theme";

const Home = lazy(() => import("./home/Home"));
const GrimwildHome = lazy(() => import("./dice/Home"));
const GmCrucible = lazy(() => import("./dice/crucible/GmCrucible"));
const SpellCrucible = lazy(() => import("./dice/crucible/SpellCrucible"));
const RollsWithThornsAnalysis = lazy(() => import("./dice/analysis/RollsWithThornsAnalysis"));
const DiminishingPoolsAnalysis = lazy(() => import("./dice/analysis/DiminishingPoolsAnalysis"));

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
    {
        path: "/dice/analysis/rollswiththorns",
        element: <RollsWithThornsAnalysis />,
    },
    {
        path: "/dice/analysis/diminishingpools",
        element: <DiminishingPoolsAnalysis />,
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

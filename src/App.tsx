import { lazy } from "react";
import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { createBrowserRouter, redirect, RouterProvider } from "react-router-dom";
import { darkTheme } from "./theme";

const Home = lazy(() => import("./home/Home"));
const GrimwildHome = lazy(() => import("./dice/Home"));
const GmCrucible = lazy(() => import("./dice/crucible/Gm"));
const SpellCrucible = lazy(() => import("./dice/crucible/Spell"));
const HeritageCrucible = lazy(() => import("./dice/crucible/Heritage"));
const PatronCrucible = lazy(() => import("./dice/crucible/Patron"));
const WeaponOriginCrucible = lazy(() => import("./dice/crucible/WeaponOrigin"));
const HerbalismCrucible = lazy(() => import("./dice/crucible/Herbalism"));
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
        loader: async () => redirect("/dice/crucible/gm"),
    },
    {
        path: "/dice/spellcrucible",
        loader: async () => redirect("/dice/crucible/spell"),
    },
    {
        path: "/dice/crucible/gm",
        element: <GmCrucible />,
    },
    {
        path: "/dice/crucible/spell",
        element: <SpellCrucible />,
    },
    {
        path: "/dice/crucible/heritage",
        element: <HeritageCrucible />,
    },
    {
        path: "/dice/crucible/patron",
        element: <PatronCrucible />,
    },
    {
        path: "/dice/crucible/weaponorigin",
        element: <WeaponOriginCrucible />,
    },
    {
        path: "/dice/crucible/herbalism",
        element: <HerbalismCrucible />,
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

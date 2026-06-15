import { lazy } from "react";
import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { createBrowserRouter, RouterProvider } from "react-router";
import { darkTheme } from "./theme";
import cruciblesList from "./static/d66/crucibles.json";

const Home = lazy(() => import("./home/Home"));
const GrimwildHome = lazy(() => import("./dice/Home"));
const RollsWithThornsAnalysis = lazy(() => import("./dice/analysis/RollsWithThornsAnalysis"));
const DiminishingPoolsAnalysis = lazy(() => import("./dice/analysis/DiminishingPoolsAnalysis"));

const crucibleRoute = (name: string) => {
    const routeName = name.toLocaleLowerCase();
    const Target = lazy(() => import(`./dice/crucible/${name}`));
    return {
        path: `/dice/crucible/${routeName}`,
        element: <Target />,
    }
}

const crucibleRoutes = [
    "Gm",
    "Spell",
    "Barriers",
    "Settlements",
    "Sites",
    "Dangers",
    "Curiosities",
    "Buildings",
    "DruidicTells",
    "MartialArts",
    "WildSurge",
    "Heritage",
    "Patron",
    "WeaponOrigin",
    "Herbalism",
    "AmericanNames",
    "BardInstrument",
    "DistinctiveFeatures",
    "SettlementNames",
    "ArcanaArcane",
    "ArcanaDivine",
    "ArcanaEldritch",
    "ArcanaPrimal",
    "ArcanaTech",
    "Wises",
    "WordsOfPower",
    "Personality",
    "Potions",
    "BygoneArtifacts",
    "WeaponStyles",
    "Anchors",
    "AnchorsIntangible",
    "AnchorsTangible",
    "Treasure",
].map(crucibleRoute);

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/dice",
        element: <GrimwildHome />,
    },
    ...crucibleRoutes,
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
            <StaticDataLoader />
            <RouterProvider router={router} />
        </ThemeProvider>
    );
}

function StaticDataLoader() {

    return (
        <>
            {cruciblesList.map((file) => {
                <link rel={file.replace(/\.json$/, "")} href={`%PUBLIC_URL%/crucibles/${file}`} />;
            })}
        </>
    );
}

import { lazy } from "react";
import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { createBrowserRouter, RouterProvider } from "react-router";
import { darkTheme } from "./theme";
import cruciblesList from "./static/d66/crucibles.json";

const Home = lazy(() => import("./home/Home"));
const GrimwildHome = lazy(() => import("./dice/Home"));
const GmCrucible = lazy(() => import("./dice/crucible/Gm"));
const SpellCrucible = lazy(() => import("./dice/crucible/Spell"));
const BarriersCrucible = lazy(() => import("./dice/crucible/Barriers"));
const SettlementsCrucible = lazy(() => import("./dice/crucible/Settlements"));
const SitesCrucible = lazy(() => import("./dice/crucible/Sites"));
const DangersCrucible = lazy(() => import("./dice/crucible/Dangers"));
const CuriositiesCrucible = lazy(() => import("./dice/crucible/Curiosities"));
const BuildingsCrucible = lazy(() => import("./dice/crucible/Buildings"));
const DruidicTellsCrucible = lazy(() => import("./dice/crucible/DruidicTells"));
const MartialArtsCrucible = lazy(() => import("./dice/crucible/MartialArts"));
const WildSurgeCrucible = lazy(() => import("./dice/crucible/WildSurge"));
const HeritageCrucible = lazy(() => import("./dice/crucible/Heritage"));
const PatronCrucible = lazy(() => import("./dice/crucible/Patron"));
const WeaponOriginCrucible = lazy(() => import("./dice/crucible/WeaponOrigin"));
const HerbalismCrucible = lazy(() => import("./dice/crucible/Herbalism"));
const AmericanNamesCrucible = lazy(() => import("./dice/crucible/AmericanNames"));
const BardInstrumentCrucible = lazy(() => import("./dice/crucible/BardInstrument"));
const DistinctiveFeaturesCrucible = lazy(() => import("./dice/crucible/DistinctiveFeatures"));
const SettlementNamesCrucible = lazy(() => import("./dice/crucible/SettlementNames"));
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
        path: "/dice/crucible/druidictells",
        element: <DruidicTellsCrucible />,
    },
    {
        path: "/dice/crucible/martialarts",
        element: <MartialArtsCrucible />,
    },
    {
        path: "/dice/crucible/wildsurge",
        element: <WildSurgeCrucible />,
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
        path: "/dice/crucible/barriers",
        element: <BarriersCrucible />,
    },
    {
        path: "/dice/crucible/settlements",
        element: <SettlementsCrucible />,
    },
    {
        path: "/dice/crucible/sites",
        element: <SitesCrucible />,
    },
    {
        path: "/dice/crucible/dangers",
        element: <DangersCrucible />,
    },
    {
        path: "/dice/crucible/curiosities",
        element: <CuriositiesCrucible />,
    },
    {
        path: "/dice/crucible/buildings",
        element: <BuildingsCrucible />,
    },
    {
        path: "/dice/crucible/bardinstrument",
        element: <BardInstrumentCrucible />,
    },
    {
        path: "/dice/crucible/distinctivefeatures",
        element: <DistinctiveFeaturesCrucible />,
    },
    {
        path: "/dice/crucible/settlementnames",
        element: <SettlementNamesCrucible />,
    },
    {
        path: "/dice/crucible/americannames",
        element: <AmericanNamesCrucible />,
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

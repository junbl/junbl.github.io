import { Divider } from "@mui/material";
import gm1 from "../../static/d66/gm1.json";
import gm2 from "../../static/d66/gm2.json";
import Crucible from "./Crucible";
import GrimwildFooter from "../GrimwildFooter";

export default function GmCrucible() {
    document.title = "GM Crucible";
    return (
        <>
            <h1 style={{ marginLeft: 20 }}>GM Crucible</h1>
            <Divider sx={{ marginBottom: 8 }} />
            <Crucible tables={[gm1, gm2]} />
            <GrimwildFooter />
        </>
    );
}

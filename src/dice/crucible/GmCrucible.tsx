import gm1 from "../../static/d66/gm1.json";
import gm2 from "../../static/d66/gm2.json";
import Crucible from "./Crucible";
import HeaderFooter from "../HeaderFooter";

export default function GmCrucible() {
    document.title = "GM Crucible";
    return (
        <HeaderFooter title="GM Crucible" back="/dice">
            <Crucible disableBackwards={true} tables={[gm1, gm2]} />
        </HeaderFooter>
    );
}

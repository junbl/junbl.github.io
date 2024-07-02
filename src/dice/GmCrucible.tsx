import gm1 from "../static/d66/gm1.json";
import gm2 from "../static/d66/gm2.json";
import Crucible from "./Crucible";

export default function GmCrucible({}) {
    document.title = "GM Crucible"
    return <Crucible tables={[gm1, gm2]}/>;
}

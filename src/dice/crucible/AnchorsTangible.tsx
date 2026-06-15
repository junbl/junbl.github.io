import table from "../../static/d66/anchors_tangible.json";
import Crucible from "./Crucible";
import HeaderFooter from "../HeaderFooter";

export default function RitualAnchorsTangible() {
    return (
        <HeaderFooter title="Ritual Anchors (Tangible)" back="/dice">
            <Crucible
                tables={[table, table, table]}
                n={3}
                enableSwap={false}
                enableOf={false}
                defaultOf={false}
                disableBackwards
                separator={", "}
            />
        </HeaderFooter>
    );
}

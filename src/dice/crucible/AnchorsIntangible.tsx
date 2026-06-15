import table from "../../static/d66/anchors_intangible.json";
import Crucible from "./Crucible";
import HeaderFooter from "../HeaderFooter";

export default function RitualAnchorsIntangible() {
    return (
        <HeaderFooter title="Ritual Anchors (Intangible)" back="/dice">
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

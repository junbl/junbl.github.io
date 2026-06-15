import table from "../../static/d66/anchors.json";
import Crucible from "./Crucible";
import HeaderFooter from "../HeaderFooter";

export default function RitualAnchors() {
    return (
        <HeaderFooter title="Ritual Anchors Crucible" back="/dice">
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

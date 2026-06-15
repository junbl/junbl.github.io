import table from "../../static/d66/arcana_arcane.json";
import techniques from "../../static/d66/techniques.json";
import Crucible, { AddlOption } from "./Crucible";
import HeaderFooter from "../HeaderFooter";

export default function ArcanaArcane() {
    return (
        <HeaderFooter title="Arcana Crucible (Arcane)" back="/dice">
            <Crucible
                tables={[table, table, table]}
                n={3}
                enableSwap={false}
                enableOf={false}
                defaultOf={false}
                disableBackwards
                separator={"—"}
                additionalOptions={techniques as AddlOption[]}
            />
        </HeaderFooter>
    );
}

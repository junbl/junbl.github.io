import table from "../../static/d66/arcana_eldritch.json";
import techniques from "../../static/d66/techniques.json";
import Crucible, { AddlOption } from "./Crucible";
import HeaderFooter from "../HeaderFooter";

export default function ArcanaEldritch() {
    return (
        <HeaderFooter title="Arcana Crucible (Eldritch)" back="/dice">
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

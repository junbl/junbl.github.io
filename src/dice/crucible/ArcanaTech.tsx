import table from "../../static/d66/arcana_tech.json";
import techniques from "../../static/d66/techniques.json";
import Crucible, { AddlOption } from "./Crucible";
import HeaderFooter from "../HeaderFooter";

export default function ArcanaTech() {
    return (
        <HeaderFooter title="Arcana Crucible (Tech)" back="/dice">
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

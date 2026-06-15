import data1 from "../../static/d66/bygone_artifact1.json";
import data2 from "../../static/d66/bygone_artifact2.json";
import techniques from "../../static/d66/techniques.json";
import Crucible, { AddlOption } from "./Crucible";
import HeaderFooter from "../HeaderFooter";

export default function BygoneArtifacts() {
    return (
        <HeaderFooter title="Bygone Artifacts Crucible" back="/dice">
            <Crucible
                tables={[data1, data2]}
                n={2}
                enableOf={false}
                enableSwap={false}
                disableBackwards={true}
                // separator={"—"}
                additionalOptions={techniques as AddlOption[]}
            />
        </HeaderFooter>
    );
}

import data1 from "../../static/d66/settlement1.json";
import data2 from "../../static/d66/settlement2.json";
import realities from "../../static/d66/realities.json";
import Crucible, { AddlOption } from "./Crucible";
import HeaderFooter from "../HeaderFooter";

export default function Settlements() {
    return (
        <HeaderFooter title="Settlements Crucible" back="/dice">
            <Crucible
                tables={[data1, data2]}
                disableBackwards={true}
                additionalOptions={realities as AddlOption[]}
            />
        </HeaderFooter>
    );
}

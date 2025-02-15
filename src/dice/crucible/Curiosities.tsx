import data1 from "../../static/d66/curiosities1.json";
import data2 from "../../static/d66/curiosities2.json";
import realities from "../../static/d66/realities.json";
import Crucible, { AddlOption } from "./Crucible";
import HeaderFooter from "../HeaderFooter";

export default function Curiosities() {
    return (
        <HeaderFooter title="Curiosities Crucible" back="/dice">
            <Crucible
                tables={[data1, data2]}
                disableBackwards={true}
                additionalOptions={realities as AddlOption[]}
            />
        </HeaderFooter>
    );
}

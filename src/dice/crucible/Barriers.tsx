import barrier1 from "../../static/d66/barrier1.json";
import barrier2 from "../../static/d66/barrier2.json";
import realities from "../../static/d66/realities.json";
import Crucible, { AddlOption } from "./Crucible";
import HeaderFooter from "../HeaderFooter";

export default function Barriers() {
    return (
        <HeaderFooter title="Barriers Crucible" back="/dice" >
            <Crucible
                disableBackwards={true}
                tables={[barrier1, barrier2]}
                additionalOptions={realities as AddlOption[]}
            />
        </HeaderFooter>
    );
}

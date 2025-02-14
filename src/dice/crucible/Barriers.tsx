import barrier1 from "../../static/d66/barrier1.json";
import barrier2 from "../../static/d66/barrier2.json";
import Crucible from "./Crucible";
import HeaderFooter from "../HeaderFooter";

export default function AmericanNames() {
    return (
        <HeaderFooter title="Barriers" back="/dice" >
            <Crucible
                disableBackwards={true}
                tables={[barrier1, barrier2]}
            />
        </HeaderFooter>
    );
}

import data1 from "../../static/d66/building1.json";
import data2 from "../../static/d66/building2.json";
import Crucible from "./Crucible";
import HeaderFooter from "../HeaderFooter";

export default function Buildings() {
    return (
        <HeaderFooter title="Buildings Crucible" back="/dice" >
            <Crucible
                disableBackwards={true}
                tables={[data1, data2]}
            />
        </HeaderFooter>
    );
}

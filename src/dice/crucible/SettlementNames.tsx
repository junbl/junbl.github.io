import data1 from "../../static/d66/city_names1.json";
import data2 from "../../static/d66/city_names2.json";
import Crucible from "./Crucible";
import HeaderFooter from "../HeaderFooter";

export default function SettlementNames() {
    return (
        <HeaderFooter title="Settlement Names" back="/dice" grimwild={false}>
            <Crucible
                disableBackwards={true}
                buttons={false}
                tables={[data1, data2]}
            />
        </HeaderFooter>
    );
}

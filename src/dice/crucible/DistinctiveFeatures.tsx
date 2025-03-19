import data1 from "../../static/d66/age.json";
import data2 from "../../static/d66/clothing.json";
import data3 from "../../static/d66/voice.json";
import data4 from "../../static/d66/body.json";
import data5 from "../../static/d66/eyes.json";
import Crucible from "./Crucible";
import HeaderFooter from "../HeaderFooter";

export default function DistinctiveFeatures() {
    return (
        <HeaderFooter title="Distinctive Features" back="/dice">
            <Crucible
                buttons={false}
                enableOf={false}
                separator=", "
                n={3}
                tables={[data1, data2, data3, data4, data5]}
                titles={["Age", "Clothing", "Voice", "Body", "Eyes"]}
            />
        </HeaderFooter>
    );
}

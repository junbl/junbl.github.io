import data1 from "../../static/d66/words_of_power1.json";
import data2 from "../../static/d66/words_of_power2.json";
import Crucible from "./Crucible";
import HeaderFooter from "../HeaderFooter";

export default function WordsOfPower() {
    return (
        <HeaderFooter title="Words of Power Crucible" back="/dice">
            <Crucible
                tables={[data1, data2]}
                enableOf={false} defaultOf={false} enableSwap={false}
                n={1}
                // titles={["Style", "Essence", "Form"]}
            />
        </HeaderFooter>
    );
}

import data1 from "../../static/d66/potion1.json";
import data2 from "../../static/d66/potion2.json";
import data3 from "../../static/d66/potion3.json";
import techniques from "../../static/d66/techniques.json";
import Crucible, { AddlOption } from "./Crucible";
import HeaderFooter from "../HeaderFooter";

export default function SpellCrucible() {
    return (
        <HeaderFooter title="Potions Crucible" back="/dice">
            <Crucible
                tables={[data1, data2, data3]}
                n={3}
                enableOf={false}
                enableSwap={false}
                disableBackwards={true}
                separator={"—"}
                additionalOptions={techniques as AddlOption[]}
            />
        </HeaderFooter>
    );
}

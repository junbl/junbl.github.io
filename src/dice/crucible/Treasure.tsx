import table from "../../static/d66/treasure.json";
import tiers from "../../static/d66/tiers.json";
import Crucible, {AddlOption} from "./Crucible";
import HeaderFooter from "../HeaderFooter";

export default function Treasure() {
    return (
        <HeaderFooter title="Treasure" back="/dice">
            <Crucible
                tables={[table]}
                n={1}
                enableOf={false}
                enableSwap={false}
                disableBackwards={true}
                additionalOptions={tiers as AddlOption[]}
            />
        </HeaderFooter>
    );
}

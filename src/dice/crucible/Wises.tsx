import table from "../../static/d66/wises.json";
import Crucible from "./Crucible";
import HeaderFooter from "../HeaderFooter";

export default function Wises() {
    return (
        <HeaderFooter title="Wises Crucible" back="/dice">
            <Crucible
                tables={[table,table,table]}
                n={3}
                disableBackwards={true}
                separator=", "
                enableSwap={false}
                enableOf={false}
                defaultOf={false}
            />
        </HeaderFooter>
    );
}

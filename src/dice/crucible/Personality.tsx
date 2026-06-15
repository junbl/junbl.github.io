import data from "../../static/d66/personality.json";
import Crucible from "./Crucible";
import HeaderFooter from "../HeaderFooter";

export default function Personality() {
    return (
        <HeaderFooter title="Personality Crucible" back="/dice">
            <Crucible
                separator=" and "

                n={3}
                enableOf={false}
                enableSwap={false}
                tables={[data, data]}
            />
        </HeaderFooter>
    );
}

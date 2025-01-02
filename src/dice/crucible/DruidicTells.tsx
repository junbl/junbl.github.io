import content from "../../static/d66/druid_tells.json";
import Crucible from "./Crucible";
import HeaderFooter from "../HeaderFooter";

export default function DruidicTells() {
    return (
        <HeaderFooter title="Druidic Tells Crucible" back="/dice">
            <Crucible tables={[content]} />
        </HeaderFooter>
    );
}

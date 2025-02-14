import wild_surge1 from "../../static/d66/wild_surge1.json";
import wild_surge2 from "../../static/d66/wild_surge2.json";
import Crucible from "./Crucible";
import HeaderFooter from "../HeaderFooter";

export default function WildSurge() {
    return (
        <HeaderFooter title="Wild Surge Crucible" back="/dice">
            <Crucible color="orange" tables={[wild_surge1, wild_surge2]} />
        </HeaderFooter>
    );
}

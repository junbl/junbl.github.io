import patronEntity from "../../static/d66/patron_entity.json";
import patronDesires from "../../static/d66/patron_desires.json";
import Crucible from "./Crucible";
import HeaderFooter from "../HeaderFooter";

export default function Patron() {
    return (
        <HeaderFooter title="Patron Crucible" back="/dice">
            <Crucible
                tables={[patronEntity, patronEntity, patronDesires, patronDesires]}
                defaultOf={true}
                separator={[[4, " and "]]}
                disableBackwards={true}
                ofPosition={2}
                n={4}
                titles={["Nature", "Nature", "Desires", "Desires"]}
            />
        </HeaderFooter>
    );
}

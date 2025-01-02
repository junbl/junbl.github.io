import concept from "../../static/d66/martial_arts_concept.json";
import stance from "../../static/d66/martial_arts_stance.json";
import weapon from "../../static/d66/martial_arts_weapon.json";
import Crucible from "./Crucible";
import HeaderFooter from "../HeaderFooter";

export default function MartialArtsCrucible() {
    return (
        <HeaderFooter title="Martial Arts Crucible" back="/dice">
            <Crucible
                n={3}
                tables={[concept, stance, weapon]}
                separator=", "
                titles={["Concepts", "Stances and Moves", "Weapons"]}
            />
        </HeaderFooter>
    );
}

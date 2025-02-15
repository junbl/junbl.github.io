import concept from "../../static/d66/martial_arts_concept.json";
import stance from "../../static/d66/martial_arts_stance.json";
import weapon from "../../static/d66/martial_arts_weapon.json";
import Crucible from "./Crucible";
import HeaderFooter from "../HeaderFooter";

export default function MartialArtsCrucible() {
    return (
        <HeaderFooter title="Martial Arts Crucible" back="/dice">
            <Crucible
                n={7}
                separator={[
                    [0, "Concepts: "],
                    [1, " and "],
                    [2, "\n\nStances and moves: "],
                    [3, ", "],
                    [4, ", and "],
                    [5, "\n\nWeapons: "],
                    [6, " and "],
                    [7, ""],
                ]}
                tables={[concept, concept, stance, stance, stance, weapon, weapon]}
                enableOf={false}
                disableBackwards={true}
                enableSwap={false}
                titles={[
                    "Concepts",
                    "Concepts",
                    "Stances and Moves",
                    "Stances and Moves",
                    "Stances and Moves",
                    "Weapons",
                    "Weapons",
                ]}
            />
        </HeaderFooter>
    );
}

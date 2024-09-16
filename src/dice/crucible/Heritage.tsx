import heritagePeople from "../../static/d66/heritage_people.json";
import heritageMood from "../../static/d66/heritage_mood.json";
import heritageLand from "../../static/d66/heritage_land.json";
import Crucible from "./Crucible";
import HeaderFooter from "../HeaderFooter";

export default function Heritage() {
    return (
        <HeaderFooter title="Heritage Crucible" back="/dice">
            <Crucible
                n={3}
                disableBackwards={true}
                defaultOf={true}
                defaultThe={true}
                enableSwap={false}
                tables={[heritagePeople, heritageMood, heritageLand]}
                titles={["People", "Mood", "Land"]}
            />
        </HeaderFooter>
    );
}

import data from "../../static/d66/weapon_styles.json";
import Crucible from "./Crucible";
import HeaderFooter from "../HeaderFooter";

export default function WeaponStyles() {
    return (
        <HeaderFooter title="Weapon Styles" back="/dice">
            <Crucible
                tables={[data, data]}
                n={2}
                enableOf={false}
                enableSwap={false}
                disableBackwards={true}
                separator={" and "}
            />
        </HeaderFooter>
    );
}

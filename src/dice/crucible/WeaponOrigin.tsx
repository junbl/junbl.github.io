import weaponOrigin from "../../static/d66/weapon_origin.json";
import Crucible from "./Crucible";
import HeaderFooter from "../HeaderFooter";

export default function WeaponOrigin() {
    return (
        <HeaderFooter title="Weapon Origin Crucible" back="/dice">
            <Crucible
                disableBackwards={true}
                enableOf={false}
                separator=" and "
                tables={[weaponOrigin, weaponOrigin]}
            />
        </HeaderFooter>
    );
}

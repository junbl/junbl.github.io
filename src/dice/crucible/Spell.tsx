import spellForm from "../../static/d66/spell_form.json";
import spellEssence from "../../static/d66/spell_essence.json";
import spellStyle from "../../static/d66/spell_style.json";
import schools from "../../static/d66/schools.json";
import Crucible, { AddlOption } from "./Crucible";
import HeaderFooter from "../HeaderFooter";

export default function SpellCrucible() {
    return (
        <HeaderFooter title="Spell Crucible" back="/dice">
            <Crucible
                tables={[spellStyle, spellEssence, spellForm]}
                titles={["Style", "Essence", "Form"]}
                additionalOptions={schools as AddlOption[]}
            />
        </HeaderFooter>
    );
}

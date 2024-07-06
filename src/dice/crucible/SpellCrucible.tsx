import spellForm from "../../static/d66/spell_form.json";
import spellMaterial from "../../static/d66/spell_material.json";
import spellStyle from "../../static/d66/spell_style.json";
import schools from "../../static/d66/schools.json";
import Crucible, { AddlOption } from "./Crucible";
import HeaderFooter from "../HeaderFooter";

export default function SpellCrucible() {
    return (
        <HeaderFooter title="Spell Crucible">
            <Crucible
                tables={[spellStyle, spellMaterial, spellForm]}
                titles={["Style", "Material", "Form"]}
                additionalOptions={schools as AddlOption[]}
            />
        </HeaderFooter>
    );
}

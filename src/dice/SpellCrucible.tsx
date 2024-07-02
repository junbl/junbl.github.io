import spellForm from "../static/d66/spell_form.json";
import spellMaterial from "../static/d66/spell_material.json";
import spellStyle from "../static/d66/spell_style.json";
import Crucible from "./Crucible";

export default function SpellCrucible({}) {
    document.title = "Spell Crucible";
    return <Crucible tables={[spellStyle, spellMaterial, spellForm]} />;
}

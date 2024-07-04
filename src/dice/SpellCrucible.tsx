import spellForm from "../static/d66/spell_form.json";
import spellMaterial from "../static/d66/spell_material.json";
import spellStyle from "../static/d66/spell_style.json";
import schools from "../static/d66/schools.json";
import Crucible, { AddlOption } from "./Crucible";
import GrimwildFooter from "./GrimwildFooter";
import { Divider } from "@mui/material";

export default function SpellCrucible() {
    document.title = "Spell Crucible";
    return (
        <>
            <h1>Spell Crucible</h1>
            <Divider sx={{ marginBottom: 8 }} />
            <Crucible
                tables={[spellStyle, spellMaterial, spellForm]}
                titles={["Style", "Material", "Form"]}
                additionalOptions={schools as AddlOption[]}
            />
            <GrimwildFooter />
        </>
    );
}

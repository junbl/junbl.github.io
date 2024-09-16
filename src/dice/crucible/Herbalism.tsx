import herbalismForm from "../../static/d66/herbalism_form.json";
import herbalismName from "../../static/d66/herbalism_name.json";
import Crucible from "./Crucible";
import HeaderFooter from "../HeaderFooter";

export default function Herbalism() {
    return (
        <HeaderFooter title="Herbalism Crucible" back="/dice" grimwild={false}>
            <Crucible
                tables={[herbalismName, herbalismForm]}
                oneWord={true}
                titles={["Name", "Form"]}
            />
        </HeaderFooter>
    );
}

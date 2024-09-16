import namesGiven from "../../static/d66/names_given.json";
import namesFamily from "../../static/d66/names_family.json";
import Crucible from "./Crucible";
import HeaderFooter from "../HeaderFooter";
import { colors } from "../../theme";

export default function AmericanNames() {
    return (
        <HeaderFooter title="American Names" back="/dice" grimwild={false}>
            <Crucible
                disableBackwards={true}
                buttons={false}
                color={colors.red}
                textColor={colors.white}
                tables={[namesGiven, namesFamily]}
                titles={["Given", "Family"]}
            />
        </HeaderFooter>
    );
}

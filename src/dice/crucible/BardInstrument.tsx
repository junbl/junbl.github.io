import content from "../../static/d66/bard_instrument.json";
import Crucible from "./Crucible";
import HeaderFooter from "../HeaderFooter";

export default function BardInstrument() {
    return (
        <HeaderFooter title="Bard Instrument" back="/dice">
            <Crucible tables={[content]} />
        </HeaderFooter>
    );
}

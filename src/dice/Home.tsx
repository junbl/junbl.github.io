import { Button, Grid, Divider, Collapse } from "@mui/material";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import CottageIcon from "@mui/icons-material/Cottage";
import ShieldMoonIcon from "@mui/icons-material/ShieldMoon";
import EscalatorWarningIcon from "@mui/icons-material/EscalatorWarning";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import PeopleIcon from "@mui/icons-material/People";
import SpaIcon from "@mui/icons-material/Spa";
import EmojiNatureIcon from "@mui/icons-material/EmojiNature";
import SportsMartialArtsIcon from "@mui/icons-material/SportsMartialArts";
import FlareIcon from "@mui/icons-material/Flare";
import BarChartIcon from "@mui/icons-material/BarChart";
import HeaderFooter from "./HeaderFooter";
import { colors } from "../theme";
import { PropsWithChildren, useState } from "react";

function SectionHeader({ title, top = false }: { title: string; top?: boolean }) {
    return (
        <>
            <div style={{ height: "100%", width: "100%", marginTop: top ? 0 : "100px" }}>
                <Divider sx={{ borderColor: colors.lightGray }} />
            </div>
            <h1 style={{ marginLeft: "100px", marginTop: "0px", color: colors.lightGray }}>
                {title}
            </h1>
        </>
    );
}
function Section({ title, children }: PropsWithChildren<{ title: string }>) {
    const [open, setOpen] = useState(false);
    return (
        <>
            <h2
                style={{ marginLeft: "125px", marginTop: "0px", color: colors.lightGray }}
                onClick={() => {
                    setOpen((o) => !o);
                }}
            >
                {title}
            </h2>
            <Collapse in={open}>
                <Grid container justifyContent="center">
                    {children}
                </Grid>
            </Collapse>
        </>
    );
}
export default function Home() {
    const ButtonItem = ({ title, to, Icon }: { title: string; to?: string; Icon: any }) => {
        if (to == undefined) {
            const name = title.toLocaleLowerCase().replaceAll(" ", "");
            to = `crucible/${name}`;
        }
        return (
            <Grid item xs={12}>
                <Button
                    href={"/dice/" + to}
                    size="large"
                    startIcon={<Icon />}
                    sx={{ marginLeft: "10vw", fontSize: "2rem" }}
                >
                    {title}
                </Button>
            </Grid>
        );
    };
    return (
        <HeaderFooter title="Dice tools">
            <SectionHeader title="CRUCIBLES" top={true} />
            <ButtonItem title="GM" Icon={TipsAndUpdatesIcon} to="crucible/gm" />
            <ButtonItem title="Heritage" Icon={CottageIcon} to="crucible/heritage" />
            <Section title="PATHS">
                <ButtonItem title="Spells" Icon={AutoFixHighIcon} to="crucible/spell" />
                <ButtonItem
                    title="Weapon Origin"
                    Icon={ShieldMoonIcon}
                    to="crucible/weaponorigin"
                />
                <ButtonItem
                    title="Warlock Patron"
                    Icon={EscalatorWarningIcon}
                    to="crucible/patron"
                />
                <ButtonItem
                    title="Druidic Tells"
                    Icon={EmojiNatureIcon}
                    to="crucible/druidictells"
                />
                <ButtonItem title="Herbalism" Icon={SpaIcon} to="crucible/herbalism" />
                <ButtonItem
                    title="Martial Arts"
                    Icon={SportsMartialArtsIcon}
                    to="crucible/martialarts"
                />
                <ButtonItem title="Wild Surge" Icon={FlareIcon} to="crucible/wildsurge" />
            </Section>
            <Section title="EXPLORATION">
                <ButtonItem title="Buildings" Icon={CottageIcon} />
                <ButtonItem title="Settlements" Icon={CottageIcon} />
                <ButtonItem title="Sites" Icon={CottageIcon} />
                <ButtonItem title="Dangers" Icon={CottageIcon} />
                <ButtonItem title="Curiosities" Icon={CottageIcon} />
            </Section>
            <ButtonItem title="American Names" Icon={PeopleIcon} to="crucible/americannames" />
            <SectionHeader title="ANALYSIS" />
            <Grid container justifyContent="center">
                <ButtonItem
                    title="Diminishing Pools"
                    Icon={BarChartIcon}
                    to="analysis/diminishingpools"
                />
                <ButtonItem
                    title="Rolls with Thorns"
                    Icon={BarChartIcon}
                    to="analysis/rollswiththorns"
                />
            </Grid>
        </HeaderFooter>
    );
}

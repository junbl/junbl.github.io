import { Button, Grid, Collapse, Typography } from "@mui/material";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import CottageIcon from "@mui/icons-material/Cottage";
import ShieldMoonIcon from "@mui/icons-material/ShieldMoon";
import RestaurantMenuIcon from '@mui/icons-material/RestaurantMenu';
import EscalatorWarningIcon from "@mui/icons-material/EscalatorWarning";
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import AssistantIcon from '@mui/icons-material/Assistant';
import PsychologyAltIcon from '@mui/icons-material/PsychologyAlt';
import ScienceIcon from '@mui/icons-material/Science';
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import PeopleIcon from "@mui/icons-material/People";
import SpaIcon from "@mui/icons-material/Spa";
import VisibilityIcon from '@mui/icons-material/Visibility';
import EmojiNatureIcon from "@mui/icons-material/EmojiNature";
import SportsMartialArtsIcon from "@mui/icons-material/SportsMartialArts";
import FlareIcon from "@mui/icons-material/Flare";
import { ReactComponent as Square } from "../static/square-svgrepo-com.svg";
import { ReactComponent as Diamond } from "../static/diamond-svgrepo-com.svg";
import { ReactComponent as Circle } from "../static/circle-svgrepo-com.svg";
import { ReactComponent as Asterisk } from "../static/asterisk-svgrepo-com.svg";
import { ReactComponent as Wall } from "../static/wall-fill-svgrepo-com.svg";
import BarChartIcon from "@mui/icons-material/BarChart";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import HeaderFooter from "./HeaderFooter";
import { colors } from "../theme";
import { PropsWithChildren, useState } from "react";

function SectionHeader({ title, top = false }: { title: string; top?: boolean }) {
    return (
        <>
            <div style={{ height: "100%", width: "100%", marginTop: top ? 0 : "100px" }}>
                {/* <Divider sx={{ borderColor: colors.darkGray }} /> */}
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
            <Typography
                variant="h5"
                sx={{
                    marginLeft: "95px",
                    marginRight: "95px",
                    marginBottom: "4px",
                    marginTop: "0px",
                    padding: "2px",
                    borderRadius: "20px",
                    color: colors.darkWhite,
                    cursor: "pointer",
                    '&:hover': {
                        background: colors.gray,
                        transition: "0.3s",
                    }
                }}
                onClick={() => {
                    setOpen((o) => !o);
                }}
            >
                <KeyboardArrowUpIcon sx={{
                    transform: open ?
                        "rotate(-180deg)" :
                        "rotate(0)",
                    transition: "0.2s",
                }} />
                {title}
            </Typography>
            <Collapse in={open}>
                <Grid
                    container
                    justifyContent="left"
                    sx={{
                        marginBottom: "30px",
                        marginTop: "0px",
                        paddingLeft: "10vw",
                    }}
                >
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
            <Grid item xs={12} sm={6} md={4}>
                <Button
                    href={"/dice/" + to}
                    size="large"
                    startIcon={<Icon />}
                    sx={{ fontSize: "1.3rem" }}
                >
                    {title}
                </Button>
            </Grid>
        );
    };
    return (
        <HeaderFooter title="Dice tools">
            <SectionHeader title="CRUCIBLES" top={true} />
            <Section title="MOXIE">
                <ButtonItem title="GM" Icon={TipsAndUpdatesIcon} to="crucible/gm" />
            </Section>
            <Section title="GRIMWILD">
                <ButtonItem title="Heritage" Icon={CottageIcon} to="crucible/heritage" />
                <ButtonItem title="Spells" Icon={AutoFixHighIcon} to="crucible/spell" />
                <ButtonItem
                    title="Weapon Origin"
                    Icon={ShieldMoonIcon}
                    to="crucible/weaponorigin"
                />
                <ButtonItem
                    title="Weapon Styles"
                    Icon={RestaurantMenuIcon}
                    to="crucible/weaponstyles"
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
                <ButtonItem
                    title="Instrument"
                    Icon={MusicNoteIcon}
                    to="crucible/bardinstrument"
                />
                <ButtonItem title="Wild Surge" Icon={FlareIcon} to="crucible/wildsurge" />
                <ButtonItem title="Words of Power" Icon={AssistantIcon} to="crucible/wordsofpower" />
                <ButtonItem
                    title="Wises"
                    Icon={AutoStoriesIcon}
                    to="crucible/wises"
                />
                <ButtonItem
                    title="Personality"
                    Icon={PsychologyAltIcon}
                    to="crucible/personality"
                />
                <ButtonItem title="Distinctive Features" Icon={PeopleIcon} />
            </Section>
            <Section title="GRIMWILD ARCANA">
                <ButtonItem title="Arcana (Arcane) " Icon={AutoFixHighIcon} to="crucible/arcanaarcane" />
                <ButtonItem title="Arcana (Divine) " Icon={FlareIcon} to="crucible/arcanadivine" />
                <ButtonItem title="Arcana (Eldritch) " Icon={VisibilityIcon} to="crucible/arcanaeldritch" />
                <ButtonItem title="Arcana (Primal) " Icon={SpaIcon} to="crucible/arcanaprimal" />
                <ButtonItem title="Arcana (Tech) " Icon={SettingsSuggestIcon} to="crucible/arcanatech" />
                <ButtonItem title="Potions" Icon={ScienceIcon} to="crucible/potions" />
            </Section>
            <Section title="GRIMWILD EXPLORATION">
                <ButtonItem title="Buildings" Icon={CottageIcon} />
                <ButtonItem title="Settlements" Icon={Square} />
                <ButtonItem title="Settlement Names" Icon={CottageIcon} />
                <ButtonItem title="Sites" Icon={Circle} />
                <ButtonItem title="Dangers" Icon={Diamond} />
                <ButtonItem title="Curiosities" Icon={Asterisk} />
                <ButtonItem title="Barriers" Icon={Wall} />
            </Section>
            <Section title="HIDDEN VARIABLES">
                <ButtonItem title="American Names" Icon={PeopleIcon} to="crucible/americannames" />
            </Section>
            <Section title="CENOTE">
                <ButtonItem title="Bygone Artifacts " Icon={SettingsSuggestIcon} to="crucible/bygoneartifacts" />
            </Section>
            <SectionHeader title="ANALYSIS" />
            <Grid
                container
                justifyContent="left"
                sx={{
                    // marginBottom: "30px",
                    marginTop: "0px",
                    marginRight: "0px",
                    paddingLeft: "10vw",
                }}
            >
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

import { Button, Grid, Divider } from "@mui/material";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import CottageIcon from "@mui/icons-material/Cottage";
import ShieldMoonIcon from "@mui/icons-material/ShieldMoon";
import EscalatorWarningIcon from "@mui/icons-material/EscalatorWarning";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import BarChartIcon from "@mui/icons-material/BarChart";
import HeaderFooter from "./HeaderFooter";
import { colors } from "../theme";

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
export default function Home() {
    const ButtonItem = ({ title, to, Icon }: { title: string; to: string; Icon: any }) => {
        return (
            <Grid item xs={12} spacing={3}>
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
            <Grid container justifyContent="center">
                <ButtonItem title="Spells" Icon={AutoFixHighIcon} to="crucible/spell" />
                <ButtonItem title="GM" Icon={TipsAndUpdatesIcon} to="crucible/gm" />
                <ButtonItem
                    title="Weapon Origin"
                    Icon={ShieldMoonIcon}
                    to="crucible/weaponorigin"
                />
                <ButtonItem title="Heritage" Icon={CottageIcon} to="crucible/heritage" />
                <ButtonItem
                    title="Warlock Patron"
                    Icon={EscalatorWarningIcon}
                    to="crucible/patron"
                />
            </Grid>
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

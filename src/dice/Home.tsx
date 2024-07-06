import { Button, Grid } from "@mui/material";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import HeaderFooter from "./HeaderFooter";

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
            <Grid container justifyContent="center">
                <ButtonItem title="Spell Crucible" Icon={AutoFixHighIcon} to="spellcrucible" />
                <ButtonItem title="GM Crucible" Icon={TipsAndUpdatesIcon} to="gmcrucible" />
                <ButtonItem
                    title="Diminishing Pools Analysis"
                    Icon={TipsAndUpdatesIcon}
                    to="analysis/diminishingpools"
                />
                <ButtonItem
                    title="Rolls with Thorns Analysis"
                    Icon={TipsAndUpdatesIcon}
                    to="analysis/rollswiththorns"
                />
            </Grid>
        </HeaderFooter>
    );
}

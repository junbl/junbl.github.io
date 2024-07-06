import GrimwildFooter from "./GrimwildFooter";
import { AppBar, Divider, Grid, IconButton, Toolbar } from "@mui/material";
import { PropsWithChildren } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { colors } from "../theme";

export default function HeaderFooter({
    title,
    children,
    back,
}: PropsWithChildren<{ title: string; back?: string }>) {
    document.title = title;
    return (
        <>
            {/* <AppBar position="fixed"> */}
            <Toolbar sx={{ backgroundColor: colors.gray }}>
                {back ? (
                    <Grid item>
                        <IconButton size="large" edge="start" href={back}>
                            <ArrowBackIosIcon />
                        </IconButton>
                    </Grid>
                ) : null}
                <h1 style={{ marginLeft: 20 }}>{title}</h1>
            </Toolbar>
            {/* </AppBar> */}
            <Divider sx={{ marginBottom: 8 }} />
            {children}
            <GrimwildFooter />
        </>
    );
}

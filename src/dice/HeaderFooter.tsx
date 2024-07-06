import GrimwildFooter from "./GrimwildFooter";
import { Box, Dialog, DialogContent, Divider, IconButton, Toolbar, Tooltip } from "@mui/material";
import { PropsWithChildren, ReactElement, useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import InfoIcon from "@mui/icons-material/Info";
import { colors } from "../theme";

export default function HeaderFooter({
    title,
    children,
    back,
    info,
    infoDialog,
}: PropsWithChildren<{ title: string; back?: string; info?: string; infoDialog?: ReactElement }>) {
    document.title = title;
    return (
        <>
            <Toolbar sx={{ backgroundColor: colors.gray }}>
                {back ? (
                    <IconButton size="large" edge="start" href={back}>
                        <ArrowBackIosIcon />
                    </IconButton>
                ) : null}
                <h1 style={{ marginLeft: 20 }}>{title}</h1>
                <Box flexGrow={1}></Box>
                {info ? (
                    <Tooltip enterDelay={100} title={info}>
                        <IconButton size="large" edge="end">
                            <InfoIcon />
                        </IconButton>
                    </Tooltip>
                ) : null}
                {infoDialog ? <InfoDialog>{infoDialog}</InfoDialog> : null}
            </Toolbar>
            <Divider sx={{ marginBottom: 8 }} />
            {children}
            <GrimwildFooter />
        </>
    );
}

function InfoDialog({ children }: PropsWithChildren<{}>) {
    const [open, setOpen] = useState(false);
    const toggleOpen = () => setOpen((o) => !o);
    return (
        <>
            <Dialog
                open={open}
                onClose={(e) => {
                    toggleOpen();
                }}
            >
                <DialogContent>{children}</DialogContent>
            </Dialog>
            <IconButton size="large" edge="end" onClick={toggleOpen}>
                <InfoIcon />
            </IconButton>
        </>
    );
}

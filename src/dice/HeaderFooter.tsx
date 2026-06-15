import GrimwildFooter from "./GrimwildFooter";
import { Box, Dialog, DialogContent, Divider, IconButton, Toolbar, Tooltip } from "@mui/material";
import { Dispatch, PropsWithChildren, ReactElement, SetStateAction, useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import InfoIcon from "@mui/icons-material/Info";
import { colors } from "../theme";
import { Settings } from "@mui/icons-material";

export default function HeaderFooter({
    title,
    children,
    back,
    info,
    infoDialog,
    infoFile,
    grimwild = true,
    settingsDialogOpen,
    setSettingsDialogOpen,
}: PropsWithChildren<{
    title: string;
    back?: string;
    info?: string;
    infoDialog?: ReactElement;
    infoFile?: string;
    grimwild?: boolean;
    settingsDialogOpen?: boolean;
    setSettingsDialogOpen?: Dispatch<SetStateAction<boolean>>;
}>) {
    document.title = title;
    title = title.toLocaleUpperCase();
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
                {infoFile ? (
                    <IconButton size="large" edge="end" href={infoFile}>
                        <InfoIcon />
                    </IconButton>
                ) : null}
                {settingsDialogOpen != undefined && setSettingsDialogOpen != undefined ? (
                    <Tooltip enterDelay={100} title={"Open Settings"}>
                        <IconButton
                            size="large"
                            edge="end"
                            onClick={(e) => {
                                setSettingsDialogOpen((s) => !s);
                            }}
                        >
                            <Settings />
                        </IconButton>
                    </Tooltip>
                ) : null}
            </Toolbar>
            <Divider sx={{ marginBottom: 2 }} />
            {children}
            {grimwild ? <GrimwildFooter /> : null}
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

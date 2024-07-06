import GrimwildFooter from "./GrimwildFooter";
import { Divider } from "@mui/material";
import { PropsWithChildren } from "react";

export default function HeaderFooter({ title, children }: PropsWithChildren<{ title: string }>) {
    document.title = title;
    return (
        <>
            <h1 style={{ marginLeft: 20 }}>{title}</h1>
            <Divider sx={{ marginBottom: 8 }} />
            {children}
            <GrimwildFooter />
        </>
    );
}

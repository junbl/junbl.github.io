import { Box, AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import { useState } from "react";

export default function Header() {
    const [title, setTitle] = useState(document.title);
    new MutationObserver(function (mutations) {
        const newTitle = mutations[0].target.nodeValue;
        if (newTitle != null) {
            setTitle(newTitle);
        }
    }).observe(document.querySelector("title") as Node, {
        subtree: true,
        characterData: true,
        childList: true,
    });
    return (
        <>
            <Box sx={{ flexGrow: 1, marginBottom: "10px" }}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            {/* <MenuIcon /> */}
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            {title}
                        </Typography>
                        {/* <Button color="inherit">Login</Button> */}
                    </Toolbar>
                </AppBar>
            </Box>
        </>
    );
}

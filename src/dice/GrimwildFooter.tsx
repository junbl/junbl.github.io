import { Box, Container, Link, Typography } from "@mui/material";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

export default function GrimwildFooter() {
    return (
        <>
            <Box sx={{ minHeight: "30px" }}></Box>
            <Box
                component="footer"
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    minHeight: "100px",
                    backgroundColor: (theme) => theme.palette.grey[800],
                }}
            >
                <Container maxWidth="md">
                    <Typography variant="body2" align="center">
                        <br />
                        This page is based on <b>Moxie</b> and <b>Grimwild</b> © 2024 by J.D.
                        Maxwell, licensed under{" "}
                        <Link
                            href="https://creativecommons.org/licenses/by/4.0/legalcode.en"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            CC-BY 4.0&nbsp;
                            <OpenInNewIcon fontSize="inherit" />
                        </Link>
                        .
                        <br />
                        Check out{" "}
                        <Link
                            href="https://www.odditypress.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Oddity Press
                            <OpenInNewIcon fontSize="inherit" />
                        </Link>{" "}
                        for more information!
                    </Typography>
                </Container>
            </Box>
        </>
    );
}

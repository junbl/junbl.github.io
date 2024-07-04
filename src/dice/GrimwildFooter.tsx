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
                        This page contains content from <b>Grimwild</b> by J.D. Maxwell, licensed
                        under{" "}
                        <Link
                            href="https://creativecommons.org/licenses/by/4.0/legalcode.en"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            CC-BY&nbsp;
                            <OpenInNewIcon fontSize="inherit" />
                        </Link>
                        .
                        <br />
                        Check out{" "}
                        <Link
                            href="https://www.backerkit.com/c/projects/OddityPress/grimwild"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Grimwild&nbsp;on&nbsp;BackerKit&nbsp;
                            <OpenInNewIcon fontSize="inherit" />
                        </Link>{" "}
                        for more information!
                    </Typography>
                </Container>
            </Box>
        </>
    );
}

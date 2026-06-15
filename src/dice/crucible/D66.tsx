import { Chip, Paper, Table, TableBody, TableCell, TableContainer, TableRow, Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
import { tableCellClasses } from "@mui/material/TableCell";
import { colors } from "../../theme";

export type SelectedCell = {
    row: number;
    column: number;
};
const useStyles = makeStyles((theme: Theme) => ({
    root: {},
    table: {},
}));
export default function D66({
    table,
    selected,
    color = undefined,
    textColor = undefined,
}: {
    table: string[][];
    selected: string[];
    color?: string;
    textColor?: string;
}) {
    const classes = useStyles();
    return (
        <TableContainer //component={(props) => <Paper className={classes.root} {...props}></Paper>}
        >
            {/* <Table padding={{xs: "none", sm: "normal"}}> */}
            <Table
                size="small"
                sx={{
                    [`& .${tableCellClasses.root}`]: {
                        borderBottom: "none"
                    }
                }}
            >
                <TableBody>
                    {table.map((row, r) => (
                        <TableRow
                            key={r}
                            sx={{
                                // backgroundColor: "yellow",
                                // fontSize: "100pt",
                                // borderBottom: "2px solid black",
                                "& td": {
                                    fontSize: { xs: "0.8rem", sm: "1rem" },
                                },
                            }}
                        >
                            {row.map((cell, c) => (
                                <TableCell
                                    className={classes.table}
                                    key={cell + c}
                                >
                                    {selected && selected.includes(cell) ?
                                        <Chip
                                            label={cell}
                                            variant="outlined"
                                            size="small"
                                            color="primary"
                                        />
                                        :
                                        <Chip
                                            label={cell}
                                            variant="outlined"
                                            size="small"
                                            sx={{ borderWidth: "0px" }}
                                        />
                                    }
                                    {/* <Chip 
                                        label={cell}
                                        sx={
                                            selected && selected.includes(cell)
                                                ? {
                                                    // borderRadius: "20px",
                                                    backgroundColor:
                                                        color ||
                                                        ((theme) => theme.palette.primary.main),
                                                    color:
                                                        textColor ||
                                                        ((theme) => theme.palette.background.default),
                                                }
                                                : undefined
                                        }

                                    />
*/}
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

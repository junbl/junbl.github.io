import { Paper, Table, TableBody, TableCell, TableContainer, TableRow, Theme } from "@mui/material";
import { makeStyles } from "@mui/styles";
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
        <TableContainer component={(props) => <Paper className={classes.root} {...props}></Paper>}>
            {/* <Table padding={{xs: "none", sm: "normal"}}> */}
            <Table size="small">
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
                                    sx={
                                        selected && selected.includes(cell)
                                            ? {
                                                  backgroundColor:
                                                      color ||
                                                      ((theme) => theme.palette.primary.main),
                                                  color:
                                                      textColor ||
                                                      ((theme) => theme.palette.background.default),
                                              }
                                            : undefined
                                    }
                                >
                                    {cell}
                                </TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Theme,
    Typography,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

export type SelectedCell = {
    row: number;
    column: number;
};
const useStyles = makeStyles((theme: Theme) => ({
    root: {
        fontSize: "200pt",
    },
    table: {
        fontSize: "200pt",
    },
}));
export default function D66({
    table,
    selected,
}: {
    table: string[][];
    selected: string[];
}) {
    // if (selected == null) {
    //     selected = [];
    // }
    const classes = useStyles();
    return (
        <TableContainer
            component={(props) => (
                <Paper className={classes.root} {...props}></Paper>
            )}
        >
            <Table>
                <TableBody>
                    {table.map((row, r) => (
                        <TableRow
                            key={r}
                            sx={{
                                // backgroundColor: "yellow",
                                fontSize: "100pt",
                                // borderBottom: "2px solid black",
                                "& td": {
                                    fontSize: "1.25rem",
                                },
                            }}
                        >
                            {row.map((cell, c) => (
                                <TableCell
                                    className={classes.table}
                                    key={cell + c}
                                    sx={
                                        selected.includes(cell)
                                            ? {
                                                  backgroundColor: "#75ade6",
                                                  fontStyle: "bold",
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

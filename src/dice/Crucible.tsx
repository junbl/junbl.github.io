import {
    Box,
    Button,
    Card,
    CardContent,
    Grid,
    Typography,
} from "@mui/material";
import D66 from "./D66";
import CasinoIcon from "@mui/icons-material/Casino";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useEffect, useState } from "react";
import _ from "lodash";

function d(sides: number): number {
    return Math.floor(Math.random() * sides);
}

function d6(): number {
    return d(6);
}

function CrucibleResults({
    options,
    n = 2,
}: {
    options: string[][];
    n?: number;
}) {
    const defaultSelection = () => {
        const shuffledOptions = _.shuffle(
            options.map((row, index) => ({
                row,
                index,
            }))
        );
        const selectedRows = shuffledOptions.slice(0, n);
        const of = selectedRows[0].index > selectedRows[n-1].index;
        const selected = selectedRows.map((row) => row.row[d(row.row.length)]);
        return [selected, of] as const;
    };
    const [s, o] = defaultSelection();
    const [selected, setSelected] = useState<string[]>(s);
    const [of, setOf] = useState(o);
    useEffect(() => {
        const [s, o] = defaultSelection();
        setSelected(s);
        setOf(o);
    }, [options]);

    if (options.length == 0 || !options.some((row) => row.length > 0)) {
        return null;
    }
    let selectedForDisplay = selected;
    if (of) {
        selectedForDisplay = [...selected];
        selectedForDisplay.splice(1, 0, "of");
    }
    return (
        <Card sx={{ display: "flex", maxWidth: "100%" }}>
            <CardContent>
                <Grid container justifyContent="center" alignItems="center">
                    {options.map((row, index) =>
                        row.map((option) => (
                            <Grid key={option} item xs={12 / row.length}>
                                <Button
                                    variant={"contained"}
                                    onClick={() => {
                                        const newSelected = [...selected];
                                        if (options.length == n) {
                                            newSelected[index] = option;
                                        } else {
                                            newSelected.push(option);
                                            while (newSelected.length > n) {
                                                newSelected.shift();
                                            }
                                        }
                                        setSelected(newSelected);
                                    }}
                                >
                                    {option}
                                </Button>
                            </Grid>
                        ))
                    )}
                    <Grid item xs={12}>
                        <Typography variant="h3">
                            {selectedForDisplay.join(" ")}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            variant="contained"
                            startIcon={<SwapHorizIcon />}
                            onClick={() => {
                                setSelected(selected.toReversed());
                            }}
                        >
                            Swap
                        </Button>
                        <Button
                            variant="contained"
                            startIcon={of ? <RemoveIcon /> : <AddIcon />}
                            onClick={() => {
                                setOf((of) => !of);
                            }}
                        >
                            Of
                        </Button>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    );
}

export default function Crucible({ tables }: { tables: string[][][] }) {
    const [selectedInTables, setSelectedInTables] = useState<string[][]>(
        Array(tables.length).fill([])
    );
    const roll = (e: React.MouseEvent) => {
        const newSelectedInTables = [];
        for (const i in tables) {
            const selected = [];
            const row = d6();
            const column = d6();
            const rc = tables[i][row][column];
            const cr = tables[i][column][row];
            selected.push(rc);
            if (rc != cr) {
                selected.push(cr);
            }
            newSelectedInTables.push(selected);
        }
        setSelectedInTables(newSelectedInTables);
    };

    return (
        <>
            <Box display="flex" justifyContent="center" width="100%">
                <Grid
                    container
                    spacing={5}
                    justifyItems="center"
                    justifyContent="center"
                    alignItems="center"
                >
                    {tables.map((table, index) => {
                        return (
                            <Grid
                                key={index}
                                item
                                xs={12}
                                lg={tables.length % 2 ? 12 : 6}
                            >
                                <Card>
                                    <CardContent>
                                        <D66
                                            table={table}
                                            selected={selectedInTables[index]}
                                        />
                                    </CardContent>
                                </Card>
                            </Grid>
                        );
                    })}
                    <Grid
                        item
                        xs={12}
                        // sx={{ display: "flex", alignItems: "center" }}
                    >
                        <Button
                            variant="contained"
                            size="large"
                            onClick={roll}
                            startIcon={<CasinoIcon />}
                            sx={{ minHeight: "50px", minWidth: "100px" }}
                        >
                            Roll!
                        </Button>
                    </Grid>
                    <Grid item xs={12}>
                        <CrucibleResults options={selectedInTables} />
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}

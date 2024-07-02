import {
    Box,
    Button,
    Card,
    CardContent,
    Grid,
    Typography,
} from "@mui/material";
import D66, { SelectedCell } from "./D66";
import CasinoIcon from "@mui/icons-material/Casino";
import { useEffect, useState } from "react";

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
    const defaultSelection = () => options.map((row) => row[d(row.length)]);
    const [selected, setSelected] = useState<string[]>(defaultSelection());
    useEffect(() => {
        setSelected(defaultSelection());
    }, [options]);

    if (options.length == 0 && !options.some((row) => row.length > 0)) {
        return null;
    }
    return (
        <Card sx={{ display: "inline-block" }}>
            <CardContent>
                <Grid container justifyContent="center" alignItems="center">
                    {options.map((row, index) =>
                        row.map((option) => (
                            <Grid key={option} item xs={12 / row.length}>
                                <Button
                                    variant="contained"
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
                        {selected.map((selection) => (
                            <Typography variant="h3">{selection}</Typography>
                        ))}
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
            <Box display="flex" justifyContent="center">
                <Grid
                    container
                    spacing={5}
                    justifyContent="center"
                    alignItems="center"
                >
                    {tables.map((table, index) => {
                        return (
                            <Grid key={index} item xs={12} lg={6}>
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

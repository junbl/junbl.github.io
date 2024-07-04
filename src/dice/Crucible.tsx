import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardHeader,
    Grid,
    IconButton,
    MenuItem,
    Select,
    SelectChangeEvent,
    Tooltip,
    Typography,
} from "@mui/material";
import D66 from "./D66";
import CasinoIcon from "@mui/icons-material/Casino";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import _ from "lodash";
import { colors } from "../App";

export function d(sides: number): number {
    return Math.floor(Math.random() * sides);
}

export function d6(): number {
    return d(6);
}

export type AddlOption = { name: string; color?: keyof typeof colors };

function CrucibleResults({
    options,
    n = 2,
    additionalOptions,
}: {
    options: string[][];
    n?: number;
    additionalOptions?: AddlOption[];
}) {
    const defaultSelection = () => {
        if (options.length == 0 || options[0].length == 0) {
            return [[] as string[], false] as const;
        }
        const shuffledOptions = _.shuffle(
            options.map((row, index) => ({
                row,
                index,
            }))
        );
        const selectedRows = shuffledOptions.slice(0, n);
        let of = selectedRows[0].index > selectedRows[selectedRows.length - 1].index;
        const firstRowLast = selectedRows[selectedRows.length - 1].index == 0;
        const selected = selectedRows.map((row) => row.row[d(row.row.length)]);
        if (of && firstRowLast && !selected[selected.length - 1].endsWith("ing")) {
            of = false;
            selected.reverse();
        }
        return [selected, of] as const;
    };
    const [s, o] = defaultSelection();
    const [selected, setSelected] = useState<string[]>(s);
    const [of, setOf] = useState(o);
    const randomAdditionalOption = () => (additionalOptions ? d(additionalOptions.length - 1) : 0);
    const [selectedAdditionalOption, setSelectedAdditionalOption] = useState<OptionIndex>(
        randomAdditionalOption()
    );
    const rerollAll = () => {
        const [s, o] = defaultSelection();
        setSelected(s);
        setOf(o);
        setSelectedAdditionalOption(randomAdditionalOption());
    };
    useEffect(rerollAll, [options]);

    if (options.length == 0 || !options.some((row) => row.length > 0)) {
        return null;
    }
    let selectedForDisplay = selected;
    if (of) {
        selectedForDisplay = [...selected];
        selectedForDisplay.splice(1, 0, "of");
    }
    return (
        <Card sx={{ display: "flex", maxWidth: "600px", textAlign: "center" }}>
            <CardContent sx={{ marginTop: "10px" }}>
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    <Grid container justifyContent="center" alignItems="center">
                        {options.map((row, index) =>
                            row.map((option) => {
                                const optionIndex = selected.indexOf(option);
                                return (
                                    <Grid key={option} item xs={12 / row.length}>
                                        <Button
                                            variant={optionIndex != -1 ? "contained" : "outlined"}
                                            onClick={() => {
                                                const newSelected = [...selected];
                                                if (optionIndex != -1) {
                                                    newSelected.splice(optionIndex, 1);
                                                } else if (options.length == n) {
                                                    newSelected[index] = option;
                                                } else {
                                                    if (newSelected.length >= n) {
                                                        let i = newSelected.findIndex((s) =>
                                                            row.includes(s)
                                                        );
                                                        if (i == -1) {
                                                            i = 0;
                                                        }
                                                        newSelected.splice(i, 1, option);
                                                    } else {
                                                        newSelected.push(option);
                                                    }
                                                }
                                                setSelected(newSelected);
                                            }}
                                        >
                                            {option}
                                        </Button>
                                    </Grid>
                                );
                            })
                        )}
                        <Grid item xs={12} margin="10px">
                            <Typography variant="h3" align="center">
                                {selectedForDisplay.join(" ")}
                            </Typography>
                        </Grid>
                        <Grid container item xs={12} spacing="5px" justifyContent="center">
                            <Grid item>
                                <Button
                                    variant="contained"
                                    startIcon={<SwapHorizIcon />}
                                    onClick={() => {
                                        setSelected(selected.toReversed());
                                    }}
                                >
                                    Swap
                                </Button>
                            </Grid>
                            <Grid item>
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
                            <Grid item>
                                <Button
                                    variant="contained"
                                    startIcon={<SwapHorizIcon />}
                                    onClick={() => {
                                        setSelected(selected.toReversed());
                                        setOf((of) => !of);
                                    }}
                                >
                                    Swap and Toggle Of
                                </Button>
                            </Grid>
                        </Grid>
                        {additionalOptions != null && selectedAdditionalOption != null && (
                            <Grid item xs={12}>
                                <AdditionalOptions
                                    options={additionalOptions}
                                    selected={selectedAdditionalOption}
                                    setSelected={setSelectedAdditionalOption}
                                />
                            </Grid>
                        )}
                    </Grid>
                </div>
            </CardContent>
            <CardActions>
                <Tooltip title="Select new options without rerolling on the tables">
                    <IconButton onClick={rerollAll} sx={{ marginLeft: "auto" }}>
                        <CasinoIcon />
                    </IconButton>
                </Tooltip>
            </CardActions>
        </Card>
    );
}

function isString(data: unknown): data is string {
    return typeof data === "string";
}

type OptionIndex = string | number;
function AdditionalOptions({
    options,
    selected,
    setSelected,
}: {
    options: AddlOption[];
    selected: OptionIndex;
    setSelected: Dispatch<SetStateAction<OptionIndex>>;
}) {
    const selectedString = selected.toString();
    const selectedNumber = Number(selected);
    const selectedColor = options[selectedNumber].color;
    const textColor = selectedColor != "black" ? colors["black"] : undefined;
    return (
        <Select
            value={selectedString}
            // label="School of Magic"
            onChange={(e: SelectChangeEvent) => setSelected(e.target.value)}
            autoWidth
            sx={{
                marginTop: "20px",
                // minWidth: "100%",
                fontSize: "14pt",
                backgroundColor: selectedColor && colors[selectedColor],
                color: textColor,
            }}
        >
            {options.map((option, index) => (
                <MenuItem key={option.name} value={index}>
                    {option.name}
                </MenuItem>
            ))}
        </Select>
    );
}

export default function Crucible({
    tables,
    titles,
    additionalOptions,
}: {
    tables: string[][][];
    titles?: string[];
    additionalOptions?: AddlOption[];
}) {
    const [selectedInTables, setSelectedInTables] = useState<string[][]>(
        Array(tables.length).fill([])
    );
    const roll = (_e: React.MouseEvent) => {
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
            <div style={{ display: "flex", alignContent: "center" }}>
                <Grid container spacing={2} justifyContent="center">
                    <Grid
                        item
                        xs={12}
                    >
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "center",
                            }}
                        >
                            <Button
                                variant="contained"
                                size="large"
                                onClick={roll}
                                startIcon={<CasinoIcon />}
                                sx={{
                                    minHeight: "50px",
                                    minWidth: "100px",
                                    fontSize: "20pt",
                                }}
                            >
                                Roll!
                            </Button>
                        </div>
                    </Grid>
                    <Grid item xs={12}>
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "center",
                            }}
                        >
                            <CrucibleResults
                                options={selectedInTables}
                                additionalOptions={additionalOptions}
                            />
                        </div>
                    </Grid>
                    {tables.map((table, index) => {
                        return (
                            <Grid key={index} item >
                                {/* xs={12} lg={tables.length % 2 ? 12 : 6} xl={tables.length % 3 ? 12 : 4}> */}
                                <div
                                    style={{
                                        display: "flex",
                                        justifyContent: "center",
                                        // maxWidth: "1000px",
                                    }}
                                >
                                    <Card
                                        sx={{
                                            display: "flex",
                                            justifyContent: "center",
                                        }}
                                    >
                                        {titles && titles[index] != undefined ? (
                                            <>
                                                <CardHeader title={titles[index]} />
                                                <br />
                                            </>
                                        ) : null}
                                        <CardContent>
                                            <D66 table={table} selected={selectedInTables[index]} />
                                        </CardContent>
                                    </Card>
                                </div>
                            </Grid>
                        );
                    })}
                </Grid>
            </div>
        </>
    );
}

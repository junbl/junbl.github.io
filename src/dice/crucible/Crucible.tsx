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
import SwapCallsIcon from "@mui/icons-material/SwapCalls";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import _ from "lodash";
import { colors } from "../../theme";

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
    disableBackwards = false,
}: {
    options: string[][];
    n?: number;
    additionalOptions?: AddlOption[];
    disableBackwards?: boolean;
}) {
    const rollButtonRef = useRef<SVGSVGElement>(null);
    const defaultSelection = () => {
        if (options.length == 0 || options[0].length == 0) {
            return [[] as string[], false] as const;
        }
        let shuffledOptions = options.map((row, index) => ({
            row,
            index,
        }));
        if (!disableBackwards) {
            shuffledOptions = _.shuffle(shuffledOptions);
        }
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
    const c = additionalOptions && additionalOptions[Number(selectedAdditionalOption)].color;
    const selectedColor = c && colors[c];
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
        selectedForDisplay.splice(selected.length - 1, 0, "of");
    }

    const onOptionClick = (
        option: string,
        optionSelectedIndex: number,
        optionIsSelected: boolean,
        row: string[],
        rowIndex: number
    ) => {
        const newSelected = [...selected];
        if (optionIsSelected) {
            // console.debug("already selected, removing");
            newSelected.splice(optionSelectedIndex, 1);
        } else if (options.length == n) {
            // console.debug(`max options selected, setting option for ${rowIndex}`);
            newSelected[rowIndex] = option;
        } else {
            let otherSelectedInRowIndex = selected.findIndex((s) => row.includes(s));
            if (newSelected.length >= n) {
                let indexToReplace = 0;
                if (otherSelectedInRowIndex == -1) {
                    let closestRowIndex = 0;
                    for (const [rowIndexForSelected, selectedIndex] of selected.map(
                        (s, index) => [options.findIndex((row) => row.includes(s)), index] as const
                    )) {
                        if (
                            Math.abs(rowIndexForSelected - rowIndex) <=
                            Math.abs(closestRowIndex - rowIndex)
                        ) {
                            closestRowIndex = rowIndexForSelected;
                            indexToReplace = selectedIndex;
                        }
                    }
                } else {
                    // console.debug("selected more than max options, replacing other in row");
                    indexToReplace = otherSelectedInRowIndex;
                }
                newSelected.splice(indexToReplace, 1, option);
            } else {
                if (otherSelectedInRowIndex !== -1) {
                    // console.debug("selected less than max + option in row already selected");
                    newSelected.splice(otherSelectedInRowIndex, 1, option);
                } else {
                    // console.debug("selected less than max options, inserting at start");
                    newSelected.splice(rowIndex, 0, option);
                }
            }
        }
        setSelected(newSelected);
    };
    return (
        <Card
            sx={{
                border: `2px solid ${selectedColor}`,
                display: "flex",
                maxWidth: "600px",
                textAlign: "center",
            }}
        >
            <CardContent sx={{ marginTop: "10px" }}>
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    <Grid container justifyContent="center" alignItems="center" rowSpacing="5px">
                        {options.map((row, rowIndex) =>
                            row.map((option) => {
                                const optionSelectedIndex = selected.indexOf(option);
                                const optionIsSelected = optionSelectedIndex != -1;
                                return (
                                    <Grid key={option} item xs={12 / row.length}>
                                        <Button
                                            variant={optionIsSelected ? "contained" : "outlined"}
                                            onClick={() => {
                                                onOptionClick(
                                                    option,
                                                    optionSelectedIndex,
                                                    optionIsSelected,
                                                    row,
                                                    rowIndex
                                                );
                                            }}
                                        >
                                            {option}
                                        </Button>
                                    </Grid>
                                );
                            })
                        )}
                        <Grid item xs={12} margin="10px">
                            <Typography
                                variant="h3"
                                align="center"
                                sx={{ minHeight: { xs: "120px", sm: "60px" } }}
                            >
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
                                    startIcon={<SwapCallsIcon />}
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
                    <IconButton
                        onClick={() => {
                            rollDiceAnimation(rollButtonRef);
                            rerollAll();
                        }}
                        sx={{ marginLeft: "auto" }}
                    >
                        <CasinoIcon ref={rollButtonRef} />
                    </IconButton>
                </Tooltip>
            </CardActions>
        </Card>
    );
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
    return (
        <Select
            value={selectedString}
            // label="School of Magic"
            onChange={(e: SelectChangeEvent) => setSelected(e.target.value)}
            autoWidth
            sx={{
                minWidth: "200px",
                marginTop: "20px",
                fontSize: "14pt",
                border: `2px solid ${selectedColor && colors[selectedColor]}`,
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

function rollDiceAnimation(rollButtonRef: React.RefObject<SVGSVGElement>) {
    const rollButton = rollButtonRef.current;
    if (rollButton) {
        rollButton.classList.add("roll-dice");
        setTimeout(() => {
            rollButton.classList.remove("roll-dice");
        }, 400);
    }
}

export default function Crucible({
    tables,
    titles,
    additionalOptions,
    disableBackwards = false,
}: {
    tables: string[][][];
    titles?: string[];
    additionalOptions?: AddlOption[];
    disableBackwards?: boolean;
}) {
    const rollButtonRef = useRef<SVGSVGElement>(null);
    const [selectedInTables, setSelectedInTables] = useState<string[][]>(
        Array(tables.length).fill([])
    );
    const roll = (_e: React.MouseEvent) => {
        rollDiceAnimation(rollButtonRef);
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
                    <Grid item xs={12}>
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
                                startIcon={<CasinoIcon ref={rollButtonRef} />}
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
                                disableBackwards={disableBackwards}
                            />
                        </div>
                    </Grid>
                    {tables.map((table, index) => {
                        return (
                            <Grid key={index} item>
                                {/* xs={12} lg={tables.length % 2 ? 12 : 6} xl={tables.length % 3 ? 12 : 4}> */}
                                <div
                                    style={{
                                        display: "flex",
                                        justifyContent: "center",
                                        maxWidth: "95vw",
                                        overflowX: "scroll",
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

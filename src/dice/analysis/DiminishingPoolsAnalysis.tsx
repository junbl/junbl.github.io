import {
    Box,
    Checkbox,
    Dialog,
    DialogContent,
    FormControlLabel,
    FormGroup,
    Grid,
    Tooltip as MuiTooltip,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    TextField,
    Typography,
} from "@mui/material";
import { BarChart, XAxis, YAxis, Tooltip, Bar, Rectangle, ResponsiveContainer } from "recharts";
import HeaderFooter from "../HeaderFooter";
import { useEffect, useMemo, useState } from "react";
import { colors } from "../../theme";
import { range } from "lodash";
import binomcoef from "@stdlib/math-base-special-binomcoef";
import { parseFraction } from ".";

export type BarDatum = { name: string; proportion: number };

const sum = (acc: number, i: number) => acc + i;

const cache: Record<number, Record<number, number>> = {};
const rollsUntilDepletedPushToDropLastDie = (p: number, n: number): number => {
    console.debug("push rolls", p, n);
    if (n == 0) {
        return 0;
    } else if (n == 1) {
        return 1;
    } else if (cache[p] && cache[p][n] !== undefined) {
        console.debug("cached", p, n, cache[p][n]);
        return cache[p][n];
    } else {
        console.debug("doing math", p, n);
        return (
            (1 / (1 - Math.pow(1 - p, n))) *
            (Math.pow(1 - p, n) +
                range(0, n)
                    .map((k) => {
                        const e = rollsUntilDepletedPushToDropLastDie(p, k);
                        if (cache[p] === undefined) {
                            cache[p] = {};
                        }
                        cache[p][k] = e;

                        return binomcoef(n, k) * Math.pow(1 - p, k) * Math.pow(p, n - k) * (1 + e);
                    })
                    .reduce(sum))
        );
    }
};

function rollsUntilDepleted(p: number, n: number, pushToDropLastDie: boolean): number {
    if (pushToDropLastDie) {
        return rollsUntilDepletedPushToDropLastDie(p, n);
    } else {
        const maxRolls = Math.pow(10, 4);
        if (n == 0) {
            return 1;
        } else {
            return range(0, maxRolls)
                .map((roll) => roll * probabilityNumberOfRollsToDeplete(p, n, roll))
                .reduce(sum);
        }
    }
}

function probabilityNumberOfRollsToDeplete(p: number, n: number, r: number): number {
    const q = 1 - p;
    return Math.pow(1 - Math.pow(q, r), n) - Math.pow(1 - Math.pow(q, r - 1), n);
}

export function proportionFormat(value: number) {
    const proportion = value > 1e-3 ? value.toFixed(3) : value === 0 ? 0 : value.toExponential(3);
    const percent = value * 100;
    const percentDisplay = percent < 1 ? percent.toPrecision(2) : percent.toPrecision(3);
    return `${proportion} (${percentDisplay}%)`;
}

const info = (
    <>
        Now with 100% less simulated rolls! I don't have a paper like for the rolls but if you're
        interested message me on discord (@thheia) and I'd love to talk about how I did the math
    </>
);
export default function DiminishingPoolAnalysis() {
    const defaultP = "1/2";
    const [pFraction, setPFraction] = useState("");
    const [pushToDropLastDie, setPushToDropLastDie] = useState(false);
    const [selectedNumDice, setSelectedNumDice] = useState(4);
    const [selectedResults, setSelectedResults] = useState<BarDatum[]>([]);
    const [settingsOpen, setSettingsOpen] = useState(false);

    const p = useMemo(() => parseFraction(pFraction), [pFraction]) || parseFraction(defaultP)!;

    const maxRolls = 200;
    const expectedValues = useMemo(
        () => range(1, 100 + 1).map((n) => [n, rollsUntilDepleted(p, n, false)]),
        [p, pushToDropLastDie]
    );
    const expectedValuesPush = useMemo(
        () =>
            pushToDropLastDie
                ? range(1, 100 + 1).map((n) => [n, rollsUntilDepleted(p, n, pushToDropLastDie)])
                : null,
        [p, pushToDropLastDie]
    );

    useEffect(() => {
        const epsilon = 1e-6;
        const probabilities: [number, number][] = [];
        let roll = 1;
        let avg = 0;
        const expectedValue = expectedValues[selectedNumDice - 1][1];
        while (probabilities.length < maxRolls && Math.abs(avg - expectedValue) > epsilon) {
            const probability = probabilityNumberOfRollsToDeplete(p, selectedNumDice, roll);
            probabilities.push([roll, probability]);
            avg += roll * probability;
            roll += 1;
        }
        setSelectedResults(
            probabilities.map(([timesRolled, proportion]) => ({
                name: timesRolled.toString(),
                proportion: proportion,
            }))
        );
    }, [selectedNumDice, p]);

    return (
        <HeaderFooter
            title="Diminishing Pools"
            back="/dice"
            infoDialog={info}
            settingsDialogOpen={settingsOpen}
            setSettingsDialogOpen={setSettingsOpen}
        >
            <Grid container>
                <Grid item xs={12} sm={pushToDropLastDie ? 8 : 2}>
                    <TableContainer sx={{ maxHeight: "30rem" }}>
                        <Table stickyHeader>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Dice</TableCell>
                                    <TableCell align="right">
                                        Average rolls until depleted
                                    </TableCell>
                                    {expectedValuesPush ? (
                                        <>
                                            <MuiTooltip title="The average number of rolls until the pool is depleted if you always push yourself to drop the last die.">
                                                <TableCell align="right">
                                                    Average rolls until depleted (push)
                                                </TableCell>
                                            </MuiTooltip>
                                            <MuiTooltip title="The percent change from not pushing to pushing">
                                                <TableCell align="right">
                                                    Percent Difference
                                                </TableCell>
                                            </MuiTooltip>
                                        </>
                                    ) : null}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {expectedValues.map(([n, e], i) => (
                                    <TableRow
                                        key={n}
                                        hover={true}
                                        selected={n === selectedNumDice}
                                        onClick={() => {
                                            setSelectedNumDice(n);
                                        }}
                                    >
                                        <TableCell>{n}</TableCell>
                                        <TableCell align="right">{e.toFixed(3)}</TableCell>
                                        {expectedValuesPush ? (
                                            <>
                                                <TableCell align="right">
                                                    {expectedValuesPush[i][1]?.toFixed(3)}
                                                </TableCell>
                                                <TableCell align="right">
                                                    {(
                                                        (100 * (e - expectedValuesPush[i][1])) /
                                                        e
                                                    ).toFixed(1) + "%"}
                                                </TableCell>
                                            </>
                                        ) : null}
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
                <Grid
                    item
                    xs={12}
                    sm={pushToDropLastDie ? 4 : 10}
                    sx={{ minHeight: { xs: "90vh", sm: 100 } }}
                >
                    {pushToDropLastDie ? (
                        <Stack alignItems="center" justifyContent="center">
                            <Box
                                borderRadius={12}
                                mt={2}
                                p={2}
                                maxWidth="20rem"
                                bgcolor={colors.gray}
                            >
                                <Typography>
                                    pdf not computed for pushing to drop the last die cause it's too
                                    hard
                                </Typography>
                            </Box>
                        </Stack>
                    ) : (
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart
                                width={4}
                                height={4}
                                data={selectedResults}
                                margin={{
                                    top: 5,
                                    right: 30,
                                    left: 20,
                                    bottom: 5,
                                }}
                            >
                                <XAxis dataKey="name" dy={0}>
                                    {/* <Label >Number of rolls until pool is depleted</Label> */}
                                </XAxis>
                                <YAxis />
                                <Tooltip
                                    cursor={{ fill: colors.gray }}
                                    contentStyle={{ backgroundColor: colors.darkGray }}
                                    labelFormatter={(value) => {
                                        return `${value} roll${
                                            value == 1 ? "" : "s"
                                        } until depletion`;
                                    }}
                                    formatter={proportionFormat}
                                />
                                {/* <Legend /> */}

                                <Bar
                                    dataKey="proportion"
                                    fill={colors.purple}
                                    activeBar={
                                        <Rectangle fill={colors.pink} stroke={colors.black} />
                                    }
                                />
                                {/* <ReferenceLine x={3.2} strokeWidth={3} stroke="red" /> */}
                            </BarChart>
                        </ResponsiveContainer>
                    )}
                </Grid>
            </Grid>
            <Dialog
                open={settingsOpen}
                onClose={(_e) => {
                    setSettingsOpen(false);
                }}
            >
                <DialogContent>
                    <h2>Advanced Settings</h2>
                    <FormGroup>
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={pushToDropLastDie}
                                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                        const checked = Boolean(e.target.checked);
                                        setPushToDropLastDie(checked);
                                    }}
                                />
                            }
                            label="Always push yourself to drop the last die"
                        />
                        {/* {remapError ? <Alert severity="error">{remapError}</Alert> : null} */}
                        <TextField
                            variant="filled"
                            value={pFraction}
                            onChange={(e) => {
                                const newValue = e.target.value;
                                setPFraction(newValue);
                            }}
                            placeholder={`Probability to drop a given die in a pool (default ${defaultP})`}
                            sx={{ minWidth: "430px" }}
                        ></TextField>
                    </FormGroup>
                </DialogContent>
            </Dialog>
        </HeaderFooter>
    );
}

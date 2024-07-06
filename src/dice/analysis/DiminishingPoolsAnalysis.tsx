import { Grid, Table, TableBody, TableCell, TableRow, TableHead } from "@mui/material";
import {
    BarChart,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    Bar,
    Rectangle,
    ResponsiveContainer,
    Label,
} from "recharts";
import data from "../../static/stats/pool_length.json";
import HeaderFooter from "../HeaderFooter";
import { useEffect, useState } from "react";
import { colors } from "../../theme";

export type BarDatum = { name: string; proportion: number };

export function proportionFormat(value: number) {
    const proportion = value > 1e-3 ? value.toFixed(3) : value === 0 ? 0 : value.toExponential(3);
    const percent = value * 100;
    const percentDisplay = percent < 1 ? percent.toPrecision(2) : percent.toPrecision(3);
    return `${proportion} (${percentDisplay}%)`;
}

export default function DiminishingPoolAnalysis() {
    const [selectedNumDice, setSelectedNumDice] = useState(6);
    const [selectedResults, setSelectedResults] = useState<BarDatum[]>([]);
    useEffect(() => {
        const row = data.find((row) => row.size === selectedNumDice);
        console.debug("row", row, selectedNumDice);
        if (row != undefined) {
            setSelectedResults(
                Object.entries(row.rolls).map(([timesRolled, proportion]) => ({
                    name: timesRolled,
                    proportion,
                }))
            );
        }
    }, [selectedNumDice]);

    return (
        <HeaderFooter title="Diminishing Pools" back="/dice">
            <Grid container>
                <Grid item xs={12} sm={2}>
                    <Table>
                        <TableBody>
                            <TableRow>
                                <TableCell>Dice</TableCell>
                                <TableCell align="right">Average rolls until depleted</TableCell>
                            </TableRow>
                            {data.map((row, i) => (
                                <TableRow
                                    key={i}
                                    hover={true}
                                    selected={row.size === selectedNumDice}
                                    onClick={() => {
                                        setSelectedNumDice(row.size);
                                    }}
                                >
                                    <TableCell>{row.size}</TableCell>
                                    <TableCell align="right">{row.mean.toFixed(3)}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </Grid>
                <Grid item xs={12} sm={10} sx={{ minHeight: { xs: "90vh", sm: 100 } }}>
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
                                    return `${value} roll${value == 1 ? "" : "s"} until depletion`;
                                }}
                                formatter={proportionFormat}
                            />
                            {/* <Legend /> */}

                            <Bar
                                dataKey="proportion"
                                fill={colors.blue}
                                activeBar={<Rectangle fill={colors.green} stroke={colors.black} />}
                            />
                            {/* <ReferenceLine x={3.2} strokeWidth={3} stroke="red" /> */}
                        </BarChart>
                    </ResponsiveContainer>
                </Grid>
            </Grid>
        </HeaderFooter>
    );
}

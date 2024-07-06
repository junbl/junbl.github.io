import { useState } from "react";
import rollsData from "../../static/stats/rolls.json";
import HeaderFooter from "../HeaderFooter";
import {
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    Select,
    SelectChangeEvent,
    Table,
    TableBody,
} from "@mui/material";
import {
    BarChart,
    Bar,
    Rectangle,
    XAxis,
    YAxis,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";

import _ from "lodash";
import { colors } from "../../theme";
import { proportionFormat } from "./DiminishingPoolsAnalysis";
const data: { [d: string]: { [t: string]: (typeof rollsData)["1"]["0"] } } = rollsData;
const barColors: { [r: string]: string } = {
    disaster: colors.red,
    grim: colors.lightGray,
    messy: colors.yellow,
    perfect: colors.green,
    critical: colors.blue,
};

const numDiceOptions = Object.keys(data).sort();
const numThornsOptions = Object.keys(data["1"]).sort();
// type Row = (typeof data)[string]["results"];

export default function RollsWithThornsAnalysis() {
    const [selectedNumDice, setSelectedNumDice] = useState("4");
    const [selectedNumThorns, setSelectedNumThorns] = useState("0");
    const selectedRow = data[selectedNumDice][selectedNumThorns];
    const maxProportion = _.max(
        Object.values(data)
            .map((r) => Object.values(r))
            .flat()
            .flat()
            .map((r) => r.proportion)
    );
    return (
        <HeaderFooter title="Rolls with Thorns" back="/dice">
            <Grid container justifyContent={"center"}>
                <Grid item>
                    <Grid container spacing={2}>
                        <Grid item>
                            <FormControl>
                                <InputLabel id="dice">Number of dice</InputLabel>
                                <Select
                                    value={selectedNumDice}
                                    label="Number of dice"
                                    labelId="dice"
                                    id="dice"
                                    onChange={(e: SelectChangeEvent) => {
                                        setSelectedNumDice(e.target.value);
                                    }}
                                    sx={{ minWidth: "300px" }}
                                >
                                    {numDiceOptions.map((opt) => (
                                        <MenuItem key={opt} value={opt}>
                                            {opt}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>
                        <Grid item>
                            <FormControl>
                                <InputLabel id="thorns">Number of thorns</InputLabel>
                                <Select
                                    value={selectedNumThorns.toString()}
                                    label="Number of thorns"
                                    labelId="thorns"
                                    id="thorns"
                                    onChange={(e: SelectChangeEvent) => {
                                        setSelectedNumThorns(e.target.value);
                                    }}
                                    sx={{ minWidth: "300px" }}
                                >
                                    {numThornsOptions.map((opt) => (
                                        <MenuItem key={opt} value={opt}>
                                            {opt}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12}>
                    <div style={{ width: "100vw", height: "60vh" }}>
                        <ResponsiveContainer>
                            <BarChart
                                width={8}
                                height={4}
                                data={selectedRow.map((r) => ({ ...r, fill: barColors[r.result] }))}
                                margin={{
                                    top: 30,
                                    right: 30,
                                    left: 30,
                                    bottom: 5,
                                }}
                            >
                                <XAxis dataKey="result" />
                                <YAxis
                                    allowDataOverflow={true}
                                    domain={[0, maxProportion ? Number((maxProportion).toPrecision(2)) : "auto"]}
                                />
                                <Tooltip
                                    cursor={{ fill: colors.gray }}
                                    contentStyle={{ backgroundColor: colors.darkGray }}
                                    formatter={proportionFormat}
                                />
                                <Bar
                                    dataKey="proportion"
                                    fill={colors.white}
                                    activeBar={<Rectangle stroke={colors.lightGray}/>}
                                />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </Grid>
            </Grid>
        </HeaderFooter>
    );
}

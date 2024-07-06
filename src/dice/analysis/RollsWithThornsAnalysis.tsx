import React, { Dispatch, SetStateAction, useState } from "react";
import rollsData from "../../static/stats/rolls.json";
import HeaderFooter from "../HeaderFooter";
import {
    FormControl,
    Grid,
    InputLabel,
    MenuItem,
    OutlinedInput,
    Select,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import { BarChart, Bar, Rectangle, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

import _ from "lodash";
import { colors } from "../../theme";
import { proportionFormat } from "./DiminishingPoolsAnalysis";
const data: Record<string, Record<string, (typeof rollsData)["1"]["0"]>> = rollsData;
const barColors: Record<string, string> = {
    disaster: colors.red,
    grim: colors.lightGray,
    messy: colors.yellow,
    perfect: colors.green,
    critical: colors.blue,
};

const numDiceOptions = Object.keys(data).sort();
const numThornsOptions = Object.keys(data["1"]).sort();
const info = (
    <>
        The data on this page was generated by simulating 10^8 rolls of a set of dice for each
        combination of the size of the dice pool and the number of thorns.
    </>
);

function NumDiceInput({
    title,
    options,
    selected,
    setSelected,
    mobileScreen,
}: {
    title: string;
    options: string[];
    selected: string;
    setSelected: Dispatch<SetStateAction<string>>;
    mobileScreen: boolean;
}) {
    const min = options[0];
    const max = options[options.length - 1];
    return (
        <FormControl>
            <InputLabel id={title}>{title}</InputLabel>
            {mobileScreen ? (
                <Select
                    value={selected}
                    type="number"
                    label={title}
                    id={title}
                    labelId={title}
                    onChange={(e) => {
                        setSelected(e.target.value);
                    }}
                    sx={{ minWidth: { sm: "250px", xs: "175px" } }}
                >
                    {options.map((option) => (
                        <MenuItem key={option} value={option}>
                            {option}
                        </MenuItem>
                    ))}
                </Select>
            ) : (
                <OutlinedInput
                    inputProps={{ min, max }}
                    value={selected}
                    type="number"
                    label={title}
                    id={title}
                    onChange={(e) => {
                        const newSelected = e.target.value;
                        if (newSelected === "") {
                            setSelected(e.target.value);
                        } else if (Number(newSelected) < Number(min)) {
                            setSelected(min);
                        } else if (Number(newSelected) > Number(max)) {
                            setSelected(max);
                        } else {
                            setSelected(e.target.value);
                        }
                    }}
                    sx={{ minWidth: { sm: "250px", xs: "175px" } }}
                />
            )}
        </FormControl>
    );
}

export default function RollsWithThornsAnalysis() {
    const theme = useTheme();
    const mobileScreen = useMediaQuery(theme.breakpoints.between("xs", "sm"));
    const [selectedNumDice, setSelectedNumDice] = useState("4");
    const [selectedNumThorns, setSelectedNumThorns] = useState("1");
    const selectedRow = (data[selectedNumDice] && data[selectedNumDice][selectedNumThorns]) || [];
    const maxProportion = _.max(
        Object.values(data)
            .map((r) => Object.values(r))
            .flat()
            .flat()
            .map((r) => r.proportion)
    );
    return (
        <HeaderFooter title="Rolls with Thorns" back="/dice" infoDialog={info}>
            <Grid container justifyContent={"center"}>
                <Grid item>
                    <Grid
                        container
                        spacing={2}
                        // marginLeft={{ xs: 5, sm: 0 }}
                    >
                        <Grid item>
                            <NumDiceInput
                                title="Number of dice"
                                options={numDiceOptions}
                                selected={selectedNumDice}
                                setSelected={setSelectedNumDice}
                                mobileScreen={mobileScreen}
                            />
                        </Grid>
                        <Grid item>
                            <NumDiceInput
                                title="Number of thorns"
                                options={numThornsOptions}
                                selected={selectedNumThorns}
                                setSelected={setSelectedNumThorns}
                                mobileScreen={mobileScreen}
                            />
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
                                    left: 5,
                                    bottom: 30,
                                }}
                            >
                                <XAxis
                                    dataKey="result"
                                    angle={mobileScreen ? -45 : 0}
                                    textAnchor={mobileScreen ? "end" : "middle"}
                                />
                                <YAxis
                                    allowDataOverflow={true}
                                    domain={[
                                        0,
                                        maxProportion
                                            ? Number(maxProportion.toPrecision(2))
                                            : "auto",
                                    ]}
                                />
                                <Tooltip
                                    cursor={{ fill: colors.gray }}
                                    contentStyle={{ backgroundColor: colors.darkGray }}
                                    formatter={proportionFormat}
                                />
                                <Bar
                                    dataKey="proportion"
                                    fill={colors.white}
                                    activeBar={<Rectangle stroke={colors.lightGray} />}
                                />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </Grid>
            </Grid>
        </HeaderFooter>
    );
}

import { Dispatch, SetStateAction, useEffect, useState } from "react";
import rollsData from "../../static/stats/rolls.json";
import rollsMathPaper from "../../static/moxie-dice-probabilities/moxie-dice-probabilities.pdf";
import HeaderFooter from "../HeaderFooter";
import {
    Tooltip as MaterialTooltip,
    Checkbox,
    Dialog,
    DialogContent,
    FormControl,
    FormControlLabel,
    FormGroup,
    Grid,
    InputLabel,
    MenuItem,
    OutlinedInput,
    Select,
    TextField,
    useMediaQuery,
    useTheme,
    Stack,
    Typography,
} from "@mui/material";
import { BarChart, Bar, Rectangle, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

import _ from "lodash";
import { colors } from "../../theme";
import { proportionFormat } from "./DiminishingPoolsAnalysis";
import binomcoef from "@stdlib/math-base-special-binomcoef";
import { parseFraction } from ".";

const data: Record<string, Record<string, (typeof rollsData)["1"]["0"]>> = rollsData;
const barColors: Record<string, string> = {
    disaster: colors.red,
    grim: colors.lightGray,
    messy: colors.yellow,
    perfect: colors.green,
    critical: colors.blue,
    double_critical: colors.purple,
};

const defaultGrim = 1 / 2;
const defaultPerfect = 1 / 6;
const defaultCut = 2 / 8;

function pdt(
    dice: number,
    thorns: number,
    mastery: number,
    remap: Record<string, number | undefined> = {}
) {
    const get_remap = (field: string, fallback: number) => remap[field] || fallback;
    const p_g1 = get_remap("grim", defaultGrim);
    const p_p1 = get_remap("perfect", defaultPerfect);

    if (p_g1 + p_p1 > 1) {
        console.error("invalid prob");
        return null;
    }

    const p_t1 = get_remap("cut", defaultCut);

    const q = (p: number) => 1 - p;
    const q_p1 = q(p_p1);

    const grim = p_g1 ** (dice + mastery);
    const messy = 1 - (p_g1 ** (dice + mastery) + (1 - q_p1 ** (dice + mastery)));
    const perfect = dice * p_p1 * q_p1 ** (dice - 1 + mastery);
    const critical =
        mastery * p_p1 * q_p1 ** (mastery - 1 + dice) +
        (1 - (q_p1 ** dice + dice * p_p1 * q_p1 ** (dice - 1))) * q_p1 ** mastery;
    const doubleCritical =
        1 -
        (q_p1 ** mastery + mastery * p_p1 * q_p1 ** (mastery - 1)) +
        mastery * p_p1 * q_p1 ** (mastery - 1) * (1 - q_p1 ** dice);

    const totalPreThorns = grim + messy + perfect + critical + doubleCritical;
    if (Math.abs(totalPreThorns - 1) > 0.001) {
        console.error(
            "pre-thorns didn't add up to 1:",
            totalPreThorns,
            grim,
            messy,
            perfect,
            critical,
            doubleCritical
        );
    }

    const p_cuts = (cuts: number) =>
        binomcoef(thorns, cuts) * p_t1 ** cuts * q(p_t1) ** (thorns - cuts);

    const p_disaster =
        grim * (1 - p_cuts(0)) +
        messy * (1 - (p_cuts(0) + p_cuts(1))) +
        perfect * (1 - (p_cuts(0) + p_cuts(1) + p_cuts(2)));
    const p_grim = grim * p_cuts(0) + messy * p_cuts(1) + perfect * p_cuts(2);
    const p_messy = messy * p_cuts(0) + perfect * p_cuts(1);
    const p_perfect = perfect * p_cuts(0);
    const p_critical = critical;
    const p_doubleCritical = doubleCritical;

    const total_post_thorns = p_grim + p_messy + p_perfect + p_critical + p_doubleCritical;
    if (Math.abs(totalPreThorns - 1) > 0.001) {
        console.error(
            "post-thorns didn't add up to 1:",
            total_post_thorns,
            p_disaster,
            p_grim,
            p_messy,
            p_perfect,
            p_critical,
            p_doubleCritical
        );
    }

    return {
        disaster: p_disaster,
        grim: p_grim,
        messy: p_messy,
        perfect: p_perfect,
        critical: p_critical,
        double_critical: p_doubleCritical,
    };
}

function NumDiceInput({
    title,
    selected,
    setSelected,
    mobileScreen,
}: {
    title: string;
    selected: string;
    setSelected: Dispatch<SetStateAction<string>>;
    mobileScreen: boolean;
}) {
    const options = _.range(100);
    const min = 0;
    const onChange = (newSelected: string) => {
        if (newSelected === "" || Number(newSelected) < Number(min)) {
            setSelected(min.toString());
        } else {
            setSelected(Number(newSelected).toString());
        }
    };
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
                    onChange={(e) => onChange(e.target.value)}
                    sx={{ minWidth: { sm: "96px", xs: "96px" } }}
                >
                    {options.map((option) => (
                        <MenuItem key={option} value={option}>
                            {option}
                        </MenuItem>
                    ))}
                </Select>
            ) : (
                <OutlinedInput
                    value={selected}
                    type="number"
                    label={title}
                    id={title}
                    onChange={(e) => onChange(e.target.value)}
                    sx={{ minWidth: { sm: "175px", xs: "175px" }, maxWidth: { sm: "175px" } }}
                    inputProps={{ style: { fontSize: 40 } }}
                />
            )}
        </FormControl>
    );
}

export default function RollsWithThornsAnalysis() {
    const theme = useTheme();
    const mobileScreen = useMediaQuery(theme.breakpoints.between("xs", "sm"));

    const [selectedNumDice, setSelectedNumDice] = useState("3");
    const [selectedNumThorns, setSelectedNumThorns] = useState("1");
    const [selectedNumMastery, setSelectedNumMastery] = useState("0");
    const [settingsOpen, setSettingsOpen] = useState(false);

    const [fivesAsSixesFoursAsOnes, setFivesAsSixesFoursAsOnes] = useState(false);
    const [grimProb, setGrimProb] = useState("");
    const [perfectProb, setPerfectProb] = useState("");
    const [cutProb, setCutProb] = useState("");
    const [remapError, setRemapError] = useState<string | null>(null);

    const selectedRow = (data[selectedNumDice] && data[selectedNumDice][selectedNumThorns]) || [];
    const remap: Record<string, number | undefined> = {};

    if (grimProb != null) {
        remap["grim"] = parseFraction(grimProb);
    }
    if (perfectProb != null) {
        remap["perfect"] = parseFraction(perfectProb);
    }
    if (cutProb != null) {
        remap["cut"] = parseFraction(cutProb);
    }

    const [selectedProportions, setSelectedProportions] = useState(
        pdt(
            Number(selectedNumDice),
            Number(selectedNumThorns),
            Number(selectedNumMastery),
            remap
        ) || {
            disaster: 0,
            grim: 0,
            messy: 0,
            perfect: 0,
            critical: 0,
            double_critical: 0,
        }
    );
    useEffect(() => {
        console.debug("recomputing probabilities", remap);
        const p = pdt(
            Number(selectedNumDice),
            Number(selectedNumThorns),
            Number(selectedNumMastery),
            remap
        );
        if (p == null) {
            setRemapError("Invalid probability remap specified!");
        } else {
            setRemapError(null);
            setSelectedProportions(p);
        }
    }, [JSON.stringify(remap), selectedNumDice, selectedNumThorns, selectedNumMastery]);

    if (Number(selectedNumMastery) == 0 && _.isEmpty(remap)) {
        let totalAnalytical = 0;
        for (const [result, proportion] of Object.entries(selectedProportions)) {
            totalAnalytical += proportion;
            let totalMonteCarlo = 0;
            for (const resultMonteCarlo of selectedRow) {
                totalMonteCarlo += resultMonteCarlo.proportion;
                if (result == resultMonteCarlo.result) {
                    if (Math.abs(proportion - resultMonteCarlo.proportion) > 0.01) {
                        console.error(
                            "Didn't match!",
                            selectedNumDice,
                            selectedNumThorns,
                            result,
                            proportion,
                            resultMonteCarlo.proportion
                        );
                    }
                }
            }
            if (!_.isEmpty(selectedRow) && Math.abs(totalMonteCarlo - 1) > 0.001) {
                console.error(
                    "mc Didn't add up!",
                    selectedNumDice,
                    selectedNumThorns,
                    totalMonteCarlo,
                    proportion,
                    selectedRow
                );
            }
        }
        if (Math.abs(totalAnalytical - 1) > 0.001) {
            console.error("a Didn't add up!", selectedNumDice, selectedNumThorns, totalAnalytical);
        }
    }

    console.log(
        selectedNumDice,
        selectedNumThorns,
        selectedNumMastery,
        selectedProportions,
        selectedRow
    );
    const maxProportion = _.max(
        Object.values(data)
            .map((r) => Object.values(r))
            .flat()
            .flat()
            .map((r) => r.proportion)
    );
    return (
        <HeaderFooter
            title="Rolls with Thorns"
            back="/dice"
            infoFile={rollsMathPaper}
            settingsDialogOpen={settingsOpen}
            setSettingsDialogOpen={setSettingsOpen}
        >
            <Grid
                container
                justifyContent={"center"}
                marginLeft={{ xs: 1, sm: 0 }}
                marginRight={{ xs: 1, sm: 0 }}
            >
                <Grid item>
                    <Grid container spacing={2}>
                        <Grid item>
                            <NumDiceInput
                                title="Dice"
                                selected={selectedNumDice}
                                setSelected={setSelectedNumDice}
                                mobileScreen={mobileScreen}
                            />
                        </Grid>
                        <Grid item>
                            <NumDiceInput
                                title="Thorns"
                                selected={selectedNumThorns}
                                setSelected={setSelectedNumThorns}
                                mobileScreen={mobileScreen}
                            />
                        </Grid>
                        <Grid item>
                            <NumDiceInput
                                title="Mastery Dice"
                                selected={selectedNumMastery}
                                setSelected={setSelectedNumMastery}
                                mobileScreen={mobileScreen}
                            />
                        </Grid>
                        <Grid item>
                            <MaterialTooltip title="The average number of consequences you'll get on this roll. Includes the probability of a disaster, grim, or messy, with disaster weighted twice as much.">
                                <Stack spacing={0}>
                                    <Typography variant="h2" component="h3">
                                        {(
                                            selectedProportions.messy +
                                            selectedProportions.grim +
                                            selectedProportions.disaster * 2
                                        ).toFixed(2)}
                                    </Typography>
                                    <>Consequences</>
                                </Stack>
                            </MaterialTooltip>
                        </Grid>
                        <Grid item>
                            <MaterialTooltip title="The average number of successes you'll get on this roll. Includes the probability of a messy, perfect, or critical, with critical weighted twice as much.">
                                <Stack spacing={0}>
                                    <Typography variant="h2" component="h3">
                                        {(
                                            selectedProportions.messy +
                                            selectedProportions.perfect +
                                            selectedProportions.critical * 2 +
                                            selectedProportions.double_critical * 2
                                        ).toFixed(2)}
                                    </Typography>
                                    <>Successes</>
                                </Stack>
                            </MaterialTooltip>
                        </Grid>
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
                        <p>
                            These controls allow you to change the distribution of results on a
                            single die roll from Moxie's default spread of Grim = 1/2, Messy = 1/3,
                            Perfect = 1/6.
                        </p>
                        <FormGroup>
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        checked={fivesAsSixesFoursAsOnes}
                                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                            const checked = Boolean(e.target.checked);
                                            setFivesAsSixesFoursAsOnes(checked);
                                            if (checked) {
                                                setGrimProb("2/3");
                                                setPerfectProb("1/3");
                                            } else {
                                                setGrimProb("");
                                                setPerfectProb("");
                                            }
                                        }}
                                    />
                                }
                                label="5s count as 6s, 4s count as 1s"
                            />
                            {/* {remapError ? <Alert severity="error">{remapError}</Alert> : null} */}
                            <TextField
                                variant="outlined"
                                value={grimProb}
                                disabled={fivesAsSixesFoursAsOnes}
                                onChange={(e) => {
                                    const newValue = e.target.value;
                                    setGrimProb(newValue);
                                }}
                                placeholder={`Probability to roll a Grim on a single die (default ${defaultGrim.toFixed(
                                    2
                                )}).`}
                                sx={{ minWidth: "270px" }}
                            ></TextField>

                            <TextField
                                variant="outlined"
                                value={perfectProb}
                                disabled={fivesAsSixesFoursAsOnes}
                                onChange={(e) => {
                                    const newValue = e.target.value;
                                    setPerfectProb(newValue);
                                }}
                                placeholder={`Probability to roll a Perfect on a single die (default ${defaultPerfect.toFixed(
                                    2
                                )}).`}
                                sx={{ minWidth: "270px" }}
                            ></TextField>
                            <TextField
                                variant="outlined"
                                value={cutProb}
                                onChange={(e) => {
                                    const newValue = e.target.value;
                                    setCutProb(newValue);
                                }}
                                placeholder={`Probability for a single thorn to cut a roll (default ${defaultCut.toFixed(
                                    2
                                )}).`}
                                sx={{ minWidth: "270px" }}
                            ></TextField>
                        </FormGroup>
                    </DialogContent>
                </Dialog>

                <Grid item xs={12}>
                    <div style={{ width: "100vw", height: "60vh" }}>
                        <ResponsiveContainer>
                            <BarChart
                                width={8}
                                height={4}
                                data={Object.entries(selectedProportions).map(([r, p]) => ({
                                    result: r.replace("_", " "),
                                    proportion: p,
                                    fill: barColors[r],
                                }))}
                                margin={{
                                    top: 30,
                                    right: 30,
                                    left: 5,
                                    bottom: 60,
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

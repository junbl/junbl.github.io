import { Button, Grid } from "@mui/material";

export default function Home() {
  return (
    <Grid container>
      <Grid item>
        <Button size="large">Spell Crucible</Button>
      </Grid>
      <Grid item>
        <Button size="large">GM Crucible</Button>
      </Grid>
    </Grid>
  );
}

import * as React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import NextActivity from "./nextActivity";
import Groups from "./groups";
import ActivitiesList from "./activitiesList";
import { Button } from "@mui/material";
import "./home.css";

function HomeContent() {
  const [open, setOpen] = React.useState(true);

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container spacing={3}>
        {/* New event */}
        <Grid container justifyContent="flex-end" alignItems="baseline">
          <Grid item xs={0} md={8} lg={10} />
          <Grid item xs={2} md={2} lg={2} display="contents">
            <Button variant="contained">Crear evento</Button>
          </Grid>
        </Grid>
        {/* NextActivity */}
        <Grid item xs={12} md={8} lg={8}>
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              height: 240,
            }}
          >
            <NextActivity />
          </Paper>
        </Grid>
        {/* Recent Deposits */}
        <Grid item xs={12} md={4} lg={4}>
          <Paper
            sx={{
              p: 2,
              display: "flex",
              flexDirection: "column",
              height: 240,
            }}
          >
            <Groups />
          </Paper>
        </Grid>
        {/* Activities list */}
        <Grid item xs={12}>
          <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
            <ActivitiesList />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default function Home() {
  return <HomeContent />;
}

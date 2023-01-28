import * as React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import ActivityOptions from "./activityOptions";

export default function ActivitiesList() {
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container>
        {/* NewFriend */}
        <Grid item xs={12} md={12} lg={12}>
          <Paper
            sx={{
              p: 5,
              display: "flex",
              flexDirection: "column",
              height: "90vh",
            }}
          >
            <ActivityOptions />
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

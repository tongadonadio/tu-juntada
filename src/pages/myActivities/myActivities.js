import * as React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Calendar from "./calendar";

export default function MyActivities() {
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
              height: "80vh",
            }}
          >
            <Box
              sx={{
                my: 8,
                mx: 4,
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Calendar />
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

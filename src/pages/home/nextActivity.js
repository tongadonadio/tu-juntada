import * as React from "react";
import Grid from "@mui/material/Grid";
import Title from "./title";
import BbqImg from "../../assets/images/asado.jpeg";
import { Button } from "@mui/material";

export default function NextActivity() {
  return (
    <React.Fragment>
      <Title>Próxima actividad</Title>
      <Grid container xs={12} md={12} lg={12} height="80%">
        <Grid item xs={12} md={9} lg={9} height="100%" paddingRight="20px">
          <img src={BbqImg} alt="Next activity" className="next-activity-img" />
        </Grid>
        <Grid container xs={12} md={3} lg={3} alignItems="center">
          <Grid item xs={12} md={12} lg={12}>
            <Button variant="contained" fullWidth>
              Aceptar
            </Button>
          </Grid>
          <Grid item xs={12} md={12} lg={12}>
            <Button variant="contained" color="error" fullWidth>
              Rechazar
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

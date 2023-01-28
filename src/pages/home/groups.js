import * as React from "react";
import Title from "./title";
import GroupImg from "../../assets/images/group.png";
import { Grid } from "@mui/material";

function preventDefault(event) {
  event.preventDefault();
}

export default function Groups() {
  return (
    <React.Fragment>
      <Title>Grupos</Title>
      <Grid cointainer height="90%" textAlign="center">
        <Grid item height="100%">
          <img src={GroupImg} alt="Group" className="group-img" />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

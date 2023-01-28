import * as React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Event from "@mui/icons-material/Event";
import FriendsIcon from "@mui/icons-material/Group";
import Diversity from "@mui/icons-material/Diversity3";
import ListIcon from "@mui/icons-material/FormatListNumberedRtl";
import { Link } from "react-router-dom";

export const mainListItems = (
  <React.Fragment>
    <ListItemButton component={Link} to="/friends">
      <ListItemIcon>
        <FriendsIcon />
      </ListItemIcon>
      <ListItemText primary="Amigos" />
    </ListItemButton>
    <ListItemButton component={Link} to="/groups">
      <ListItemIcon>
        <Diversity />
      </ListItemIcon>
      <ListItemText primary="Grupos" />
    </ListItemButton>
    <ListItemButton component={Link} to="/my-activities">
      <ListItemIcon>
        <Event />
      </ListItemIcon>
      <ListItemText primary="Mis actividades" />
    </ListItemButton>
    <ListItemButton component={Link} to="/activities-list">
      <ListItemIcon>
        <ListIcon />
      </ListItemIcon>
      <ListItemText primary="Lista de actividades" />
    </ListItemButton>
  </React.Fragment>
);

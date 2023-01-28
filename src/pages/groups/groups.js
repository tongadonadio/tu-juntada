import * as React from "react";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import NotificationsIcon from "@mui/icons-material/Notifications";
import {
  Avatar,
  Button,
  ListItem,
  ListItemAvatar,
  ListItemText,
  TextField,
} from "@mui/material";
import FriendsList from "./listFriends";

const Demo = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  marginTop: "40px",
}));

const groupsList = [
  { id: 1, name: "Ortitos" },
  { id: 2, name: "KobaSports" },
  { id: 3, name: "English" },
  { id: 4, name: "KobaSoftware" },
];

export default function Groups() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container>
        <Grid item xs={12} md={12} lg={12}>
          <Paper
            sx={{
              p: 5,
              display: "flex",
              flexDirection: "column",
              height: "80vh",
            }}
          >
            <Grid container>
              <Grid item xs={12} md={12} lg={4} sx={{ my: 8 }}>
                <Typography component="h1" variant="h5" paddingLeft="20px">
                  Grupos
                </Typography>
                <Demo>
                  <List>
                    {groupsList.map((group) => {
                      return (
                        <ListItem>
                          <ListItemAvatar>
                            <Avatar alt={"Avatar"} src={`/`} />
                          </ListItemAvatar>
                          <ListItemText primary={group.name} />
                        </ListItem>
                      );
                    })}
                  </List>
                </Demo>
              </Grid>
              <Divider orientation="vertical" flexItem />
              <Grid item xs={12} md={12} lg={7}>
                <Box
                  sx={{
                    my: 8,
                    mx: 4,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Typography component="h1" variant="h5">
                    Crear nuevo grupo
                  </Typography>
                  <Box
                    component="form"
                    noValidate
                    onSubmit={handleSubmit}
                    sx={{ mt: 5, width: "50%" }}
                  >
                    <TextField
                      margin="normal"
                      fullWidth
                      label="Nombre del grupo"
                      autoFocus
                    />
                    <FriendsList />
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 5 }}
                    >
                      Crear
                    </Button>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import {
  Avatar,
  Button,
  ListItem,
  ListItemAvatar,
  ListItemText,
  TextField,
} from "@mui/material";

const Demo = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  marginTop: "40px",
}));

const friendsList = [
  { id: 1, name: "Raphael", lastName: "Murphy" },
  { id: 2, name: "Azaan", lastName: "Fowler" },
  { id: 3, name: "Rebekah", lastName: "Vazquez" },
  { id: 4, name: "Amelia", lastName: "Hancock" },
  { id: 5, name: "Isra", lastName: "Krueger" },
];

export default function Friends() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({ data });
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <Grid container>
        <Grid item xs={12} md={12} lg={12}>
          <Paper
            sx={{
              p: 5,
              display: "flex",
              height: "80vh",
            }}
          >
            <Grid container>
              <Grid item xs={12} md={12} lg={4} sx={{ my: 8 }}>
                <Typography component="h1" variant="h5" paddingLeft="20px">
                  Lista de amigos
                </Typography>
                <Demo>
                  <List>
                    {friendsList.map((friend) => {
                      return (
                        <ListItem>
                          <ListItemAvatar>
                            <Avatar alt={"Avatar"} src={`/`} />
                          </ListItemAvatar>
                          <ListItemText
                            primary={friend.name + " " + friend.lastName}
                          />
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
                    Agregar un amigo
                  </Typography>
                  <Box
                    component="form"
                    noValidate
                    onSubmit={handleSubmit}
                    sx={{ mt: 5 }}
                  >
                    <TextField
                      margin="normal"
                      fullWidth
                      label="Apodo"
                      autoFocus
                    />
                    <TextField margin="normal" fullWidth label="Mail" />
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 5 }}
                    >
                      Agregar
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

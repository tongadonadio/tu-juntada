import * as React from "react";
import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import BbqActivityImg from "../../assets/images/bbq-activity.jpeg";
import DayOffActivityImg from "../../assets/images/day-off-activity.jpeg";
import GamesActivityImg from "../../assets/images/games-activity.jpeg";
import FootballActivityImg from "../../assets/images/football-activity.jpeg";
import SnackActivityImg from "../../assets/images/snack-activity.jpeg";
import WeekendActivityImg from "../../assets/images/weekend-activity.jpeg";

export default function ActivityOptions() {
  const activities = [
    {
      id: 1,
      name: "Parrillada con amigos",
      description:
        "Podrás juntarte con tus amigos a disfrutar de una rica parrillada. En caso de ser necesario te facilitamos el lugar, la comida e incluso el asador.",
      image: BbqActivityImg,
    },
    {
      id: 2,
      name: "Escapada de fin de semana ",
      description:
        "Podrás hacerte una escapada con tus amigos sin preocuparte de nada. Te queres ir a BsAs a salir de joda con tus amigos? Nosotros te lo organizamos.",
      image: WeekendActivityImg,
    },
    {
      id: 3,
      name: "Day off",
      description: "Podrás organizar un día libre para vos y tu grupo.",
      image: DayOffActivityImg,
    },
    {
      id: 4,
      name: "Noche de juegos",
      description:
        "Si lo que te gustan son los juegos, podráas organizar una reunión con amigos para poder jugar a lo que quieras. Si no tenés el juego, nosotros te lo facilitamos.",
      image: GamesActivityImg,
    },
    {
      id: 5,
      name: "Merienda",
      description:
        "Si sos mas tranqui y queres juntarte en la tarde para ponerte al día con tus amigos, nosotros te coordinamos el lugar",
      image: SnackActivityImg,
    },
    {
      id: 6,
      name: "Futbol",
      description:
        "Sos de ese grupo de amigos que siempre quieren jugar al futbol pero nadie organiza? nosotros te ayudamos.",
      image: FootballActivityImg,
    },
  ];

  return (
    <Grid container spacing={3}>
      {activities.map((act) => {
        return (
          <Grid item xs={12} md={6} lg={4}>
            <Card
              sx={{
                maxWidth: 345,
                p: 2,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <CardMedia
                sx={{ height: 140 }}
                image={act.image}
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {act.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {act.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        );
      })}
    </Grid>
  );
}

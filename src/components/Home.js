import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea, Grid } from "@mui/material";

export default function Home() {
  window.addEventListener("scroll", reveal);
  function reveal() {
    let cardAnimations = document.querySelectorAll(".card-animation");
    for (let i = 0; i < cardAnimations.length; i++) {
      let winHeight = window.innerHeight;
      let revealTop = cardAnimations[i].getBoundingClientRect().top;
      let revealPoint = 10;

      if (revealTop < winHeight - revealPoint) {
        cardAnimations[i].classList.add("active-animation");
      } else {
        cardAnimations[i].classList.remove("active-animation");
      }
    }
  }

  return (
    <Grid container my={6} sx={{ justifyContent: "center", display: "flex" }}>
      <Grid item>
        <Box p={2} className="card-animation">
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="./img/question.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Question
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Poser des questions
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Box>
      </Grid>
      <Grid item>
        <Box p={2} className="card-animation">
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="./img/reponse.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Reponse
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Répondre a des questions
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Box>
      </Grid>
      <Grid item>
        <Box p={2} className="card-animation">
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image="./img/recherche_question.jpg"
                alt="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Recherche
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Rechercher des questions ou réponses
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Box>
      </Grid>
    </Grid>
  );
}

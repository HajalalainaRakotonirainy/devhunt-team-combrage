import React from "react";
import { Grid, Card, CardContent, Typography } from "@mui/material";
import Navbar from "./Navbar";

function Contact() {
  return (
    <>
      <Navbar />
      <Grid
        container
        spacing={4}
        sx={{ justifyContent: "center", alignItems: "center", height: "100vh" }}
      >
        <Grid item xs={12}>
          <Typography variant="h4" align="center">
            Contactez-nous
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Card sx={{ maxWidth: 345 }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                John Doe
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Adresse e-mail: johndoe@example.com
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Numéro de téléphone: +1 123 456 7890
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Compte GitHub: @johndoe
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Nom Facebook: John Doe
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Card sx={{ maxWidth: 345 }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Jane Doe
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Adresse e-mail: janedoe@example.com
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Numéro de téléphone: +1 123 456 7890
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Compte GitHub: @janedoe
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Nom Facebook: Jane Doe
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Card sx={{ maxWidth: 345 }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Alex Smith
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Adresse e-mail: alexsmith@example.com
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Numéro de téléphone: +1 123 456
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Compte GitHub: @alexsmith
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Nom Facebook: Alex Smith
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Card sx={{ maxWidth: 345 }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Sarah Johnson
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Adresse e-mail: sarahjohnson@example.com
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Numéro de téléphone: +1 123 456 7890
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Compte GitHub: @sarahjohnson
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Nom Facebook: Sarah Johnson
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Card sx={{ maxWidth: 345 }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                David Lee
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Adresse e-mail: davidlee@example.com
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Numéro de téléphone: +1 123 456 7890
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Compte GitHub: @davidlee
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Nom Facebook: David Lee
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}

export default Contact;

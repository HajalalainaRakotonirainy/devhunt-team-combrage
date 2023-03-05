import React from "react";
import { Grid, Card, CardContent, Typography, Box } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import Navbar from "./Navbar";

function Contact() {
  return (
    <>
      <Navbar />
      <Grid
        container
        spacing={1}
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
                RAVELOSAONA John Arnoud
              </Typography>
              <Box display="flex" alignItems="center">
                <EmailIcon sx={{ mr: 1 }} />
                <Typography variant="body1">johnarnoud35@gmail.com</Typography>
              </Box>
              <Box display="flex" alignItems="center">
                <PhoneIcon color="success" sx={{ mr: 1 }} />
                <Typography variant="body1">034 15 515 88</Typography>
              </Box>
              <Box display="flex" alignItems="center">
                <GitHubIcon sx={{ mr: 1 }} />
                <Typography variant="body1">Arnoud35</Typography>
              </Box>
              <Box display="flex" alignItems="center">
                <FacebookIcon color="primary" sx={{ mr: 1 }} />
                <Typography variant="body1">John Arnoud</Typography>
              </Box>
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
          <Card sx={{ width: 345 }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                SAMBO Tsimagnova
              </Typography>
              <Box display="flex" alignItems="center">
                <EmailIcon sx={{ mr: 1 }} />
                <Typography variant="body1">tsimagnova@gmail.com</Typography>
              </Box>
              <Box display="flex" alignItems="center">
                <PhoneIcon color="success" sx={{ mr: 1 }} />
                <Typography variant="body1">034 19 317 83</Typography>
              </Box>
              <Box display="flex" alignItems="center">
                <GitHubIcon sx={{ mr: 1 }} />
                <Typography variant="body1">Tsimagnova</Typography>
              </Box>
              <Box display="flex" alignItems="center">
                <FacebookIcon color="primary" sx={{ mr: 1 }} />
                <Typography variant="body1">Fazio Sam's Bateau</Typography>
              </Box>
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
                RAKOTONIRAINY Hajalalaina
              </Typography>
              <Box display="flex" alignItems="center">
                <EmailIcon sx={{ mr: 1 }} />
                <Typography variant="body1">rakotonirainyhajalalaina@gmail.com</Typography>
              </Box>
              <Box display="flex" alignItems="center">
                <PhoneIcon color="success" sx={{ mr: 1 }} />
                <Typography variant="body1">034 68 810 23</Typography>
              </Box>
              <Box display="flex" alignItems="center">
                <GitHubIcon sx={{ mr: 1 }} />
                <Typography variant="body1">Hajalalaina</Typography>
              </Box>
              <Box display="flex" alignItems="center">
                <FacebookIcon color="primary" sx={{ mr: 1 }} />
                <Typography variant="body1">RAKOTONIRAINY Hajalalaina</Typography>
              </Box>
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
                RANDRIAMORAZATRA Hery Fleurio
              </Typography>
              <Box display="flex" alignItems="center">
                <EmailIcon sx={{ mr: 1 }} />
                <Typography variant="body1">randriamorazatraheryfleurio@gmail.com</Typography>
              </Box>
              <Box display="flex" alignItems="center">
                <PhoneIcon color="success" sx={{ mr: 1 }} />
                <Typography variant="body1">034 08 328 90</Typography>
              </Box>
              <Box display="flex" alignItems="center">
                <GitHubIcon sx={{ mr: 1 }} />
                <Typography variant="body1">HeryFleurio</Typography>
              </Box>
              <Box display="flex" alignItems="center">
                <FacebookIcon color="primary" sx={{ mr: 1 }} />
                <Typography variant="body1">Hery Fleurio</Typography>
              </Box>
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
                RAKOTONIRINA Mickaël Yannick
              </Typography>
              <Box display="flex" alignItems="center">
                <EmailIcon sx={{ mr: 1 }} />
                <Typography variant="body1">nickkise27@gmail.com</Typography>
              </Box>
              <Box display="flex" alignItems="center">
                <PhoneIcon color="success" sx={{ mr: 1 }} />
                <Typography variant="body1">034 65 007 81</Typography>
              </Box>
              <Box display="flex" alignItems="center">
                <GitHubIcon sx={{ mr: 1 }} />
                <Typography variant="body1">MikeYannick</Typography>
              </Box>
              <Box display="flex" alignItems="center">
                <FacebookIcon color="primary" sx={{ mr: 1 }} />
                <Typography variant="body1">Yannick Vivaldi</Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}

export default Contact;

import * as React from "react";
import { useState } from "react";
import PropTypes from "prop-types";
import Toolbar from "@mui/material/Toolbar";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { Fab, Fade, Modal, TextField, Typography } from "@mui/material";
import Navbar from "./Navbar";
import { Button } from "@mui/material";
import { styled } from "@mui/system";
import axiosInstance from "../services/axios";
import { toast, ToastContainer } from "react-toastify";

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
}

ElevationScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

const LinkButton = styled(Button)({
  borderRadius: "20px",
  textDecoration: "none",
  marginTop: "20px",
  padding: "10px",
  transition: "all 0.5s ease",
  "&:hover": {
    transform: "translateY(-2px)",
    boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.2)",
    backgroundColor: "black",
  },
});

function ScrollTop(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({
        block: "center",
        behavior: "smooth",
      });
    }
  };

  return (
    <Fade in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: "fixed", bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Fade>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function ElevateAppBar(props) {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axiosInstance.get("/users/me");
      const data = {
        titre: title,
        description: description,
        user_id: response.data.user_id,
        reponse: false,
      };
      axiosInstance
        .post("/question/create", data)
        .then((res) => {
          toast.success("Question posée avec succés !", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        })
        .catch((err) => {
          console.log(err);
          toast.error(err.response, {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        });
    } catch (error) {
      alert(error);
    }

    setOpen(false);
  };
  return (
    <React.Fragment>
      <ToastContainer />
      <CssBaseline />
      <ElevationScroll {...props}>
        <Navbar />
      </ElevationScroll>
      <Toolbar id="back-to-top-anchor" sx={{ position: "absolute", top: 0 }} />
      <>
        <Box
          component="img"
          src="./img/jumbotron.webp"
          width="100%"
          height="650px"
        />
        <Typography
          color="white"
          sx={{
            position: "absolute",
            top: "150px",
            zIndex: 10,
            fontSize: "100px",
          }}
        ></Typography>
        <section className="home">
          <div className="container">
            <div className="row">
              <div className="home-text">
                <h1>On peut poser des questions à propos</h1>
                <p className="animate-text">
                  <span>de la programmation</span>
                  <span>des systèmes d'exploitations</span>
                  <span>des réseaux</span>
                  <span>de l'intelligence artificielle</span>
                  <span>du DevOps</span>
                </p>
                <LinkButton onClick={() => setOpen(true)} variant="contained">
                  Poser une question
                </LinkButton>
                <Modal open={open} onClose={() => setOpen(false)}>
                  <Box
                    sx={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%, -50%)",
                      width: 400,
                      bgcolor: "background.paper",
                      boxShadow: 24,
                      p: 4,
                    }}
                  >
                    <TextField
                      id="title"
                      label="Titre de la question"
                      variant="outlined"
                      required
                      fullWidth
                      sx={{ mb: 3 }}
                      value={title}
                      onChange={(event) => setTitle(event.target.value)}
                    />
                    <TextField
                      id="description"
                      label="Description de la question"
                      variant="outlined"
                      required
                      fullWidth
                      multiline
                      rows={4}
                      sx={{ mb: 3 }}
                      value={description}
                      onChange={(event) => setDescription(event.target.value)}
                    />
                    <Button
                      variant="contained"
                      fullWidth
                      type="submit"
                      onClick={handleSubmit}
                    >
                      Poser la question
                    </Button>
                  </Box>
                </Modal>
              </div>
            </div>
          </div>
        </section>
      </>
      <ScrollTop {...props}>
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </React.Fragment>
  );
}

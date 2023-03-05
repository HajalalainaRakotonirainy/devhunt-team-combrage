import { useState } from "react";
import { TextField, Button, Box, Typography, Link } from "@mui/material";
import Footer from "./Footer";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";

function Register() {
  const [formValues, setFormValues] = useState({
    matricule: "",
    role: 0,
    first_name: "",
    last_name: "",
    password: "",
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/v1/users/create", formValues)
      .then((res) => {
        toast.success("Compte crée avec succés !", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        e.target.reset();
        setFormValues({
          matricule: "",
          role: 0,
          first_name: "",
          last_name: "",
          password: "",
        });
      })
      .catch((error) => {
        toast.error(error.response.data.detail, {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        e.target.reset();
        setFormValues({
          matricule: "",
          role: 0,
          first_name: "",
          last_name: "",
          password: "",
        });
        // logs the error response data
      });
    // Do something with the form data
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
      }}
    >
      <Box
        sx={{
          width: "100%",
          height: "100vh",
          backgroundSize: "cover",
          backgroundImage: 'url("./img/auth.jpg")',
        }}
      ></Box>
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
          p: 2,
          minWidth: "550px",
        }}
        onSubmit={handleFormSubmit}
      >
        <Typography variant="h5" mb={3}>
          Enregistrez-vous ici
        </Typography>
        <TextField
          fullWidth
          required
          label="Numéro de matricule"
          name="matricule"
          value={formValues.matricule}
          onChange={handleInputChange}
        />
        <TextField
          fullWidth
          required
          label="Nom"
          name="first_name"
          value={formValues.first_name}
          onChange={handleInputChange}
        />
        <TextField
          fullWidth
          required
          label="Prénom"
          name="last_name"
          value={formValues.last_name}
          onChange={handleInputChange}
        />
        <TextField
          fullWidth
          required
          type="password"
          label="Mot de passe"
          name="password"
          value={formValues.password}
          onChange={handleInputChange}
        />
        <Button type="submit" fullWidth variant="contained">
          Enregistrer
        </Button>
        <Typography variant="subtitle1">
          Vous avez déjà un compte?{" "}
          <Link href="/" underline="hover">
            Se connecter
          </Link>
        </Typography>
        <Footer />
      </Box>
      <ToastContainer />
    </Box>
  );
}

export default Register;

import { useState } from 'react';
import { TextField, Button, Box, Typography, Link } from '@mui/material';
import Footer from './Footer';

function Register() {
    const [formValues, setFormValues] = useState({
        matricule: '',
        nom: '',
        prenom: '',
        email: '',
        password: '',
    });

    const handleFormSubmit = (e) => {
        e.preventDefault();
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
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                minHeight: '100vh',
            }}
        >
            <Box
                sx={{
                    width: '100%',
                    height: '100vh',
                    backgroundSize: 'cover',
                    backgroundImage: 'url("./img/auth.jpg")',
                }}
            ></Box>
            <Box
                component="form"
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: 2,
                    p: 2,
                    minWidth: '550px',
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
                    name="nom"
                    value={formValues.nom}
                    onChange={handleInputChange}
                />
                <TextField
                    fullWidth
                    required
                    label="Prénom"
                    name="prenom"
                    value={formValues.prenom}
                    onChange={handleInputChange}
                />
                <TextField
                    fullWidth
                    required
                    type="email"
                    label="Adresse e-mail"
                    name="email"
                    value={formValues.email}
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
                    Vous avez déjà un compte? {" "}
                    <Link href="/" underline="hover">
                        Se connecter
                    </Link>
                </Typography>
                <Footer/>
            </Box>
        </Box>
    );
}

export default Register;

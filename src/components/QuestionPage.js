import React, { useState } from 'react';
import { Box, Button, TextField, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material';
import axiosInstance from '../services/axios';
import { toast } from 'react-toastify';

function QuestionPage({id}) {
  const [answerText, setAnswerText] = useState('');
  const [open, setOpen] = useState(false);


  const handleAnswerChange = (event) => {
    setAnswerText(event.target.value);
  };

  const handleAnswerSubmit = async() => {
    // Envoi de la nouvelle réponse à la BDD
    try {
      const response = await axiosInstance.get("/users/me");
      const data = {
        question_id: id,
        description: answerText,
        user_id: response.data.user_id,
      };
      axiosInstance
        .post("/reponse/create", data)
        .then((res) => {
          toast.success("réponse envoyé avec succés !", {
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

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ p: 2 }}>

      <Button variant="contained" color="primary" onClick={handleOpen} sx={{ mt: 4 }}>Répondre</Button>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Poster une réponse</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Entrez votre réponse ci-dessous :
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            label="Réponse"
            fullWidth
            multiline
            rows={4}
            value={answerText}
            onChange={handleAnswerChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Annuler</Button>
          <Button onClick={handleAnswerSubmit} color="primary">Poster</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default QuestionPage;
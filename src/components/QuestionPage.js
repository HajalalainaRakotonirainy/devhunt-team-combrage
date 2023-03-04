import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Box, Button, TextField, Typography, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material';
import axios from 'axios';

function QuestionPage() {
  const { id } = useParams();
  const [question, setQuestion] = useState({});
  const [answers, setAnswers] = useState([]);
  const [answerText, setAnswerText] = useState('');
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Récupération de la question et de ses réponses depuis la BDD
    axios.get(`/api/questions/${id}`)
      .then(response => {
        setQuestion(response.data.question);
        setAnswers(response.data.answers);
      })
      .catch(error => {
        console.error(error);
      });
  }, [id]);

  const handleAnswerChange = (event) => {
    setAnswerText(event.target.value);
  };

  const handleAnswerSubmit = () => {
    // Envoi de la nouvelle réponse à la BDD
    axios.post(`/api/questions/${id}/answers`, { text: answerText })
      .then(response => {
        setAnswers([...answers, response.data]);
        setOpen(false);
        setAnswerText('');
      })
      .catch(error => {
        console.error(error);
      });
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h4" gutterBottom>{question.title}</Typography>
      <Typography variant="body1">{question.text}</Typography>

      <Box sx={{ mt: 4 }}>
        {answers.map(answer => (
          <Box key={answer._id} sx={{ mb: 2 }}>
            <Typography variant="body1">{answer.text}</Typography>
            <Typography variant="caption" color="text.secondary">{answer.user.name} - {new Date(answer.createdAt).toLocaleString()}</Typography>
          </Box>
        ))}
      </Box>

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
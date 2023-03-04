import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import axios from "axios";
import Navbar from "./Navbar";

function QuestionHistory() {
  const [questionHistory, setQuestionHistory] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("/api/question-history"); // remplacer "/api/question-history" par l'URL de l'API qui renvoie l'historique de questions pour l'utilisateur connecté
        setQuestionHistory(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          p: 2,
        }}
      >
        <Typography variant="h5" mb={2}>
          Historique de vos questions
        </Typography>
        {questionHistory.length > 0 ? (
          questionHistory.map((question) => (
            <Box
              key={question._id}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                p: 2,
              }}
            >
              <Typography variant="body1" mb={1}>
                {question.questionText}
              </Typography>
              <Typography variant="caption" color="text.secondary">
                Posée le {new Date(question.createdAt).toLocaleString()}
              </Typography>
            </Box>
          ))
        ) : (
          <Typography variant="subtitle1" color="text.secondary">
            Vous n'avez pas encore posé de question.
          </Typography>
        )}
      </Box>
    </>
  );
}

export default QuestionHistory;

import { useState, useEffect } from "react";
import { Typography, List, ListItem, ListItemText, Box } from "@mui/material";
import Navbar from "./Navbar";
import axios from "axios";

function Question() {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    async function fetchQuestions() {
      const response = await axios.get("/api/questions");
      setQuestions(response.data);
    }

    fetchQuestions();
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
        <Typography variant="h5" mb={3}>
          Liste des questions
        </Typography>
        <List sx={{ maxWidth: "600px" }}>
          {questions.map((question) => (
            <ListItem key={question._id}>
              <ListItemText
                primary={question.title}
                secondary={question.body}
              />
            </ListItem>
          ))}
        </List>
      </Box>
    </>
  );
}

export default Question;

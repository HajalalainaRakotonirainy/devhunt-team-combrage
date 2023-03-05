import { useState, useEffect, useRef } from "react";
import { Typography, Box } from "@mui/material";
import Navbar from "./Navbar";
import MyCard from "./MyCard";
import axiosInstance from "../services/axios";
import { ToastContainer } from "react-toastify";
import PaginationCard from "./Pagination";

function Question() {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  const isMounted = useRef(false);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (isMounted.current) return;
    fetchQuestions();
    isMounted.current = true;
  }, []);

  const [currentPage, setCurrentPage] = useState(1);
  const questionsPerPage = 10;
  const totalPages = Math.ceil(questions.length / questionsPerPage);

  const fetchQuestions = () => {
    setLoading(true);
    axiosInstance
      .get("/question/all")
      .then((res) => {
        setQuestions(res.data);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleSearchTermChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredQuestions = questions.filter(
    (question) =>
      question.titre.toLowerCase().includes(searchTerm.toLowerCase()) ||
      question.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleClearSearch = () => {
    setSearchTerm("");
  };

  return (
    <>
      <Navbar />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <ToastContainer />
        <Typography variant="h5" mb={3}>
          Liste des questions
        </Typography>
        <Box mb={2}>
          <input
            style={{
              border: "1px solid black",
              backgroundColor: "#eee",
              margin: "10px",
              padding: "5px",
              borderRadius: "4px",
              width: "80%",
            }}
            type="text"
            placeholder="Rechercher une question par son titre..."
            value={searchTerm}
            onChange={handleSearchTermChange}
          />
          {searchTerm && (
            <button onClick={handleClearSearch}>Effacer la recherche</button>
          )}
        </Box>
        {loading ? (
          <p>Loading</p>
        ) : filteredQuestions.length ? (
          <div style={{ width: "80%" }}>
            {filteredQuestions
              .slice(
                (currentPage - 1) * questionsPerPage,
                currentPage * questionsPerPage
              )
              .map((question) => (
                <div key={question.question_id}>
                  <MyCard
                    id={question.question_id}
                    title={question.titre}
                    description={question.description}
                  />
                </div>
              ))}
            <PaginationCard
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={(pageNumber) => setCurrentPage(pageNumber)}
            />
          </div>
        ) : (
          <p>
            {" "}
            Il n'y a pas encore de question correspondant à votre recherche.
          </p>
        )}
      </Box>
    </>
  );
}

export default Question;

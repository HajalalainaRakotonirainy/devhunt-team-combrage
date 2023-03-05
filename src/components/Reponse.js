import { Avatar, Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import axiosInstance from "../services/axios";
import PersonIcon from "@mui/icons-material/Person";

const Reponse = ({ id }) => {
  const [responses, setReponses] = useState([]);
  const fetchResponse = () => {
    axiosInstance
      .get("/reponse/reponse/" + id)
      .then((res) => {
        setReponses(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  useEffect(() => {
    fetchResponse();
  });
  return (
    <div>
      <Typography margin="10px">
        {responses.length + " réponse(s) au total"}
      </Typography>

      {responses
        ? responses.map((response) => (
            <Box
              key={response.reponse_id}
              display="flex"
              alignItems="center"
              marginLeft="50px"
              marginBottom="20px"
            >
              <Avatar sx={{ backgroundColor: "grey", color: "#fff", mr: 1 }}>
                <PersonIcon />
              </Avatar>
              <Typography marginRight="10px">{response.description}</Typography>
              <Typography>{"le "+new Date(response.created_at).toLocaleDateString()+" à "+new Date(response.created_at).toLocaleTimeString()}</Typography>
            </Box>
          ))
        : ""}
    </div>
  );
};

export default Reponse;

import { Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import axiosInstance from "../services/axios";

const Reponse = ({ id }) => {
  const [responses, setReponses] = useState([]);
  const fetchResponse = () => {
    axiosInstance
      .get("/reponse/reponse/"+id)
      .then((res) => {
        setReponses(res.data);
      })
      .catch((error) => {
        console.error(error);
      })
  };
  useEffect(() => {
    fetchResponse();
  });
  return (
    <div>
      {responses
        ? responses.map((response) => (
            <Typography key={response.reponse_id}>
              {response.description}
            </Typography>
          ))
        : ""}
    </div>
  );
};

export default Reponse;

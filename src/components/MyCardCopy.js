import React from "react";
import {
  Card,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
  Avatar,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import QuestionPage from "./QuestionPage";
import Reponse from "./Reponse";
import PersonIcon from "@mui/icons-material/Person";

const MyCardCopy = ({ title, description, id, date }) => {
  return (
    <Card sx={{ marginBottom: "10px" }}>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <div>
            <Box display="flex" alignItems="center">
              <Typography fontWeight="bold" marginRight="10px">
                {title}
              </Typography>
              <Typography>
                {"le " +
                  new Date(date).toLocaleDateString() +
                  " à " +
                  new Date(date).toLocaleTimeString()}
              </Typography>
            </Box>
            <Typography style={{ marginBottom: "1rem" }}>
              {description}
            </Typography>
          </div>
        </AccordionSummary>
        <AccordionDetails sx={{ backgroundColor: "#e9e9e9d0" }}>
          <Reponse id={id} />
          <QuestionPage id={id} />
        </AccordionDetails>
      </Accordion>
    </Card>
  );
};

export default MyCardCopy;

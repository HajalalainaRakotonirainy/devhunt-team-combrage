import React from "react";
import {
  Card,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import QuestionPage from "./QuestionPage";
import Reponse from "./Reponse";

const MyCard = ({ title, description, id }) => {
  return (
    <Card sx={{ marginBottom: "10px" }}>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <div>
            <Typography variant="h6">{title}</Typography>
            <Typography style={{ marginBottom: "1rem" }}>
              {description}
            </Typography>
          </div>
        </AccordionSummary>
        <AccordionDetails>
          <Reponse id={id} />
          <QuestionPage id={id} />
        </AccordionDetails>
      </Accordion>
    </Card>
  );
};

export default MyCard;

import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

function PaginationCard({ currentPage, totalPages, onPageChange }) {
  return (
    <Box mt={4} display="flex" justifyContent="center">
      <Button
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        Précédent
      </Button>
      <Typography mx={2}>
        Page {currentPage} sur {totalPages}
      </Typography>
      <Button
        disabled={currentPage === totalPages}
        onClick={() => onPageChange(currentPage + 1)}
      >
        Suivant
      </Button>
    </Box>
  );
}

export default PaginationCard;

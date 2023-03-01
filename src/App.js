import "./App.css";
import Swal from "sweetalert2";
import { Skeleton, Alert } from "@mui/material";

function App() {
  return (
    <div className="App">
      <Skeleton variant="rectangular" width={210} height={118} />
      <Alert severity="success">This is a success alert — check it out!</Alert>
      <button
        onClick={() =>
          Swal.fire("The Internet?", "That thing is still around?", "question")
        }
      >
        test
      </button>
    </div>
  );
}

export default App;

import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Login";
import Register from "./components/Register";
import AllQuestion from "./components/AllQuestion";
import QuestionHistory from "./components/QuestionHistory";
import QuestionPage from "./components/QuestionPage";
import Contact from "./components/Contact";
import Accueil from "./components/Accueil";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/allQuestion" element={<AllQuestion />} />
        <Route path="/questionHistory" element={<QuestionHistory />} />
        <Route path="/questionPage" element={<QuestionPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/home" element={<Accueil/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

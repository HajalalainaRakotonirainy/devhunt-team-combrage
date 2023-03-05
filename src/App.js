import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import AllQuestion from "./components/AllQuestion";
import QuestionHistory from "./components/QuestionHistory";
import QuestionPage from "./components/QuestionPage";
import Contact from "./components/Contact";
import Accueil from "./components/Accueil";
import { AuthProvider, AuthConsumer } from "./context/JWTAuthContext";
import { PublicRoute } from "./components/Auth/PublicRoute";
import { Authenticated } from "./components/Auth/Authenticated"

function App() {
  return (
    <>
    <AuthProvider>
    <BrowserRouter>
      <AuthConsumer>
      {(auth) => ! auth.isInitialized ? (
      	<p> Loading </p>
      
      ) : (
      
            <Routes>
        <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
        <Route path="/register" element={<PublicRoute><Register /></PublicRoute>} />
        <Route path="/allQuestion" element={<Authenticated><AllQuestion /></Authenticated>} />
        <Route path="/questionHistory" element={<Authenticated><QuestionHistory /></Authenticated>} />
        <Route path="/questionPage" element={<Authenticated><QuestionPage /></Authenticated>} />
        <Route path="/contact" element={<Authenticated><Contact /></Authenticated>} />
        <Route path="/" element={<Authenticated><Accueil/></Authenticated>} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      
       )}

      </AuthConsumer>
    </BrowserRouter>
    </AuthProvider>
    </>
  );
}

export default App;


import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import QuestionnairePage from "./components/QuestionnairePage";
import UploadPage from "./components/UploadPage";
import ResultsPage from "./components/ResultsPage";
import "./index.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<QuestionnairePage />} />
        <Route path="/upload" element={<UploadPage />} />
        <Route path="/results" element={<ResultsPage />} />
      </Routes>
    </Router>
  );
}

export default App;

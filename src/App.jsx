import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { HashRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/project" element={<ProjectPage />}></Route>
      </Routes>
    </HashRouter>
  );
}

export default App;

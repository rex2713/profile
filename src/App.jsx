import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { HashRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
      </Routes>
    </HashRouter>
  );
}

export default App;

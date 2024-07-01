import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./views/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </div>
  );
}

export default App;

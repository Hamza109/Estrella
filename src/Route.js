import React from "react";
import About from "./Components/About/About";
import App from "./App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const Route = () => {
  return (
    <Router>
      <Routes>
        <Route index element={<App />} />
        <Route exact path='/about' element={<About />} />
      </Routes>
    </Router>
  );
};

export default Route;

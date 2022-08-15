import React from "react";
import App from "./App";
import About from "./About";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const Route1 = () => {
  return (
    <div>
      <Routes>
        <Route exact path='/' element={<App />} />
        <Route exact path='/about' element={<About />} />
      </Routes>
    </div>
  );
};

export default Route1;

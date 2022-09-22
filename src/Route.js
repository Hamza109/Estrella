import React from "react";
import App from "./App";
import About from "./About";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainContact from "./MainContact"
import MeetModal from "./MeetModal";
const Route1 = () => {
  return (
    <div>
      <Routes>
        <Route exact path='/' element={<App />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/contact' element={<MainContact />} />
        <Route exact path='/meetmodel' element={<MeetModal />} />
      </Routes>
    </div>
  );
};

export default Route1;

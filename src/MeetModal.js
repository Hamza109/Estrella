import React from 'react'
import Footer from "./Components/Footer/Footer";
import Navbar from './Components/Navbar/Navbar';
import { themeContext } from "./Context";
import { useContext } from "react";
import './MeetModal.css'
import Meet from './Components/Meet/Meet';
const MeetModal = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className='m-modal' style={{ background: darkMode ? "black" : "#e6e6e6" }}>
    <Navbar color={darkMode ? "#e6e6e6" : "#000"} />
    <Meet/>
    <Footer color={darkMode ? "#e6e6e6" : "#000"} />
  </div>
  )
}

export default MeetModal
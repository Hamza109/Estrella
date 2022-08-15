import React from "react";
import Model from "../../Img/main.jpg";
import "./Main.css";
import { themeContext } from "../../Context";
import { useContext } from "react";
import Menu from "../Menu/Menu";
const Main = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className='main'>
      <div className='m-main' style={{ display: darkMode ? "none" : "flex" }}>
        <div className='m-center'>
          <img src={Model} height='85%' width='26%' alt='' />
        </div>
        <div className='m-text'>
          <span>REACH</span>
          <span>FOR THE</span>
          <span>STARS</span>
        </div>
      </div>
      <Menu />
    </div>
  );
};

export default Main;

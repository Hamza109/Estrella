import React from "react";
import Hamburger from "hamburger-react";
import { useState } from "react";
import "./Navbar.css";
import { themeContext } from "../../Context";
import { useContext } from "react";
const Navbar = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const [isOpen, setOpen] = useState(darkMode ? true : false);
  const handleClick = () => {
    theme.dispatch({ type: "toggle" });
  };
  return (
    <div className='navbar'>
      <div className='left'>
        <span>meet our models</span>
      </div>
      <div className='center'>
        <span>ESTRELLA</span>
        <span>MGMT</span>
      </div>
      <div className='right'>
        <Hamburger
          color='white'
          onToggle={handleClick}
          toggled={isOpen}
          toggle={setOpen}
        />
      </div>
    </div>
  );
};

export default Navbar;

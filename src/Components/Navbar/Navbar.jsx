import React from "react";
import Hamburger from "hamburger-react";
import { useState } from "react";
import "./Navbar.css";
import { themeContext } from "../../Context";
import { useContext } from "react";
import { Link } from "react-router-dom";
const Navbar = ({ color }) => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const [isOpen, setOpen] = useState(darkMode ? true : false);
  const handleClick = () => {
    theme.dispatch({ type: "toggle" });
  };
  return (
    <div className='navbar1'>
      <div className='left'>
        <span > <Link
         target='_blank'
         className='link navlink'
         to='/meetmodel'
         style={{ color:color,textDecoration: "none" }}>meet our models</Link></span>
      </div>
      <div className='center' >
     
        <span> <Link to='/'  style={{color:color,textDecoration:'none'}}>ESTRELLA  </Link></span>
        <span style={{color:color}}>MGMT</span>
      
      </div>
      <div className='right'>
        <Hamburger
          color={color}
          onToggle={handleClick}
          toggled={isOpen}
          toggle={setOpen}
        />
      </div>
    </div>
  );
};

export default Navbar;

import React from "react";
import "./Menu.css";
import { themeContext } from "../../Context";
import { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
const Menu = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className='menu' style={{ display: darkMode ? "flex" : "none" }}>
      <ul style={{ listStyleType: "none" }}>
        <li>
          <Link
            target='_blank'
            className='link'
            to='/about'
            style={{ textDecoration: "none" }}
          >
            meet us
          </Link>
        </li>
        <li>meet our models</li>
        <li>become a model</li>
        <li>contact</li>
      </ul>
    </div>
  );
};

export default Menu;

import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { themeContext } from "../../Context";
import { useContext } from "react";
const Footer = ({ color }) => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className='footer'>
      <div className='f-social'>
        <span>
          <a
            href='https://instagram.com/estrellamgmt?igshid=YmMyMTA2M2Y='
            style={{ textDecoration: "none", color: color }}
          >
      
            instagram
          </a>
        </span>
        <span style={{ color: color }}>facebook</span>
      </div>
    </div>
  );
};

export default Footer;

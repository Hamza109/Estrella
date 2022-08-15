import React from "react";
import "./Footer.css";
const Footer = ({color}) => {
  return (
    <div className='footer'>
      <div className='f-social'>
      <span style={{color:color}}>instagram</span>
        <span style={{color:color}}>facebook</span>
      </div>
    </div>
  );
};

export default Footer;

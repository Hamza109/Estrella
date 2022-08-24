import React from "react";
import "./About1.css";
import Model from "../../Img/main.jpg";
import { themeContext } from "../../Context";
import { useContext } from "react";
import Menu from "../Menu/Menu";
import { UilAngleRight } from '@iconscout/react-unicons'
const About1 = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className='about1'>
      <div className='a-about' style={{ display: darkMode ? "none" : "flex" }}>
        <div className='a-left'>
          <img src={Model} className='img1' alt='' />
        </div>
        <div className='a-right'>
          <div className='a-name'>
            <span>About Us</span>
            <span>
              ESTRELLA MGMT is a unique modelling agency based in New
              Delhi,India. We are a team of people with many years of experience
              in modelling industry.Aiming big, thinking big, working big. Our
              standards are set up on the highest level. Delivering professional
              aproach in every aspect. It's time to shine.
            </span>
            <span>Let's REACH FOR THE STARS together</span>
            <div className='a-get'>
        <UilAngleRight size='2rem' />
            <span>get in touch</span>
            </div>
          </div>
        </div>
      </div>
      <Menu />
    </div>
  );
};

export default About1;

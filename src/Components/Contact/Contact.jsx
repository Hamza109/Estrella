import React from "react";
import { useRef, useState } from "react";
import "./Contact.css";
import Model from "../../Img/main.jpg";
import { themeContext } from "../../Context";
import { useContext } from "react";
import Menu from "../Menu/Menu";
import { UilAngleRight } from "@iconscout/react-unicons";
import emailjs from '@emailjs/browser';
const Contact = () => {
  const form = useRef();
  const [done, setDone] = useState(false);
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, '_G56pDbgvTHGyJp_j')
      .then((result) => {
          console.log(result.text);
          setDone(true);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div className='contact'>
      <div
        className='c-contact'
        style={{ display: darkMode ? "none" : "flex" }}
      >
        <div className='c-left'>
          <div className='c-info'>
            <span>Contact us</span>
            <span></span>
            <span>email info@estrellamgmt.com</span>
          </div>

          <div className='address'>
            <span>
              B-269, 2nd floor,
              <br />
              HILLS VIEW APARTMENT
              <br />
              CHATTARPUR ENCLAVE PHASE 2,
              <br />
              NEW DELHI, INDIA
            </span>
          </div>
        </div>
        <div className='c-right'>
          <form ref={form}>
            <input
              type='text'
              name='user_name'
              className='user'
              placeholder='full name'
            />

            <input
              type='email'
              name='user_email'
              className='user'
              placeholder='email'
            />
            <input
              type='text'
              name='subject'
              className='user'
              placeholder='subject'
            />
            <textarea name='message' className='user' placeholder='Message' />
            <div>
              <UilAngleRight size='2rem' />
              <input type='submit' value='send' className='button' />
            </div>
            <span style={{ textColor: "black" }}>
              {done && "Thank you for contacting me!"}
            </span>
            <div
              className='blur c-blur1'
              style={{ background: "var(--purple)" }}
            ></div>
          </form>
        </div>
      </div>
      <Menu />
    </div>
  );
};

export default Contact;

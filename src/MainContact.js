import Navbar from "./Components/Navbar/Navbar";
import "./MainContact.css";
import Footer from "./Components/Footer/Footer";
import { themeContext } from "./Context";
import { useContext } from "react";
import Contact from "./Components/Contact/Contact";
function About() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className='mcontact' style={{ background: darkMode ? "black" : "#fff" }}>
      <Navbar color={darkMode ? "#fff" : "#000"} />
      <Contact />
      <Footer color={darkMode ? "#fff" : "#000"} />
    </div>
  );
}

export default About;

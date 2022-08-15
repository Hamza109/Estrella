import Navbar from "./Components/Navbar/Navbar";
import "./About.css";
import Footer from "./Components/Footer/Footer";
import { themeContext } from "./Context";
import { useContext } from "react";
import About1 from "./Components/About/About1";
function About() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className='about' style={{ background: darkMode ? "black" : "#fff" }}>
      <Navbar color={darkMode ? "#fff" : "#000"} />
      <About1 />
      <Footer color={darkMode ? "#fff" : "#000"} />
    </div>
  );
}

export default About;

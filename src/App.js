import Navbar from "./Components/Navbar/Navbar";
import "./App.css";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";
import { themeContext } from "./Context";
import { useContext } from "react";
function App() {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className='App' style={{ background: darkMode ? "black" : "#e6e6e6" }}>
      <Navbar color={darkMode ? "#e6e6e6" : "#000"} />
      <Main />
      <Footer color={darkMode ? "#e6e6e6" : "#000"} />
    </div>
  );
}

export default App;

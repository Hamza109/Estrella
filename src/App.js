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
    <div className='App' style={{ background: darkMode ? "black" : "#ed1941" }}>
      <Navbar color={'white'} />
      <Main />
      <Footer />
    </div>
  );
}

export default App;

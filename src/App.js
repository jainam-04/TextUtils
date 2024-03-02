import { useState } from "react";
import "./App.css";
import About from "./Components/About";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import Alert from "./Components/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [text, setText] = useState("Dark");
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#101146";
      setText("Light");
      showAlert("Dark mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      setText("Dark");
      showAlert("Light mode has been enabled", "success");
    }
  };
  const toggleGreenButton = () => {
    document.body.style.backgroundColor = "green";
  };
  const toggleGreyButton = () => {
    document.body.style.backgroundColor = "grey";
  };
  const toggleRedButton = () => {
    document.body.style.backgroundColor = "red";
  };
  const toggleLightBlueButton = () => {
    document.body.style.backgroundColor = "#0dcaf0";
  };
  return (
    <>
      <div>
        <Router>
        <Navbar
          title="TextUtils"
          mode={mode}
          toggleMode={toggleMode}
          aboutText="About"
          text={text}
          toggleGreenButton={toggleGreenButton}
          toggleGreyButton={toggleGreyButton}
          toggleRedButton={toggleRedButton}
          toggleLightBlueButton={toggleLightBlueButton}
        />
      <Alert alert={alert} />
          <Routes>
            <Route exact path="/about" element={<About mode={mode}/>}></Route>
            <Route
              exact
              path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Try TextUtils - Word Counter, Character Counter, Remove Text"
                  mode={mode}
                />
              }
            ></Route>
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;

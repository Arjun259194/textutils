import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import About from './components/About';
import TextForm from "./components/TextForm";
import { useState } from "react";
import Alert from "./components/Alert";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");

  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => setAlert(null), 500);
  }

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#3c3c3c";
      document.body.style.color = "#fff";
      showAlert("Dark mode is on", "success")
      document.title = "Textutils | Dark mode";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#fff";
      document.body.style.color = "#000";
      showAlert("Light mode is on", "success")
      document.title = "Textutils | Light mode";
    }
  };

  return (
    <>
      <Router>
        <Navbar title="Textutils" about="About" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/" element={<TextForm showAlert={showAlert} heading="Enter the text here" />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;

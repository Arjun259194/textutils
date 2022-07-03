import "./App.css";
import Navbar from "./components/Navbar";
// import About from './components/About';
import TextForm from "./components/TextForm";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#3c3c3c";
      document.body.style.color = "#fff";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#fff";
      document.body.style.color = "#000";
    }
  };

  return (
    <>
      <Navbar title="Textutils" about="About" mode={mode} toggleMode={toggleMode} />
      <div className="container my-3">
        <TextForm heading="Enter the text here" />
      </div>
    </>
  );
}

export default App;

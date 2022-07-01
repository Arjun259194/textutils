import './App.css';
import Navbar from './components/Navbar';
// import About from './components/About';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
      <Navbar title="Textutils" about="About" />
      <div className="container my-3">
        <TextForm heading="Enter the text here" />
        {/* <About/> */}
      </div>
    </>
  );
}

export default App;

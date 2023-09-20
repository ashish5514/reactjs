import "./App.css";
import Navbar from "./components/Navbar";
// import Textform from "./components/Textform1";
import About from "./components/About";

function App() {
  return (
    <>
      <Navbar title="New App" abouttext="about us" />
      {/* <Navbar /> */}

      <div className="container my-3">
        {/* <Textform heading="Enter the text and changed Blow" /> */}
        <About/>
      </div>
    </>
  );
}

export default App;

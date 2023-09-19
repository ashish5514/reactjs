import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform1";

function App() {
  return (
    <>
      <Navbar title="New App" abouttext="about us" />
      {/* <Navbar /> */}

      <div className="container my-3">
        <Textform heading="Enter the text and changed Blow" />
      </div>
    </>
  );
}

export default App;

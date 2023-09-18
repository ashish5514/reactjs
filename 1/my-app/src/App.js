import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform1';

function App() {
  return (
    <>
      <Navbar title="text2" abouttext="about us" />
      {/* <Navbar /> */}
      
    <div className="container my-3">
    <Textform heading= "enter the text anylyze blow"/>

    </div>
    </>
  );
} 

export default App;

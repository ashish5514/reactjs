import React,{useState} from "react";


export default function Textform(props) {
  const handleupclick =()=> {
    // console.log("uppercase was clicked: " + text);
    let newtext = text.toUpperCase();
    setText(newtext)
  }
  const handleloclick =()=> {
    // console.log("uppercase was clicked: " + text);
    let newtext = text.toLowerCase();
    setText(newtext)
  }
  const handleclearclick =()=> {
    // console.log("uppercase was clicked: " + text);
    let newtext = '';
    setText(newtext)
  }
  const handleonchanged =(event)=> {
    // console.log("on changed");
    setText(event.target.value)
  }
  const [text,setText] = useState('Add text here');
  //text = "new text" //wrong way to change the state
  //setText ("new text"); //wrong way to change the state
  return (
    <>
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control"  value={text} onChange={handleonchanged} id="mybox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleupclick}>convert to uppercase</button>
      <button className="btn btn-primary mx-2" onClick={handleloclick}>convert to lowercase</button>
      <button className="btn btn-primary mx-2" onClick={handleclearclick}>clear text</button>
    </div>
    <div className="container my-3">
      <h2>your text summary</h2>
      <p>{text.split(" ").length} words ,  {text.length} characters</p>
      <p>{0.008 * text.split(" ").length}minutes read</p>
      <h2>preview</h2>
      <p>{text}</p>
    </div>
    </>
  );
}

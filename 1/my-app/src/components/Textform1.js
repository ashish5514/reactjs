import React,{useState} from "react";


export default function Textform(props) {
  const handleupclick =()=> {
    console.log("uppercase was clicked" + text);
    let newtext = text.toUpperCase();
    setText(newtext)
  }
  const handleonchanged =(event)=> {
    console.log("on changed");
    setText(event.target.value)
  }
  const [text,setText] = useState('Add text here');
  //text = "new text" //wrong way to change the state
  //setText ("new text"); //wrong way to change the state
  return (
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control"  value={text} onChange={handleonchanged} id="mybox" rows="8"></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleupclick}>convert to uppercase</button>
    </div>
  );
}

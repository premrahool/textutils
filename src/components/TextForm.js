import { useState } from "react";
// import React {useState} from "react";



export default function TextForm(props) {

    const handleUpClick =()=>{
        console.log("UpperCase Was Clicked");
        setText("You have Clicked on handUp Click")
    }

    const handleOnChange =()=>{
        console.log("On Change")
    }
const [text, setText] = useState('Enter text here')
// text ="new text"; // wrong way to change the state.
// setText("new text"); // Correct way to change the state.
  return (
    <div className="container my-3">
        <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox"rows="5"></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</button>
 
    </div>
  );
}

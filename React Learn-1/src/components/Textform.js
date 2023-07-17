//rfc

import React,{useState} from "react";

export default function Textform(props) {
  const [text,setText] = useState("");
  const handleUpClick = ()=>{
    // console.log("UpperCase was Clicked " + text);
    let newText = text.toUpperCase();
    setText(newText)
  }
  const handleOnChange = (event)=>{
    // console.log("on change ");
    setText(event.target.value)

  }
  return (
  <>
    <div className="container">
      <div className="mb-3">
        <h1>{props.heading}</h1>
        <textarea className="form-control" value={text} onChange={handleOnChange}id="mybox" rows="18"></textarea>
      </div>
      <button className='btn btn-primary' onClick={handleUpClick}>Change To UpperCase </button>
    </div>
    <div className="container" my-4>

     <h1>Word Tracker</h1>
     <p> Word = {text.split(" ").length} and Character = {text.length}</p>
     <p>{0.008 * text.split(" ").length} Minutes to Read</p>


    </div>





  </>
  );
}

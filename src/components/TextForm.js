import React, {useState} from 'react'

export default function TextForm(props) {
  const [text,setText] = useState("Enter text here");

  const handelUpClick = ()=>{
    console.log("button was clicked, OK");
    setText(text.toUpperCase())
  }

  const handelOnChange = (event)=>{
    console.log("button was clicked");
    setText(event.target.value);
  }

  return (
    <div>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea value={text} onChange={handelOnChange} className="form-control" id="my_box" rows="8"></textarea>
      </div>
      <button className="btn btn-primary" onClick={handelUpClick} >Convert</button>
    </div>
  )
}

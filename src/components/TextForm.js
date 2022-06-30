import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter text here");

  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea value={text} onChange={event => {
            setText(event.target.value);
          }} className="form-control" id="my_box" rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={() => {
          setText(
            text.toUpperCase()
          )
        }}>
          Convert to upper
        </button>
        <button className="btn btn-primary mx-2" onClick={() => {
          setText(
            text.toLowerCase()
          )
        }}>
          Convert to lower
        </button>
        <button className="btn btn-primary mx-2" onClick={() => {
          setText(
            text.split('').reverse().join('')
          )
        }}>
          Reverse
        </button>
      </div>
      <div className="container my-2">
        <h1>Your text summary here</h1>
        <p>characters {text.length} and {text.split(" ").length} words</p>
        <p>Reading time: {0.008 * text.split(" ").length} minutes</p>
        <p>preview</p>
        <h2>{text}</h2>
      </div>
    </>
  );
}

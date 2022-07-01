import React, { useState } from "react";

export default function About() {
  const [style, setStyle] = useState({
    color: "#fff",
    backgroundColor: "#2c2c2c"
  })

  const [btnText, setBtnText] = useState(
    "Enable light mode"
  )

  const themeToggle = () => {
    console.log('btn clicked');
    if (style.color === "#fff") {
      setStyle({
          color: "black",
          backgroundColor: "#fff"
      })

      setBtnText(
        "enable Dark mode"
      )
    } else {
      setStyle({
        color: "#fff",
        backgroundColor: '#2c2c2c'
      })

      setBtnText(
        "enable light mode"
      )
    }
  }

  return (
    <div className="container" style={style}>
      <h2 className="my2">About us</h2>
      <div className="accordion accordion-flush" id="accordionFlushExample" >
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingOne">
            <button className="accordion-button collapsed" style={style} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
              Accordion Item #1
            </button>
          </h2>
          <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body" style={style} >
              Placeholder content for this ok, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the first item's accordion body.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingTwo">
            <button className="accordion-button collapsed" type="button" style={style} data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
              Accordion Item #2
            </button>
          </h2>
          <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body" style={style} >
              Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the second item's accordion body. Let's imagine this being filled with some actual content.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header" id="flush-headingThree">
            <button className="accordion-button collapsed" type="button" style={style} data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
              Accordion Item #3
            </button>
          </h2>
          <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
            <div className="accordion-body" style={style} >
              Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> className. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.
            </div>
          </div>
        </div>
      </div>
      <button onClick={themeToggle} type="btn" className="btn btn-primary mx-2 my-2">{btnText}</button>
    </div>
  );
}

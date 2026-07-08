import React, { useState } from "react";

function Event() {
     const [text, setValue] = useState("");

   const handleClick = () => {
    console.log("Button clicked!");
    window.alert(Date());  
   } 

   const handleChange = (e) => {
   const upperValue = e.target.value.toUpperCase();
   setValue(upperValue);
   } 
   
   const handleFocus = () => {
    console.log("Input is focused");
  };

  const handleLoad = () => {
    alert("Image loaded!");
  };

  return (
    <div>
      <h2>React Event Handling Example</h2>
      <h3 Style="color:red">Onclick event demo </h3>
      <button onClick={handleClick}>Click Me   </button><br></br>

     <h3 Style="color:red">The onchange Event</h3>
      Enter your name: <input type="text" value={text} id="fname" onChange={handleChange}/>
     <p>Text: {text}</p>

     <h3 Style="color:red"> Onfocus Event</h3>
     <input type="text" id="input1" onFocus={handleFocus}/>
     
     <h3 Style="color:red"> onLoad Event</h3>
      <img
      src="/mother.JPG"
      onLoad={handleLoad}
      alt="example"
    />      
    </div>
  );
}

export default Event;

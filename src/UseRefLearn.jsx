import React, { useEffect, useRef, useState } from "react";

const UseRefLearn = () => {
  const [name, setName] = useState("");
  const count = useRef(0);
  
  useEffect(() => {
    count.current = count.current + 1;
  })


  const inputEle = useRef();
  const handleClick = () => {
    console.log(inputEle.current.value);
    console.log(inputEle);
    inputEle.current.style.width = "300px";
    inputEle.current.focus();
  };

  return (
    <>
      <h1>Use Ref</h1>
      <h2>Create an Immutable veribale </h2>
      <input type="text" onChange={(e) => setName(e.target.value)} />

      <h3>Name: {name}</h3>
      <h3>Renders: {count.current} </h3>


      <h2> Access DOM </h2>

      <input type="text" ref={inputEle}/>
      <button onClick={handleClick}>Click Here</button>
    </>
  );
};

export default UseRefLearn;
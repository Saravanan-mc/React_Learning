import React, { useState } from "react";

const UseStatelearn = () => {

  const [name, setName] = useState("");
  const [details, setDetails] = useState({ counter: 0, name: "" });

  function increment() {
    setDetails((prev) => ({
      ...prev,
      counter: prev.counter + 1,
      name: name
    }));
  }

  return (
    <div>
      <h1>Use State</h1>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <h3>{details.name} has clicked {details.counter} time!!</h3>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default UseStatelearn;
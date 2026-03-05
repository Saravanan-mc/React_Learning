import React, { useState, useMemo } from "react";

function UseMemoLearn() {

  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  const doubleValue = useMemo(() => {
    console.log("Calculating...");
    return count * 2;
  }, [count]);

  return (
    <>
      <h1>Use Memo Learn</h1>

      <h2>Count: {count}</h2>
      <h2>Double Value: {doubleValue}</h2>

      <button onClick={() => setCount(count + 1)}>Increase</button>

      <br /><br />

      <input
        type="text"
        placeholder="Type your name"
        onChange={(e) => setName(e.target.value)}
      />

      <p>Name: {name}</p>
    </>
  );
}

export default UseMemoLearn;
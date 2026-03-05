import React, { useState, useCallback } from "react";

function UseCallBack() {

  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Button Clicked");
  }, []);

  return (
    <>
      <h1>Use Call Back</h1>

      <h2>Count: {count}</h2>

      <button onClick={() => setCount(count + 1)}>Increase</button>

      <button onClick={handleClick}>Click Me</button>
    </>
  );
}

export default UseCallBack;
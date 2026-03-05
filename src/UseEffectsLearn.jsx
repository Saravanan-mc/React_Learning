import React, { useState, useEffect } from "react";

const UseEffectslearn = () => {

  const [count, setCount] = useState(0);
  const [time, setTimes] = useState(0);

  useEffect(() => {
    document.title = `${count} new messages`;
  }, [count]);

//   useEffect(() => {

//     console.log("Run useEffect");

//     const interval = setInterval(() => {
//       setTimes((prev) => prev + 1);
//     }, 1000);

//     return () => {
//       clearInterval(interval);
//     };

//   }, []);

  return (
    <>
      <h1>Use Effects</h1>

      <h3>{count} new Messages !</h3>
      <button onClick={() => setCount(count + 1)}>Increase</button>

      {/* <h3>{time} in seconds</h3>
      <button onClick={() => setTimes(time + 1)}>Time</button> */}
    </>
  );
};

export default UseEffectslearn;
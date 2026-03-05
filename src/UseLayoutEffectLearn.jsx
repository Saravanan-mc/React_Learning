import React, { useEffect, useState, useRef, useLayoutEffect } from "react";

const UseLayoutEffectLearn = () => {

  const [toggle, setToggle] = useState(false);
  const textRef = useRef();

  useLayoutEffect(() => {

    if (textRef.current != null) {

      const dimension = textRef.current.getBoundingClientRect();

      textRef.current.style.paddingTop = `${dimension.height}px`;

    }

  }, [toggle]);

  return (
    <>
      <h1>Use Layout Effect</h1>

      <button onClick={() => setToggle(!toggle)}>Toggle</button>

      {toggle && <h4 ref={textRef}>Code Bless You</h4>}
    </>
  );
};

export default UseLayoutEffectLearn;
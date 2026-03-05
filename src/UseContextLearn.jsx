import React, { createContext } from "react";
import LoginContext from "./LoginContext";

export const loginContext = createContext();

const UseContextLearn = () => {
  return (
    <>
      <h1>Use Context</h1>

      <loginContext.Provider value={true}>
        <LoginContext />
      </loginContext.Provider>
    </>
  );
};

export default UseContextLearn;
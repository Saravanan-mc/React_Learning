import React from "react";
import Child from "./Child";

function App() {

  const fruits = ["Apple", "Mango", "Orange"];

  const user = {
    name: "Saravanan",
    age: 22
  };

  const greet = () => {
    alert("Hello from Parent!");
  };

  return (
    <>
      <h1>React Props Example</h1>

      <Child
        name="Saravanan"
        age={22}
        isLoggedIn={true}
        fruits={fruits}
        user={user}
        greet={greet}
      >
        <p>This is children prop</p>
      </Child>
    </>
  );
}

export default App;
import React from "react";

function Child(props) {
  return (
    <>
      <h2>Name: {props.name}</h2>
      <h2>Age: {props.age}</h2>

      <h3>
        Status: {props.isLoggedIn ? "Logged In" : "Not Logged In"}
      </h3>

      <h3>Fruits: {props.fruits.join(", ")}</h3>

      <h3>User: {props.user.name} - {props.user.age}</h3>

      <button onClick={props.greet}>Click Me</button>

      <div>{props.children}</div>
    </>
  );
}

export default Child;
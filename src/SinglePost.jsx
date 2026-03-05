import React, { useContext } from "react";
import { loginContext } from "./UseContextLearn";

const SinglePost = () => {

  const login = useContext(loginContext);

  return (
    <>
      <h3>Single Post</h3>
      <h4>User Logged In: {login ? "Yes" : "No"}</h4>
    </>
  );
};

export default SinglePost;
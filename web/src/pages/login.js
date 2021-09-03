import React from "react";
import Navbar from "../components/NavBar";

const Login = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "90vh",
        }}
      > 
        <h1>Login</h1>
      </div>
    </div>
  );
};

export default Login;

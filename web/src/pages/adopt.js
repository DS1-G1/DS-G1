import React from "react";
import Navbar from "../components/NavBar";

const Adopt = () => {
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
        <h1>Adopt</h1>
      </div>
    </div>
  );
};

export default Adopt;

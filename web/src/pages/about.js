import React from "react";
import Navbar from "../components/NavBar";

const About = () => {
  return <div>
      <Navbar></Navbar>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "90vh",
        }}
      > 
        <h1>About</h1>
      </div>
  </div>
};

export default About;

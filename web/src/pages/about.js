import React from "react";
import Navbar from "../components/NavBar";
import "../styles/stylesDefault.scss";
import popUp from "../components/popUp";

const About = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="default">
        <h1>About</h1>
        <popUp/>
      </div>
    </div>
  );
};

export default About;

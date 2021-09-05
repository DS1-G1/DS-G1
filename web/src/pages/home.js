import React from "react";
import Navbar from "../components/NavBar";
import "../styles/stylesDefault.scss";

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="default">
        <h1>Home</h1>
      </div>
    </div>
  );
};

export default Home;

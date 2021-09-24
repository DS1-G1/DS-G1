import React from "react";
import Navbar from "../components/NavBar";
import "../styles/stylesDefault.scss";
import Form from './cadastroUser'

const SignUp = () => {
  return (
    <div>
      <Navbar></Navbar>
  
        <Form/>

    </div>
  );
};

export default SignUp;

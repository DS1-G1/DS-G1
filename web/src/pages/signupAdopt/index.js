import React from "react";
import Navbar from "../../components/NavBar";
import Form from "../../components/formularioSignUp"
import logo from "../../img/imageSignUpAdopt.jpg"
import * as S from "./style"


const signupAdopt = () => {
  return (
  <>
    <Navbar/>
    <S.Conteiner>
  
     <S.Image src={logo} alt="Logo"/>
      <Form/>

    </S.Conteiner>

 </>
  );
};

export default signupAdopt;

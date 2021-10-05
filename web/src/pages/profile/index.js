import React from "react";
import Navbar from "../../components/NavBar";
import Profile from "../../components/Profile";

import * as S from "./style"

import image2 from '../../img/imageSignUpAdopt.jpg'
import back from '../../img/Vectorprof.png'




const signupAdopt = () => {
  return (
  <>
    <Navbar/>
    <S.Conteiner>
    <Profile name="Itallo" countre="Brasilia" imgprofile={image2}/>
    </S.Conteiner>
    <S.Conteudo imgUrl={back}>
    <S.Title>
    Meus pets para Adocao:
    </S.Title>
    </S.Conteudo>
</>
  );
};

export default signupAdopt;

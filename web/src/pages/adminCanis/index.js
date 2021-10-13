import React from "react";
import Navbar from "../../components/NavBar";
import Buttom from "../../components/buttonBlue";
import * as S from "./style"



const ONGS = {
    nome: "ONG do Zé",
    pets: {
            nome: "Zé",
            categoria: "Cão",
            sexo: "Feminino",
            criado: "00/00/0000",
    }
  }



const AdminCanis = () => {
  return (
  <>

    <Navbar/>
    <S.Conteiner> 
      <S.ButtonsIndex>
        <S.LabelButtons>
          Canis
        </S.LabelButtons>
        <Buttom color="transparent" >Canil 1</Buttom>
        <Buttom color="transparent" >Canil 2</Buttom>
        <Buttom color="transparent" >Outros</Buttom>
      </S.ButtonsIndex>

    <S.ListConteiner>
      <S.LabelPainel>
        Painel Administrativo Canil
      </S.LabelPainel>
      <S.ListPets>
        <S.LabelList>
          <div>Nome: {ONGS.nome}</div>
          <div>Categoria: {ONGS.pets.nome}</div>
          <div>Sexo: {ONGS.pets.categoria}</div>
          <div>Criado: {ONGS.pets.sexo}</div>
          <div>Criado: {ONGS.pets.criado}</div>
          <Buttom height="30px" >Editar</Buttom>
          <Buttom height="30px" >Adotado</Buttom>
        </S.LabelList>
      </S.ListPets>
    </S.ListConteiner>
    
    </S.Conteiner>
</>
  );
};

export default AdminCanis;
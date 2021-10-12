import React from "react";
import Navbar from "../../components/NavBar";
import Buttom from "../../components/buttonBlue";
import * as S from "./style"


const PetsData = {
  ID: "000000",
  categoria: "Cães",
  lastModification: "00/00/0000",
  status: "Não-Adotado"
}


const AdminInicial = () => {
  return (
  <>

    <Navbar/>
    <S.Conteiner>
      <S.ButtonsIndex>
        <Buttom color="transparent" >Pet</Buttom>
        <Buttom color="transparent" >Usuários</Buttom>
        <Buttom color="transparent" >Canis</Buttom>
      </S.ButtonsIndex>

    <S.ListPets>
      <S.LabelList>
        <div>ID: {PetsData.ID}</div>
        <div>Categoria: {PetsData.categoria}</div>
        <div>Ultima modificação: {PetsData.lastModification}</div>
        <div>Status: {PetsData.status}</div>
        <Buttom height="30px" >Excluir</Buttom>
      </S.LabelList>
    </S.ListPets>
      
    </S.Conteiner>
</>
  );
};

export default AdminInicial;

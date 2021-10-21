import React from "react";
import Navbar from "../../components/NavBar";
import Buttom from "../../components/buttonBlue";
import * as S from "./style"


const PetsData = [{
    ID: "000000",
    categoria: "Cães",
    lastModification: "00/00/0000",
    status: "Não-Adotado"
  },
  {
    ID: "000001",
    categoria: "Gato",
    lastModification: "00/00/0001",
    status: "Adotado"
  }
]


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

    <S.ListConteiner>
      <S.LabelPainel>
        Painel Administrativo Geral
      </S.LabelPainel>
    { PetsData.map( (pets) => 
      <S.ListPets>
      <S.LabelList>
        <div>ID: {pets.ID}</div>
        <div>Categoria: {pets.categoria}</div>
        <div>Ultima modificação: {pets.lastModification}</div>
        <div>Status: {pets.status}</div>
        <Buttom height="30px" >Excluir</Buttom>
      </S.LabelList>
    </S.ListPets>
    ) }
    </S.ListConteiner>
    
    </S.Conteiner>
</>
  );
};

export default AdminInicial;

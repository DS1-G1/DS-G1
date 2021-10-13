import React from "react";
import Navbar from "../../components/NavBar";
import Buttom from "../../components/buttonBlue";
import * as S from "./style"



const ONGS = {
    pets: [{
            nome: "Zé",
            categoria: "Cão",
            sexo: "Feminino",
            criado: "00/00/0000",
            canil: "ONG do Zé"
            },
            {
              nome: "Mane",
              categoria: "Gato",
              sexo: "maculino",
              criado: "00/00/0000",
              canil: "ONG do Mané"
            }],

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
        { ONGS.pets.map( (pets) => <Buttom color="transparent" >{pets.canil }</Buttom>) }
      </S.ButtonsIndex>

    <S.ListConteiner>
      <S.LabelPainel>
        Painel Administrativo Canil
      </S.LabelPainel>
      { ONGS.pets.map( (pets) => 
        <S.ListPets>
          <S.LabelList>
            <div>Nome: {pets.nome}</div>
            <div>Categoria: {pets.categoria}</div>
            <div>Sexo: {pets.sexo}</div>
            <div>Criado: {pets.criado}</div>
            <Buttom height="30px" >Editar</Buttom>
            <Buttom height="30px" >Adotado</Buttom>
          </S.LabelList>
        </S.ListPets>) 
      }

      {/* <S.ListPets>
        <S.LabelList>
          <div>Nome: {ONGS.nome}</div>
          <div>Categoria: {ONGS.pets.nome}</div>
          <div>Sexo: {ONGS.pets.categoria}</div>
          <div>Criado: {ONGS.pets.sexo}</div>
          <div>Criado: {ONGS.pets.criado}</div>
          <Buttom height="30px" >Editar</Buttom>
          <Buttom height="30px" >Adotado</Buttom>
        </S.LabelList>
      </S.ListPets> */}
    </S.ListConteiner>
    
    </S.Conteiner>
</>
  );
};

export default AdminCanis;
import React from "react";
import * as S from './style'
import ButtonBlue from "../buttonBlue";

const popUp = () => {
  return (

    <S.Conteiner>
      <div className="nome">
        <h2>Nome</h2>
      </div>
        <S.Containersection>
          <div className="especie">
            <h3>Espécie</h3>
            <p></p>
          </div>
          <div className="idade">
            <h3>Idade</h3>
            <p></p>
          </div>
          <div className="local">
            <h3>Local</h3>
            <p></p>
          </div>
          <div className="raca">
            <h3>Raça</h3>
            <p></p>
          </div>
          <div className="porte">
            <h3>Porte</h3>
            <p></p>
          </div>
          <div className="microchip">
            <h3>Microchip</h3>
            <p></p>
          </div>
          <div className="sobre_o_pet">
            <h3>Sobre o pet</h3>
            <p></p>
          </div>
      </S.Containersection>
      <ButtonBlue>Adotar </ButtonBlue>
    </S.Conteiner>
  );
};

export default popUp;




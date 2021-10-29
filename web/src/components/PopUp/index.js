import React from "react";
import * as S from "./style";
import ButtonBlue from "../buttonBlue";
import { BiFemaleSign } from "react-icons/bi";
import { IoMdMale } from "react-icons/io";

const popUp = ({ dataprops, setTrigger, trigger }) => {
  // console.log(dataprops.sexo)
  return trigger ? (
    <S.Conteiner onClick={() => setTrigger(false)}>
      <S.Conteudo>
        <S.Image src={dataprops.image} />
        <S.Dados>
          <S.Toppo>
            <h1>{dataprops.petname}</h1>
            {dataprops.sexo === "Macho" ? (
              <IoMdMale color="##63CDDA" size={40} />
            ) : (
              <BiFemaleSign color="#F854CD" size={40} />
            )}
          </S.Toppo>
          <S.TodosDados>
            <div className="especie">
              <h3>Espécie</h3>
              <p>{dataprops.especie}</p>
            </div>
            <div className="idade">
              <h3>Idade</h3>
              <p>{dataprops.idade}</p>
            </div>
            <div className="local">
              <h3>Local</h3>
              <p>{dataprops.local}</p>
            </div>
            <div className="raca">
              <h3>Raça</h3>
              <p>{dataprops.raca}</p>
            </div>
            <div className="porte">
              <h3>Porte</h3>
              <p>{dataprops.porte}</p>
            </div>
            <div className="microchip">
              <h3>Microchip</h3>
              <p>{dataprops.microchip}</p>
            </div>
            <div className="sobre_o_pet">
              <h3>Sobre o pet</h3>
              <p>{dataprops.sobre}</p>
            </div>
          </S.TodosDados>
          <S.Butpms>
            <ButtonBlue key={dataprops.id} onClick={() => setTrigger(false)}>
              {" "}
              Fechar{" "}
            </ButtonBlue>

            <ButtonBlue width="150px" height="50px" key={dataprops.id}>
              {" "}
              Adotar{" "}
            </ButtonBlue>
          </S.Butpms>
        </S.Dados>
      </S.Conteudo>
    </S.Conteiner>
  ) : (
    ""
  );
};

export default popUp;

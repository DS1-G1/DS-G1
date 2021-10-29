import React from "react";
import * as S from "./style";
import ButtonBlue from "../buttonBlue";
import { BiFemaleSign } from "react-icons/bi";
import { IoMdMale } from "react-icons/io";

const popUpAdopt = ({ dataprops, setTrigger, trigger }) => {
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
            <S.responsavel>
              <h3>Responsavel</h3>
              <p>{dataprops.ong}</p>
            </S.responsavel>
            <div className="especie">
              <h3>Telefone</h3>
              <p>{dataprops.telefone}</p>
            </div>
          </S.TodosDados>
          <S.Butpms>
            <ButtonBlue key={dataprops.id} onClick={() => setTrigger(false)}>
              {" "}
              Fechar{" "}
            </ButtonBlue>
          </S.Butpms>
        </S.Dados>
      </S.Conteudo>
    </S.Conteiner>
  ) : (
    ""
  );
};

export default popUpAdopt;

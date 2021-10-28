import { useState } from "react";
import * as S from "./style";
import Button from "../buttonBlue";
import Select from "react-select";
import { options } from "./optionsData";

const FormCadastro = () => {
  const submit = (data) => {
    console.log(data);
  };
  return (
    <S.Conteiner>
      <S.Title>Faça o cadastro do pet</S.Title>

      <label for="avatar">Selecione a foto do seu pet &#10132;</label>
      <input
        type="file"
        id="avatar"
        name="avatar"
        accept="image/png, image/jpeg"
      />
      <form onSubmit={submit}>
        <S.subTitle>Dados do(a) responsavel</S.subTitle>
        <S.Containerselect>
          <S.Imput
            className="pet-nome"
            placeholder="Nome do responsavel"
            type="text"
          />
          <S.Imput className="pet-nome" placeholder="Telefone" type="text" />
        </S.Containerselect>
        <S.subTitle>Dados do Pet</S.subTitle>
        <S.Containerselect>
          <S.Imput className="pet-nome" placeholder="Nome do pet" type="text" />
          {options.map((item, index) => (
            <Select
              className="select"
              defaultValue={options[index]}
              options={item.value}
            />
          ))}
          <S.Imput className="sobre" placeholder="Sobre o pet" type="text" />
        </S.Containerselect>
        <S.ContainerInput>
          <Button type="submit" style={{ padding: "20px 45px" }}>
            Confirmar Pet
          </Button>
        </S.ContainerInput>
      </form>
    </S.Conteiner>
  );
};

export default FormCadastro;

import { useState } from "react";
import * as S from "./style";
import Button from "../buttonBlue";
import Select from "react-select";
import { sexo, porte, idade, local, especie, options } from "./optionsData";
import { useForm } from "react-hook-form";

const FormCadastro = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);




  console.log(watch("example"));
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
      <form onSubmit={handleSubmit(onSubmit)}>
        <S.subTitle>Dados do(a) responsavel</S.subTitle>
        <S.Containerselect>
          <S.Imput
            className="pet-nome"
            placeholder="Nome do responsavel"
            type="text"
            {...register("nomeDoador")}
          />
          <S.Imput className="pet-nome" placeholder="Telefone" type="text" {...register("telefone")} />
        </S.Containerselect>
        <S.subTitle>Dados do Pet</S.subTitle>
        <S.Containerselect>
          <S.Imput className="nomepet" placeholder="Nome do pet" type="text" {...register("nomepet")} />
          <S.Select className="especie" {...register("especie")}>
            <option value="cachorro">Cachorro</option>
            <option value="gato" selected>Gato</option>
          </S.Select>
          <S.Select className="porte" {...register("porte")}>
            <option value="pequeno">Pequeno</option>
            <option value="médio" > Médio </option>
            <option value="grande"> Grande</option>

          </S.Select>

          <S.Select className="idade" {...register("idade")}>
            <option value="menosde1"> Menos de 1 ano </option>
            <option value="1">1 ano</option>
            <option value="2"> 2 anos </option>
            <option value="3">3 anos</option>
            <option value="4">4 anos </option>
            <option value="5">5 anos</option>
            <option value="6">6 anos</option>
            <option value="7">7 anos</option>
            <option value="8">8 anos</option>
            <option value="9">9 anos ou mais</option>
            <option value="naosei">Não sei informar</option>
          </S.Select>

          <S.Select className="local" {...register("local")}>
            <option value="df">DF - Distrito Federal" </option>
            <option value="ac">AC - Acre" </option>
            <option value="ap">AP - Amapá" </option>
            <option value="am">AM - Amazonas" </option>
            <option value="pa">PA - Pará" </option>
            <option value="ro">RO - Rondônia" </option>
            <option value="rr">RR - Roraima" </option>
            <option value="to">TO - Tocantins" </option>
            <option value="al">AL - Alagoas" </option>
            <option value="ba">BA - Bahia" </option>
            <option value="ce">CE - Ceará" </option>
            <option value="ma">MA - Maranhão" </option>
            <option value="pb">PB - Paraíba" </option>
            <option value="pe">PE - Pernambuco" </option>
            <option value="pi">PI - Piauí" </option>
            <option value="rn">RN - Rio Grande do Norte" </option>
            <option value="se">SE - Sergipe" </option>
            <option value="es">ES - Espírito Santo" </option>
            <option value="mg">MG - Minas Gerais" </option>
            <option value="rj">RJ - Rio de Janeiro" </option>
            <option value="sp">SP - São Paulo" </option>
            <option value="pr">PR - Paraná" </option>
            <option value="rs">RS - Rio Grande do Sul" </option>
            <option value="sc">SC - Santa Catarina" </option>
            <option value="go">GO - Goiás" </option>
            <option value="mt">MT - Mato Grosso" </option>
            <option value="ms">MS - Mato Grosso do Sul" </option>
          </S.Select>

          <S.Select className="sexo" {...register("sexo")}>
            <option value= "Macho">Macho</option>
            <option value= "Femea">Femea</option>
            <option value= "Indefinido">Indefinido</option>
          </S.Select>

          <S.Imput className="sobre" placeholder="Sobre o pet" type="text" {...register("sobre")} />
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

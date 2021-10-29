import * as S from "./style";
import Button from "../buttonBlue";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { petService } from "../../service";
import { Redirect } from "react-router";

const FormCadastro = () => {
  const [redir, setRedir] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    console.log(data);
    const {
      especie,
      idade,
      local,
      nomeDoador,
      nomepet,
      porte,
      sexo,
      sobre,
      telefone,
    } = data;
    petService
      .create({
        especie,
        idade,
        localizacao: local,
        nomeDoador,
        nome: nomepet,
        porte,
        sexo,
        descricao: sobre,
        telefone,
      })
      .then(() => setRedir(true));
  };
  if (redir) {
    return <Redirect to="/adopt" />;
  }
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
          <S.Imput
            className="pet-nome"
            placeholder="Telefone"
            type="text"
            {...register("telefone")}
          />
        </S.Containerselect>
        <S.subTitle>Dados do Pet</S.subTitle>
        <S.Containerselect>
          <S.Imput
            className="pet-nome"
            placeholder="Nome do pet"
            type="text"
            {...register("nomepet")}
          />
          <S.Select className="especie" {...register("especie")}>
            <option value="Cachorro">Cachorro</option>
            <option value="Gato" selected>
              Gato
            </option>
          </S.Select>
          <S.Select className="porte" {...register("porte")}>
            <option value="Pequeno">Pequeno</option>
            <option value="Medio"> Médio </option>
            <option value="Grande"> Grande</option>
          </S.Select>

          <S.Select className="idade" {...register("idade")}>
            <option value="0"> Menos de 1 ano </option>
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
            <option value="DF">DF - Distrito Federal" </option>
            <option value="AC">AC - Acre" </option>
            <option value="AP">AP - Amapá" </option>
            <option value="AM">AM - Amazonas" </option>
            <option value="PA">PA - Pará" </option>
            <option value="RO">RO - Rondônia" </option>
            <option value="RR">RR - Roraima" </option>
            <option value="TO">TO - Tocantins" </option>
            <option value="AL">AL - Alagoas" </option>
            <option value="BA">BA - Bahia" </option>
            <option value="CE">CE - Ceará" </option>
            <option value="MA">MA - Maranhão" </option>
            <option value="PB">PB - Paraíba" </option>
            <option value="PE">PE - Pernambuco" </option>
            <option value="PI">PI - Piauí" </option>
            <option value="RN">RN - Rio Grande do Norte" </option>
            <option value="SE">SE - Sergipe" </option>
            <option value="ES">ES - Espírito Santo" </option>
            <option value="MG">MG - Minas Gerais" </option>
            <option value="RJ">RJ - Rio de Janeiro" </option>
            <option value="SP">SP - São Paulo" </option>
            <option value="PR">PR - Paraná" </option>
            <option value="RS">RS - Rio Grande do Sul" </option>
            <option value="SC">SC - Santa Catarina" </option>
            <option value="GO">GO - Goiás" </option>
            <option value="MT">MT - Mato Grosso" </option>
            <option value="MS">MS - Mato Grosso do Sul" </option>
          </S.Select>

          <S.Select className="sexo" {...register("sexo")}>
            <option value="Macho">Macho</option>
            <option value="Femea">Femea</option>
          </S.Select>

          <S.Imput
            className="sobre"
            placeholder="Sobre o pet"
            type="text"
            {...register("sobre")}
          />
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

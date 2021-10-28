import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import ButtonBlue from "../buttonBlue";
import { userService } from "../../service";
import "./cadastroUser.css";

const SignupSchema = Yup.object({
  nome: Yup.string()
    .min(2, "Nome muito pequeno!")
    .max(50, "Nome muito longo!")
    .required("Required"),
  sobrenome: Yup.string()
    .min(2, "muito pequeno!")
    .max(100, "muito longo!")
    .required("Required"),
  celular: Yup.string()
    .min(8, "muito pequeno!")
    .max(20, "muito longo!")
    .required("Required"),
  cpf: Yup.string()
    .min(11, "muito pequeno!")
    .max(20, "muito longo!")
    .required("Required"),
  senha: Yup.string()
    .min(8, "muito pequeno!")
    .max(20, "muito longo!")
    .required("Required"),
  confirmSenha: Yup.string().oneOf(
    [Yup.ref("senha"), null],
    "senhas não coincidem"
  ),
  email: Yup.string().email("Invalid email").required("Required"),
}).required();

const TelaCadastroUser = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: yupResolver(SignupSchema),
  });
  let history = useHistory();
  const [checkedAdopt, setCheckedAdopt] = useState(false);
  const [checkedDivulgar, setCheckedDivulgar] = useState(false);
  const [tipo, setTipo] = useState("");

  const onSubmit = async (data) => {
    await userService.create(data);
    reset();
    history.push("/login");
  };
  const onError = (errors, e) => console.log(errors, e);

  const handleTipo = (value) => {
    setTipo(value.target.value);
  };

  const handleChangeAdopt = () => {
    setCheckedAdopt(!checkedAdopt);
  };
  const handleChangeDivulgar = () => {
    setCheckedDivulgar(!checkedDivulgar);
  };

  let selectAdocaoEnable = true;

  if (checkedDivulgar === true) selectAdocaoEnable = false;

  return (
    <div className="containerLogin">
      <div className="splitLeft">
        <div className="centerlabel cadastroLabel">Cadastro</div>

        <div className="checkboxCadastro">
          <div>
            <input
              name="querAdotar"
              type="checkbox"
              value={checkedAdopt}
              onChange={handleChangeAdopt}
            />
            <label> Quero adotar um Pet</label>
          </div>

          <div>
            <input
              name="querDivulgar"
              type="checkbox"
              value={checkedDivulgar}
              onChange={handleChangeDivulgar}
            />
            <label> Quero divulgar para adoção</label>
          </div>

          <div>
            <label>Estou doando pois: </label>
            <select
              name="motivo"
              id="motivoDoacao"
              defaultValue={""}
              onChange={handleTipo}
              disabled={selectAdocaoEnable}
            >
              <option value="" disabled>
                Selecionar:
              </option>
              <option value="ong">Sou responsavel por uma ONG de adoção</option>
              <option value="user">
                Sou criador(a) de animais domésticos independente
              </option>
              <option value="user">
                Achei um Pet e não tenho condição de ficar com ele
              </option>
            </select>
          </div>
        </div>

        <form
          className="signUpformContainer"
          onSubmit={handleSubmit(onSubmit, onError)}
        >
          <div className="alignIcon">
            <input
              placeholder={
                tipo === "" || tipo === "user"
                  ? "Digite seu nome"
                  : "Nome da ONG"
              }
              {...register("nome")}
              className="inputLogin"
            ></input>
            <p className="error">{errors.nome?.message}</p>
            <input
              placeholder={
                tipo === "" || tipo === "user"
                  ? "Digite seu sobrenome"
                  : "Dê uma descricao"
              }
              className="inputLogin"
              {...register("sobrenome")}
            ></input>
            <p className="error">
              {tipo === "user" ? errors.sobrenome?.message : null}
            </p>
          </div>

          <div className="alignIcon">
            <input
              placeholder="Digite seu email"
              className="inputLogin"
              {...register("email")}
            ></input>
            <p className="error">{errors.email?.message}</p>
            <input
              placeholder="Celular"
              className="inputLogin"
              {...register("celular")}
            ></input>
            <p className="error">{errors.celular?.message}</p>
          </div>
          <div className="alignIcon">
            <input
              placeholder="Senha"
              type="password"
              className="inputLogin"
              {...register("senha")}
            ></input>
            <p className="error">{errors.senha?.message}</p>
            <input
              placeholder="Confirme sua senha"
              type="password"
              className="inputLogin"
              {...register("confirmSenha")}
            ></input>
            <p className="error">{errors.confirmSenha?.message}</p>
          </div>
          <div className="alignIcon">
            <input
              placeholder={tipo === "" || tipo === "user" ? "CPF" : "CNPJ"}
              type="text"
              className="inputLogin"
              {...register("cpf")}
            ></input>
            <p className="error">{errors.cpf?.message}</p>
          </div>
          <dev className="signUpButton">
            <ButtonBlue type="submit" width="260px" height="48px">
              {isSubmitting ? "Carregando..." : "Cadastrar"}
            </ButtonBlue>
          </dev>
        </form>
      </div>

      <div className="splitRight">
        <img src="./" alt="" />
      </div>
    </div>
  );
};

export default TelaCadastroUser;

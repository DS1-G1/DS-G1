import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import ButtonBlue from "../buttonBlue";
import { userService } from "../../service";
import "./cadastroUser.css";

const SignupSchema = Yup.object().shape({
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
  cep: Yup.string()
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
});

const TelaCadastroUser = () => {
  const [checkedAdopt, setCheckedAdopt] = useState(false);
  const [checkedDivulgar, setCheckedDivulgar] = useState(false);
  const [tipo, setTipo] = useState("");

  const handleTipo = (value) => {
    setTipo(value.target.value);
  };
  const createUser = async (body) => {
    const { nome, email, senha, celular, cep, sobrenome } = body;
    await userService.create({
      nome,
      email,
      senha,
      telefone: celular,
      //cep,
      sobreNome: sobrenome,
    });
  };

  const formik = useFormik({
    initialValues: {
      nome: "",
      sobrenome: "",
      email: "",
      celular: "",
      cep: "",
      cpf: "",
      senha: "",
      confirmSenha: "",
    },
    enableReinitialize: true,
    //validationSchema: SignupSchema,
    onSubmit: (values) => {
      console.log(values);
      createUser(values);
    },
  });
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
            <label>Quero adotar um Pet</label>
          </div>

          <div>
            <input
              name="querDivulgar"
              type="checkbox"
              value={checkedDivulgar}
              onChange={handleChangeDivulgar}
            />
            <label>Quero divulgar para adoção</label>
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

        <form className="signUpformContainer" onSubmit={formik.handleSubmit}>
          <div className="alignIcon">
            <input
              placeholder={
                tipo === "" || tipo === "user"
                  ? "Digite seu nome"
                  : "Nome da ONG"
              }
              type="text"
              className="inputLogin marginInput"
              value={formik.values.nome}
              onChange={formik.handleChange("nome")}
            ></input>
            {/* {formik.touched.nome ? formik.errors.nome : SignupSchema} */}
            <input
              placeholder={
                tipo === "" || tipo === "user"
                  ? "Digite seu sobrenome"
                  : "Dê uma descricao"
              }
              type="text"
              className="inputLogin"
              value={formik.values.sobrenome}
              onChange={formik.handleChange("sobrenome")}
            ></input>
          </div>

          <div className="alignIcon">
            <input
              placeholder="Digite seu email"
              type="email"
              className="inputLogin marginInput"
              value={formik.values.email}
              onChange={formik.handleChange("email")}
            ></input>
            <input
              placeholder="Celular"
              type="tel"
              className="inputLogin"
              value={formik.values.celular}
              onChange={formik.handleChange("celular")}
            ></input>
          </div>

          <div className="alignIcon">
            <input
              placeholder="CEP"
              type="text"
              className="inputLogin"
              value={formik.values.cep}
              onChange={formik.handleChange("cep")}
            ></input>
            <input
              placeholder={tipo === "" || tipo === "user" ? "CPF" : "CNPJ"}
              type="text"
              className="inputLogin"
              value={formik.values.cpf}
              onChange={formik.handleChange("cpf")}
            ></input>
          </div>
          <div className="alignIcon">
            <input
              placeholder="Senha"
              type="password"
              className="inputLogin"
              value={formik.values.senha}
              onChange={formik.handleChange("senha")}
            ></input>
            <input
              placeholder="Confirme sua senha"
              type="password"
              className="inputLogin"
              value={formik.values.confirmSenha}
              onChange={formik.handleChange("confirmSenha")}
            ></input>
          </div>
          <dev className="signUpButton">
            <ButtonBlue type="submit" width="260px" height="48px">
              Confirmar Cadastro
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

import React from "react";
import "../styles/login.css";
import {AiOutlineMail} from 'react-icons/ai'
import {RiLockPasswordFill } from 'react-icons/ri'
import iconEmail from "../img/iconEmail.png"
import iconPassword from "../img/iconPassword.png"


function TelaLogin () {
  return(
    <div className="containerLogin">

      <div className="splitLeft">
        <div className="centerlabel loginLabel">Login</div>

        <form className="formContainer">

          <label className="labelsInput">Email</label>
          <div className="alignIcon">
            <img src={AiOutlineMail} alt="Email" className="iconEmail" />
            <input placeholder="seuemail@email.com" type="email" className="inputLogin"></input>
          </div>

          <label className="labelsInput">Senha</label>
          <div className="alignIcon">
            <img src={RiLockPasswordFill} alt="Password" className="RiLockPasswordFill" />
            <input placeholder="Digite sua senha" type="password" className="inputLogin"></input>
          </div>

          <div className="centerlabel">
            <label>Não possui cadastro? </label> 
            <a href={"#"}>Cadastre-se</a>
          </div>

          <button type="submit" className="loginButton">Login</button>
        </form>
      </div>


      <div className="splitRight">
      </div>
    </div>
  );
};

export default Login;

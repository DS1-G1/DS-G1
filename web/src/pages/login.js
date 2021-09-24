import React from "react";
import "../styles/login.css";
import Navbar from "../components/NavBar";
import ButtonBlue from "../components/buttonBlue";
import iconEmail from "../img/iconEmail.png"
import iconPassword from "../img/iconPassword.png"


function Login () {
  return(<>
    <Navbar></Navbar>
    <div className="containerLogin">
      <div className="splitLeft">
        <div className="centerlabel loginLabel">Login</div>

        <form className="formContainer">

          <label className="labelsInputLogin">Email</label>
          <div className="alignIcon">
            <img src={iconEmail} alt="iconEmail" className="iconEmail" />
            <input placeholder="seuemail@email.com" type="email" className="inputLogin"></input>
          </div>

          <label className="labelsInputLogin">Senha</label>
          <div className="alignIcon">
            <img src={iconPassword} alt="iconPassword" className="iconPassword" />
            <input placeholder="Digite sua senha" type="password" className="inputLogin"></input>
          </div>

          <div className="centerlabel">
            <label>Não possui cadastro? </label> 
            <a href={".#"}>Cadastre-se</a>
          </div>
          <div className="loginButton">
            <ButtonBlue type="submit">Login</ButtonBlue>
          </div>
        </form>
      </div>


      <div className="splitRight">
      </div>
    </div>
    </>
  );
};

export default Login;

import React from "react";
import "./App.css";
import iconEmail from "./img/iconEmail.png"
import iconPassword from "./img/iconPassword.png"


function TelaLogin () {
  return(
    <div className="containerLogin">

      <div className="splitLeft">
        <div className="centerlabel loginLabel">Login</div>

        <form className="formContainer">

          <label className="labelsInput">Email</label>
          <div className="alignIcon">
            <img src={iconEmail} alt="Email" className="iconEmail" />
            <input placeholder="seuemail@email.com" type="email" className="inputLogin"></input>
          </div>

          <label className="labelsInput">Senha</label>
          <div className="alignIcon">
            <img src={iconPassword} alt="Password" className="iconPassword" />
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
  )
}


function App() {
  return (
    <TelaLogin />
  );
}

export default App;
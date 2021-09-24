import React from "react";
import ButtonBlue from "../buttonBlue";
import "./cadastroUser.css";


const TelaCadastroUser = () => {

  const [checkedAdopt, setCheckedAdopt] = React.useState(false);
  const [checkedDivulgar, setCheckedDivulgar] = React.useState(false);
 
  const handleChangeAdopt = () => {
    setCheckedAdopt(!checkedAdopt);
  };
  const handleChangeDivulgar = () => {
    setCheckedDivulgar(!checkedDivulgar);
  };

  let selectAdocaoEnable=true

  if(checkedDivulgar===true)
  selectAdocaoEnable=false


  return(
    <div className="containerLogin">

      <div className="splitLeft">
        <div className="centerlabel cadastroLabel">Cadastro</div>

        <div className="checkboxCadastro">
          <div> 
            <input name="querAdotar" type="checkbox" value={checkedAdopt} onChange={handleChangeAdopt} />
            <label>Quero adotar um Pet</label>
          </div>

          <div> 
            <input name="querDivulgar" type="checkbox" value={checkedDivulgar} onChange={handleChangeDivulgar} />
            <label>Quero divulgar para adoção</label>
          </div>

          <div> 
            <label>Estou doando pois: </label>
            <select name="motivo" id="motivoDoacao" defaultValue={''} disabled={selectAdocaoEnable}>
              <option value="" disabled>Selecionar:</option>
              <option value="ONG">Sou responsavel por uma ONG de adoção</option>
              <option value="criador independente">Sou criador(a) de animais domésticos independente</option>
              <option value="sem condicoes">Achei um Pet e não tenho condição de ficar com ele</option>
            </select>
          </div>
        </div>

        <form className="signUpformContainer">

          <div className="alignIcon">
            <input placeholder="Digite seu nome" type="text" className="inputLogin marginInput"></input>
            <input placeholder="Digite seu sobrenome" type="text" className="inputLogin"></input>
          </div>

          <div className="alignIcon">
            <input placeholder="Digite seu email" type="email" className="inputLogin marginInput"></input>
            <input placeholder="Celular" type="tel" className="inputLogin"></input>
          </div>

          <div className="alignIcon">
            <input placeholder="Endereço" type="text" className="inputLogin marginInput"></input>
            <input placeholder="CEP" type="text" className="inputLogin"></input>
          </div>

          <div className="alignIcon">
            <input placeholder="Senha" type="password" className="inputLogin marginInput"></input>
            <input placeholder="CPF" type="text" className="inputLogin"></input>
          </div>

          <div className="alignIcon">
            <input placeholder="Confirme sua senha" type="password" className="inputLogin marginInput"></input>
            <dev className="signUpButton">
              <ButtonBlue type="submit">Confirmar Cadastro</ButtonBlue>
            </dev>
          </div>
          
        </form>
      </div>


      <div className="splitRight">
        <img src="./" alt="" />
      </div>

    </div>
  )
}


export default TelaCadastroUser;
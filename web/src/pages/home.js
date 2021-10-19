import React from "react";
import Navbar from "../components/NavBar";
import "../styles/sobreOSite.css";
import ButtonBlue from "../components/buttonBlue";
import imgCrop1 from "../img/imgCrop1.png"
import imgCrop2 from "../img/imgCrop2.png"
import imgCrop3 from "../img/imgCrop3.png"
import logo from "../img/logo.png"
import iconFacebook from "../img/iconFacebook.png"
import iconTwitter from "../img/iconTwitter.png"
import iconInstagram from "../img/iconInstagram.png"
import popUp from "../components/popUp";


function Home () {
  return(
    <div>
      <Navbar></Navbar>
      <div className="headerContainer">
        <div className="headerContain">
          <label className="headerLabel">Ja adotou hoje?</label>
          <label className="headerLabel">Vamos lá seu amigo esta te esperando </label>
          <a href="/adopt" className="adoptButtom"><ButtonBlue>Adote Agora</ButtonBlue></a>
        </div>
      </div>
      <div className="bodyPage">
        <div className="sobreNos">Nós fazemos a conexão entre quem deseja adotar um pet com uma rede de mais de 90 ONGs e protetores parceiros. 
          Funciona assim: a Petz disponibiliza espaços especialmente dedicados para a adoção no centro de suas lojas e as 
          ONGs/protetores parceiros ficam responsáveis pelo processo e entrevista com os potenciais adotantes. Juntos somos 
          mais fortes!</div>
        <div className="titlePet">Porque adotar um Pet?</div>
        <div className="imgCropContainer">
          <figure className="imgLabel">
            <img src={imgCrop1} alt="imgCrop1" className="imgCrop" />
            <figcaption> Você terá um companheiro para todas as horas</figcaption>
          </figure>
          <figure className="imgLabel">
            <img src={imgCrop2} alt="imgCrop2" className="imgCrop" />
            <figcaption>Você estará resgatando uma vida</figcaption>
            </figure>
          <figure className="imgLabel">
            <img src={imgCrop3} alt="imgCrop3" className="imgCrop" />
            <figcaption>Animais ajudam a desenvolver responsabilidade</figcaption>
            </figure>
        </div>

        <div className="mainBackgroud">

          <div className="containerMain">
            <div className="textoAdote">
              <label className="tituloAdote">Adote hoje seu amigo para te fazer companhia</label>
              <div>
                <label className="textoConteudo">Cerca de 200 animais sao adotados todos os dias, faca parte desse grupo e ganhe um companheiro</label>
              </div>
            </div>
            <a href="/adopt" className="alignButtonMain"><ButtonBlue>Adote Agora</ButtonBlue></a>
          </div>
          
          <div className="containerMain">
            <a href="/login" className="alignButtonMain"><ButtonBlue>Cadastre Agora</ButtonBlue></a>
            <div className="textoCadastre">
              <label className="tituloCadastre">Cadastre um Pet para adocao e salve vidas</label>
              <div>
                <label className="textoConteudo">Nao deixe um animal de fora, ajude achar uma casa para esse fofucho colocando para outros adotarem</label>
              </div>
            </div>
          </div>
          
          

        </div>


      </div>

      <div className="footer containerF">
        <div>
          <img src={logo} alt="imgCrop2" />
        </div>
        <div className="sobreSite">
          <li><a href={"/#"}>Serviços</a></li>
          <li><a href={"/#"}>Adoção</a></li>
          <li><a href={"/#"}>Contato do site</a></li>
        </div>
        <div className="redesSociais">
          <li>Siga a gente:</li>
          <li>
            <img src={iconFacebook} alt="iconFacebook" className="iconFooter"/>
            <a href="/#">Facebook</a>
          </li>
          <li>
          <img src={iconTwitter} alt="iconTwitter" className="iconFooter"/>
            <a href="/#">Twitter</a>
            </li>
          <li>
          <img src={iconInstagram} alt="iconInstagram" className="iconFooter"/>
            <a href="/#">Instagram</a>
            </li>
        </div>
          
      </div>
    <popUp/>
    </div>
  )
}


export default Home;
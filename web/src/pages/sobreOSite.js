import React from "react";
import "../styles/sobreOSite.css";
import imgCrop1 from "../img/imgCrop1.png"
import imgCrop2 from "../img/imgCrop2.png"
import imgCrop3 from "../img/imgCrop3.png"


function SobreOSite () {
  return(
    <div>
      <div className="headerContainer">
        <div className="headerContain">
          <label className="headerLabel">Ja adotou hoje?</label>
          <label className="headerLabel">Vamos lá seu amigo esta te esperando </label>
          <button className="adoptButtom">Adote Agora</button>
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

          <label>Adote hoje seu amigo para te fazer companhia</label>
          <div>
            <label>Cerca de X animais sao adotados todos os dias, faca parte desse grupo e ganhe um companheiro</label>
            <button>Adote Agora</button>
          </div>

          <label>Cadastre um Pet para adocao e salve vidas</label>
          <div>
            <button>Cadastre Agora</button>
            <label>Nao deixe um animal de fora, ajude achar uma casa para esse fofucho colocando para outros adotarem</label>
          </div>

        </div>


      </div>

      <div className="footer">

      </div>

    </div>
  )
}


export default SobreOSite;
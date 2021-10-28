import {useState} from 'react'
import * as C from './style'
import Button from "../buttonBlue"
import {BiCurrentLocation} from "react-icons/bi"
import {BiFemaleSign} from "react-icons/bi"
import {IoMdMale} from "react-icons/io"
import PopUp from '../PopUp'

// import photoPet1 from "../../img/gato.png"



const CardPets = ({dataPet}) => {
    const [buttonPopup, setButtonPopup] = useState(false)
  return(
    <C.Container >

      <C.ImgContainer src={dataPet.image}/> 

      <C.PetInfo>
        <C.InfoDiv>
          <C.PetName>{dataPet.petname}</C.PetName>
          <C.ONGName>{dataPet.ong}</C.ONGName>
          <C.Location><BiCurrentLocation />{dataPet.location}</C.Location>
        </C.InfoDiv>
        <C.IconSex>
          {dataPet.sexo==="Macho" ? <IoMdMale/> : <BiFemaleSign/>}
          
        </C.IconSex>
      </C.PetInfo>
      <Button 
      height="40px" 
      width="280px" 
      color="#546DE5" 
      radius="0px 0px 0px 0px"
       >
         Adotar
       </Button>
      <Button 
      height="40px"
       width="280px" 
       color="#303952"
        radius="0px 0px 25px 25px"
        onClick={()=>setButtonPopup(true)}
        key={dataPet.id}
        >
          Detalhes
        </Button>

        <PopUp dataprops={dataPet} trigger={buttonPopup} setTrigger={setButtonPopup}/>


    </C.Container>

  )

}

export default CardPets
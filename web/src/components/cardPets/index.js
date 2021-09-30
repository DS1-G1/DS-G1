import * as C from './style'
import photoPet from "../../img/dogCard.png"
import Button from "../buttonBlue"
import {BiCurrentLocation} from "react-icons/bi"
import {BiFemaleSign} from "react-icons/bi"
import {IoMdMale} from "react-icons/io"

// import photoPet1 from "../../img/gato.png"

const dataPet = {
  petName: "Gilberson",
  ONG: "DogONGs",
  location: "São Sebas - Brasilia DF",
  sexo: "M"
}

const CardPets = (props) => {
  console.log(dataPet)
  return(

    <C.Container >

      <C.ImgContainer src={photoPet}/> 

      <C.PetInfo>
        <C.InfoDiv>
          <C.PetName>{dataPet.petName}</C.PetName>
          <C.ONGName>{dataPet.ONG}</C.ONGName>
          <C.Location><BiCurrentLocation />{dataPet.location}</C.Location>
        </C.InfoDiv>
        <C.IconSex>
          {dataPet.sexo==="M" ? <IoMdMale/> : <BiFemaleSign/>}
          
        </C.IconSex>
      </C.PetInfo>
      <Button height="40px" width="280px" color="#546DE5" radius="0px 0px 0px 0px">Adotar</Button>
      <Button height="40px" width="280px" color="#303952" radius="0px 0px 25px 25px">Detalhes</Button>


    </C.Container>

  )

}

export default CardPets
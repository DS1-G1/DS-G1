import * as C from './style'
import Button from "../buttonBlue"
import photoPet from "../../img/gato.png"
import {BiFemaleSign} from "react-icons/bi"
import {IoMdMale} from "react-icons/io"


const dataPet = {
  petName: "Gilberson",
  sexo: "F"
}


const CardPetsPerfil = (props) => {
  console.log(dataPet)
  return(

    <C.Container >

      <C.ImgContainer src={photoPet}/> 

      <C.PetInfo>
        <C.InfoDiv>
          <C.PetName>{dataPet.petName}</C.PetName>
        </C.InfoDiv>
        <C.IconSex>
          {dataPet.sexo==="M" ? <IoMdMale/> : <BiFemaleSign/>}
          
        </C.IconSex>
      </C.PetInfo>
      <Button height="24px" width="144px" color="#546DE5" radius="0px 0px 0px 0px" >Detalhes</Button>
      <Button height="24px" width="144px" color="#DE3434" radius="0px 0px 25px 25px">Remover</Button>


    </C.Container>

  )

}

export default CardPetsPerfil
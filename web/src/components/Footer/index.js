import * as S from './style'
import logo from '../../img/logo.png'
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa"


const FormCadastro = () => {

  return (

    <S.Conteiner>
      <S.Link href="/">
        <S.Logo src={logo} />
      </S.Link>
      <S.SobreSite>
        <li><S.Link href={"/#"}>Serviços</S.Link></li>
        <li><S.Link href={"/#"}>Adoção</S.Link></li>
        <li><S.Link href={"/#"}>Contato do site</S.Link></li>
      </S.SobreSite>
      <S.RedesSociais>
        <li>Siga a gente:</li>
        <li>
          <FaFacebookF />
          <S.Link href="/#">Facebook</S.Link>
        </li>
        <li>
          <FaTwitter />
          <S.Link href="/#">Twitter</S.Link>
        </li>
        <li>
          <FaInstagram />
          <S.Link href="/#">Instagram</S.Link>
        </li>
      </S.RedesSociais>

    </S.Conteiner>


  )
}

export default FormCadastro
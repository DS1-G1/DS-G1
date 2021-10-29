import * as S from './style'




const Profile = ({ imgprofile, name, countre }) => {

  return (

    <S.Conteiner>
      <S.Image src={imgprofile} />
      <S.Info>
        <S.Name>{name}</S.Name>
        <S.Countre>{countre}</S.Countre>
      </S.Info>
    </S.Conteiner>


  )
}

export default Profile
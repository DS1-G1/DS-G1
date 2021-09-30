import styled from 'styled-components';


export const Container = styled.div` 
  position: relative;
  background-color: #ffffff;
  border-radius: 25px;
  width: 280px;
  height: 460px;
` 

export const ImgContainer = styled.img` 
  border-radius: 25px 25px 0px 0px;
  width: 280px;
  height: 240px;
  object-fit: cover;
` 

export const PetInfo = styled.div`
  position: relative;
  display: flex;
  margin-left: 20px;
  margin-top: 5px;
  height: 100px;
` 
export const InfoDiv = styled.div`
  width = 100px;
`

export const PetName = styled.div`
  font-weight: bold;
  font-size: 20px;
`

export const ONGName = styled.div`
  font-weight: bold;
  font-size: 15px;
  color: #546DE5;
  margin-bottom: 15px;
  `

  export const Location = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
`

export const IconSex = styled.div`
  display: flex;
  position: absolute;
  margin-left: 205px;
  font-size: 40px;
`

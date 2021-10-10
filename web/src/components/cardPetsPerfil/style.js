import styled from 'styled-components';


export const Container = styled.div` 
  position: relative;
  background-color: #ffffff;
  border-radius: 25px;
  width: 144px;
  height: 200px;
` 

export const ImgContainer = styled.img` 
  border-radius: 25px 25px 0px 0px;
  width: 144px;
  height: 120px;
  object-fit: cover;
` 

export const PetInfo = styled.div`
  position: relative;
  display: flex;
  margin-left: 10px;
  margin-top: 5px;
  height: 23px;
` 
export const InfoDiv = styled.div`
  width = 100px;
`

export const PetName = styled.div`
  font-weight: bold;
  font-size: 15px;
`

export const IconSex = styled.div`
  display: flex;
  position: absolute;
  margin-left: 105px;
  font-size: 18px;
`
import styled from 'styled-components';
import img from '../../img/footer.png';


export const Conteiner = styled.div` 
    margin-top: -150px;
    height: 400px;
    background-image:url(${img});
    background-size: cover;
    padding-top: 150px;
    padding-left: 90px;
    padding-right: 90px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    justify-items: center;


`; 


export const Logo = styled.img` 

`; 

export const SobreSite = styled.ul` 
 list-style-type: none;

 li{
     margin-top: 10px;
     
 }
`; 
export const RedesSociais = styled.ul` 

  list-style-type: none;
  li{
    margin-top: 10px;
  display: flex;
    align-items: center;
    svg{
        margin-right: 10px;
    }
  }
`; 

export const Link = styled.a` 
  text-decoration: none;
  font-weight: bold;
font-size: 17px;

/* identical to box height */

letter-spacing: -0.204545px;

color: #1E2833;
`; 

import styled from 'styled-components';



export const Conteiner = styled.div` 
    margin-top: 150px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-content: center;
    align-items: center;
    justify-items: center;


`; 

export const Conteudo = styled.div` 
  display: flex;
  margin-top: 2rem;
  height: 520px;
  padding: 90px;
  background-position: center;
  background: url(${(props)=>props.imgUrl});  

`; 
export const Title = styled.p` 
 font-weight: bold;
font-size: 30px;
line-height: 35px;
text-align: center;

color: #FFFFFF;

`; 




import styled from 'styled-components';

export const Conteiner = styled.div` 
    width: 576px ;
    height: 444px;
    top: 291px;
    left: 746px;
    border: 0px solid rgba(0, 0, 0, 0.5);
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 20px;
    &:hover{
        border: none;
    }   
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`;

export const Containersection = styled.div`

    color: #989494;
    font-size: 18px;  
    border: 0.5px;
    border-radius: 5px;
    cursor: auto;
    font-weight: bolder;
    font: 15px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    //row-gap: 20px;
    //column-gap: 20px;
    //justify-items: center;
`;

export const nome = styled.div`
    font-size: 35px;
    align-items: center;
    font-weight: bolder;
`;

export const buttonBlue = styled.div`
    width: 226,26px;
    height: 70,43;
    top: 651;
    left: 1082;
    border-radius: 30px;
`;

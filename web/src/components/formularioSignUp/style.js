import styled from 'styled-components';

export const Conteiner = styled.div` 
    width: 540px ;
    height: 541px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

input[type='file'] {
    display: none
}

label {
    background-color: #546de5;
    border-radius: 5px;
    color: #fff;
    cursor: pointer;
    margin: 10px;
    padding: 6px 20px;
    font-weight: bold;
    font-size: 16px;
    border: 0.5px;
    border-radius: 5px;
    height: 35px;
} 

    .sobre{
        width: 350px;
        height: 85px;
    }
`; 

export const Imput = styled.input`
    margin-top: 10px;
    color: #989494;
    font-size: 16px;
    padding: 5px ;
    
    cursor: auto;
    font-weight: bold;

    border: 0px solid rgba(0, 0, 0, 0.5);
    box-sizing: border-box;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 5px;
    &:hover{
        border: none;
    }  
`; 

export const Containerselect = styled.div`

    color: #989494;
    font-size: 16px;  
    border: 0.5px;
    border-radius: 5px;
    cursor: auto;
    font-weight: bold;
    display: grid;
    grid-template-columns: 1fr 1fr;
    row-gap: 20px;
    column-gap: 20px;
    justify-items: center;
    .select{      
        width: 200px;       
    }
`;

export const Title = styled.h1`
    font-family: 'Baloo Tamma', cursive;
    font-size: 45px;
    font-weight: bolder; 
    margin-top: -10%;
`;

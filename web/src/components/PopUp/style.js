import styled from "styled-components";

export const Conteiner = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.2);

  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Conteudo = styled.div`
  position: relative;
  padding: 32px;
  width: 100%;
  margin: 240px;
  background-color: #fff;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 50px;

  border-radius: 10px;
`;

export const Image = styled.img`
  width: 520px;
`;

export const Dados = styled.div`
  padding: 35px;

  background: #f7f7f7;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 20px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Toppo = styled.div`
  display: flex;
`;

export const TodosDados = styled.div`
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(3, 120px);
  row-gap: 20px;
`;

export const Butpms = styled.div`
  margin-left: 20px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

import React,{useEffect, useState} from "react";
import Navbar from "../components/NavBar";
import "../styles/stylesDefault.scss";
import PopUp from "../components/PopUp";
import CardPets from "../components/cardPets";
// import { api } from "../service/api";
const dataPet = {
  
    "createdAt": "2021-10-21T14:48:40.188Z",
    "petname": "Mae Glover",
    "ong": "Colten",
    "especie": "rabbit",
    "sexo": "Cisgender",
    "raca": "Fila Brasileiro",
    "dataNascimento": "2021-07-16T04:06:41.459Z",
    "cep": "14653-6014",
    "porte": 12007,
    "location": "Niger",
    "image": "http://placeimg.com/640/480/animals",
    "id": "1"
}
const Adopt = () => {
//   const {list, setList}=useState([])
//   async function getListPets(){
//     const listPets = await api.get('/pets').then(({data})=>{
//       setList(data)
//     })
//     return listPets
//   }
// useEffect(() => {
//   getListPets()
// }, [])

// const dado = getListPets()
// console.log(dado)
  return (
    <div>
      <Navbar></Navbar>
      <div className="default">
        <h1>Adopt</h1>
        <CardPets  dataPet={dataPet}/>
        <PopUp/>
      </div>
    </div>
  );
};

export default Adopt;

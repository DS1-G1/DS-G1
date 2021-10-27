import React, { useEffect, useState } from "react";
import Navbar from "../../components/NavBar";
import "../../styles/stylesDefault.scss";
import "./styles.scss";
import PopUp from "../../components/PopUp";
import CardPets from "../../components/cardPets";
import { petService } from "../../service";

// const dataPet = {
//   createdAt: "2021-10-21T14:48:40.188Z",
//   petname: "Mae Glover",
//   ong: "Anonimo",
//   especie: "rabbit",
//   sexo: "Cisgender",
//   raca: "Fila Brasileiro",
//   dataNascimento: "2021-07-16T04:06:41.459Z",
//   cep: "14653-6014",
//   porte: 12007,
//   location: "Niger",
//   image: "http://placeimg.com/640/480/animals",
//   id: "1",
// };
const mapPets = (petArray) =>
  petArray.map((pet) => {
    return {
      id: pet.id_pet,
      petname: pet.nome || "Sem Nome",
      ong: "Anonimo",
      especie: pet.especie,
      sexo: pet.sexo,
      porte: pet.porte,
      raca: pet.raca ?? "desconhecida",
      dataNascimento: pet.dataNascimento,
      descricao: pet.descricao,
      location: pet.localizacao ?? "Local Não definido",
      image: "http://placeimg.com/640/480/animals",
    };
  });
const Adopt = () => {
  const [dataPet1, setDataPet] = useState([]);
  useEffect(() => {
    const loadDataPets = async () => {
      const response = await petService.findAll();
      setDataPet(mapPets(response));
    };
    loadDataPets();
  }, []);

  return (
    <div>
      <Navbar></Navbar>
      <div className="containerPet">
        {dataPet1.map((pet) => (
          <div key={pet.id} className="cardPet">
            <CardPets dataPet={pet} />
            <PopUp dataProps={pet} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Adopt;

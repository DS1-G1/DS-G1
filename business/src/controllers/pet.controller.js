import "dotenv/config";
import petService from "../services/pet.service";
import contaService from "../services/conta.service";
import enderecoModel from "../models/Endereco";
import { HttpException } from "../error/httpException";

export default class PetController {
  static async create(req, res) {
    var {
      nome,
      sexo,
      especie,
      porte,
      raca,
      idade,
      descricao,
      localizacao,
      telefone,
      nomeDoador,
    } = req.body;
    console.log(req.body);
    for (const [key, value] of Object.entries(req.body)) {
      if (!value) {
        throw new HttpException(400, `Campo inválido - ${key}: ${value}`);
      }
    }

    const pet = await petService.createPet({
      nome,
      sexo,
      especie,
      porte,
      raca,
      idade,
      descricao,
      localizacao,
      telefone,
      nomeDoador,
    });
    res.send(pet);
  }

  static async updatePet(req, res) {
    const { id_pet } = req.params;
    const bodyUpdate = {};
    const fieldsRestrict = [
      "especie",
      "nome",
      "sexo",
      "porte",
      "raca",
      "descricao",
    ];
    for (const [key, value] of Object.entries(req.body)) {
      if (!value) {
        throw new HttpException(400, `Campo inválido - ${key}: ${value}`);
      } else if (fieldsRestrict.includes(key)) {
        bodyUpdate[key] = value;
      }
    }
    const pet = await petService.updatePet(id_pet, bodyUpdate);
    res.send(pet);
  }

  static async listOne(req, res) {
    const { id_pet } = req.params;
    if (!id_pet) {
      throw new HttpException(400, `id inválido`);
    }
    const petFound = await petService.findOne({
      where: { id_pet },
    });
    if (!petFound) {
      throw new HttpException(404, `Não existe este pet na conta`);
    }
    res.send(petFound);
  }

  static async listAll(req, res) {
    const petsFound = await petService.findAll();
    res.send(petsFound);
  }
  static async listAllByFilter(req, res) {
    let page = req.body.page || 1;
    let limit = req.body.rowsPerPage;
    let offset = limit * (page - 1);

    const { id_estado, especie, sexo, idade } = req.body;
    let query = {},
      queryEstado = {},
      queryIdade = {};

    especie && (query.especie = especie);
    sexo && (query.sexo = sexo);
    idade && (queryIdade.idade = new Date(Date.now()).getFullYear() - idade);

    id_estado && (queryEstado.id_estado = id_estado);

    const petsFound = await petService.findAllFilter({
      where: query,
      queryIdade,
      queryEstado,
      offset,
      limit,
    });
    res.send(petsFound);
  }

  static async delete(req, res) {
    const deleted = await petService.delete(req.params.id_pet);
    res.send(deleted ? "Deletado com sucesso" : "Não foi possível remover");
  }
}

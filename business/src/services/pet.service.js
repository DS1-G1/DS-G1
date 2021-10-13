import Endereco from "../models/Endereco";
import ContaService from "./conta.service";
const EnderecoModel = require("../models/Endereco");
const EstadoModel = require("../models/Estado");
const ContaModel = require("../models/Conta");
const PetModel = require("../models/Pet");

export default class PetService {
  static async findOne(query = {}) {
    const pet = await PetModel.findOne(
      Object.assign(query, {
        include: [
          {
            model: ContaModel,
            as: "conta",
            attributes: ["nome", "email", "isAdmin", "telefone", "cep"],
          },
        ],
      })
    );
    const endereco = await EnderecoModel.findOne({
      where: { cep: pet.cep },
      attributes: ["bairro", "lagradouro", "complemento", "id_estado"],
    });
    const estado = await EstadoModel.findByPk(endereco.id_estado);

    const enderecoEstado = {
      endereco: {
        ...endereco.dataValues,
        ...estado.dataValues,
      },
    };
    return {
      ...pet.dataValues,
      ...enderecoEstado,
    };
  }
  static async findAll(query = {}) {
    const pets = await PetModel.findAll(
      Object.assign(query, {
        raw: true,
        nest: true,
        include: [
          {
            model: ContaModel,
            as: "conta",
            attributes: ["nome", "email", "isAdmin", "telefone", "cep"],
          },
        ],
      })
    );

    return pets;
  }
  static async updatePet(idPet, body) {
    await PetModel.update(body, { where: { id_pet: idPet } });
    return await this.findOne({
      where: { id_pet: idPet },
    });
  }
  static async createPet(body) {
    return await PetModel.create(body);
  }
  static async delete(idPet) {
    return await PetModel.destroy({ where: { id_pet: idPet } });
  }
}

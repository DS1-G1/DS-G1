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
            as: "dono",
            attributes: ["nome", "email", "isAdmin", "telefone", "cep"],
          },
          {
            model: EnderecoModel,
            as: "endereco",
            include: [
              {
                model: EstadoModel,
                as: "estado",
                attributes: ["sigla", "unidadeFederativa"],
              },
            ],
          },
        ],
      })
    );

    return pet;
  }
  static async findAll(query = {}) {
    const pets = await PetModel.findAll(
      Object.assign(query, {
        raw: true,
        nest: true,
      })
    );

    return pets;
  }
  static async findAllFilter(query = {}) {
    var result = await PetModel.findAndCountAll(
      Object.assign(query, {
        raw: true,
        nest: true,
        include: [
          {
            model: ContaModel,
            as: "dono",
            attributes: ["nome", "email", "isAdmin", "telefone", "cep"],
          },
          {
            model: EnderecoModel,
            as: "endereco",
            include: [
              {
                model: EstadoModel,
                as: "estado",
                attributes: ["sigla", "unidadeFederativa"],
                where: query.queryEstado,
              },
            ],
          },
        ],
      })
    );
    let finalResult = {
      count: result.count,
    };
    finalResult.rows = result.rows.filter((pet) => {
      if (!query.queryIdade.idade) return pet.endereco.cep;
      return (
        pet.endereco.cep &&
        pet.dataNascimento.getFullYear() == query.queryIdade.idade
      );
    });

    finalResult.pages = Math.ceil(finalResult.count / query.limit);
    return finalResult;
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

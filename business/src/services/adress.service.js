const adressModel = require("../models/Endereco");

export default class AdressService {
  static async findOne(query = {}) {
    return await adressModel.findOne(query);
  }
  static async create(body) {
    return await adressModel.create(body);
  }
  static async update(cep, body) {
    return await adressModel.update(body, {
      where: { cep: cep },
    });
  }
  static async delete(cep) {
    return await adressModel.destroy({ where: { cep: cep } });
  }
}

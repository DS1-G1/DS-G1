const adressModel = require("../models/Endereco");

export default class ContaService {
  static async findOne(query = {}) {
    return await adressModel.findOne(query);
  }
  static async create(body) {
    return await adressModel.create(body);
  }
  static async update(idConta, body) {
    return await adressModel.update(body, {
      where: { id_conta: idConta },
    });
  }
  static async delete(idConta) {
    return await adressModel.destroy({ where: { id_conta: idConta } });
  }
}

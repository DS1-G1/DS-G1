const contaModel = require("../models/Conta");

export default class ContaService {
  static async create(body) {
    return await contaModel.create(body);
  }
  static async update(idConta, body) {
    return await contaModel.update(body, {
      where: { id_conta: idConta },
    });
  }
  static async delete(idConta) {
    return await contaModel.destroy({ where: { id_conta: idConta } });
  }
}

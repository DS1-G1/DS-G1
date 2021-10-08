const contaModel = require('../models/Conta');

export default class ContaService {
  static async create(body) {
    return await contaModel.create(body);
  }
}
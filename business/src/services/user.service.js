const ContaModel = require('../models/Conta');
const UserModel = require('../models/Usuario');
import ContaService from './conta.service';

export default class UserService {
  constructor() {

  }

  static async findOne(query) {
    return await ContaModel.findOne(
      Object.assign(query, {
        include : [{
          model: UserModel,
          as: "usuario",
          attributes: ['id_usuario','sobreNome', 'dataNascimento'],
        }]
      })
    )
  }

  static async createUser(body) {
    const { nome, email, senha, telefone, cep, sobreNome, dataNascimento } = body;
    const accountBody = { nome, email, senha, telefone, cep }
    const response = await ContaService.create(accountBody);
    await UserModel.create({
      id_conta: response.id_conta,
      sobreNome,
      dataNascimento
    })
    return await this.findOne({
      where: { id_conta: response.id_conta },
      raw: true,
      nest: true
    })
  }
}
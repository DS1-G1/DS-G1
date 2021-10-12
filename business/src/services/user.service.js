const ContaModel = require("../models/Conta");
const UserModel = require("../models/Usuario");
import ContaService from "./conta.service";

export default class UserService {
  static async findAll() {
    const result = await UserModel.findAll({
      attributes: ["id_conta"],
      raw: true,
      nest: true,
    });
    const ids = result.map((user) => user.id_conta);
    return await ContaModel.findAll(
      Object.assign(
        {
          where: {
            id_conta: ids,
          },
        },
        {
          include: [
            {
              model: UserModel,
              as: "usuario",
              attributes: ["id_usuario", "sobreNome", "dataNascimento"],
            },
          ],
        }
      )
    );
  }

  static async findOne(query = {}) {
    return await ContaModel.findOne(
      Object.assign(query, {
        include: [
          {
            model: UserModel,
            as: "usuario",
            attributes: ["id_usuario", "sobreNome", "dataNascimento"],
          },
        ],
      })
    );
  }

  static async createUser(body) {
    const { nome, email, senha, telefone, cep, sobreNome } = body;
    const accountBody = { nome, email, senha, telefone, cep };
    const response = await ContaService.create(accountBody);
    await UserModel.create({
      id_conta: response.id_conta,
      sobreNome,
    });
    return await this.findOne({
      where: { id_conta: response.id_conta },
      raw: true,
      nest: true,
    });
  }

  static async updateUser(idConta, body) {
    await ContaService.update(idConta, body);
    await UserModel.update(body, { where: { id_conta: idConta } });
    return await this.findOne({
      where: { id_conta: idConta },
      raw: true,
      nest: true,
    });
  }
}

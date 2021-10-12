const ContaModel = require("../models/Conta");
const OngModel = require("../models/Ong");
import ContaService from "./conta.service";

export default class OngService {
  static async findAll() {
    const result = await OngModel.findAll({
      attributes: ["id_conta"],
      raw: true,
      nest: true,
    });
    const ids = result.map((ong) => ong.id_conta);
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
              model: OngModel,
              as: "ong",
              attributes: ["id_ong", "cnpj", "descricao"],
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
            model: OngModel,
            as: "ong",
            attributes: ["id_ong", "cnpj", "descricao"],
          },
        ],
      })
    );
  }

  static async createOng(body) {
    const { nome, email, senha, telefone, cep, cnpj, descricao } = body;
    const accountBody = { nome, email, senha, telefone, cep };
    const response = await ContaService.create(accountBody);
    await OngModel.create({
      id_conta: response.id_conta,
      cnpj,
      descricao
    });
    return await this.findOne({
      where: { id_conta: response.id_conta },
      raw: true,
      nest: true,
    });
  }

  static async updateOng(idConta, body) {
    await ContaService.update(idConta, body);
    await OngModel.update(body, { where: { id_conta: idConta } });
    return await this.findOne({
      where: { id_conta: idConta },
      raw: true,
      nest: true,
    });
  }
}

import "dotenv/config";
import { hash } from "bcrypt";
import ongService from "../services/ong.service";
import contaService from "../services/conta.service";
import { HttpException } from "../error/httpException";

export default class OngController {
  static async create(req, res) {
    const { nome, email, senha, telefone, cep, cnpj, descricao } = req.body;

    for (const [key, value] of Object.entries(req.body)) {
      if (!value) {
        throw new HttpException(400, `Campo inválido - ${key}: ${value}`);
      }
    }

    const ongAlreadyExists = await ongService.findOne({
      where: { email },
      raw: true,
      nest: true,
    });

    if (ongAlreadyExists) {
      throw new HttpException(400, "Ong já cadastrada");
    }
    const passwordHash = await hash(senha, parseInt(process.env.SECRET_SALT));
    const ong = await ongService.createOng({
      nome,
      email,
      senha: passwordHash,
      telefone,
      cep,
      cnpj,
      descricao,
    });
    res.send(ong);
  }

  static async updateOng(req, res) {
    const { id_conta } = req.params;
    const bodyUpdate = {};
    const fieldsRestrict = [
      "nome",
      "email",
      "senha",
      "isAdmin",
      "telefone",
      "cep",
      "cnpj",
      "descricao",
    ];
    for (const [key, value] of Object.entries(req.body)) {
      if (!value) {
        throw new HttpException(400, `Campo inválido - ${key}: ${value}`);
      } else if (fieldsRestrict.includes(key)) {
        bodyUpdate[key] = value;
      }
    }

    const ongExists = await ongService.findOne({ where: { id_conta } });
    if (!ongExists) {
      throw new HttpException(400, "Ong não existe");
    }

    if (bodyUpdate["email"]) {
      const emailAlreadyExists = await ongService.findOne({
        where: { email: bodyUpdate["email"] },
      });
      if (emailAlreadyExists) {
        throw new HttpException(400, "Email já cadastrado");
      }
    }

    if (bodyUpdate["senha"]) {
      bodyUpdate["senha"] = await hash(
        bodyUpdate["senha"],
        parseInt(process.env.SECRET_SALT)
      );
    }
    const ong = await ongService.updateOng(id_conta, bodyUpdate);
    res.send(ong);
  }

  static async listOne(req, res) {
    const { id_conta } = req.params;
    if (!id_conta) {
      throw new HttpException(400, `id_conta inválido`);
    }
    const ongFound = await ongService.findOne({ where: { id_conta } });
    if (!ongFound) {
      throw new HttpException(
        404,
        `Não existe Ong com o id_conta: ${id_conta}`
      );
    }
    res.send(ongFound);
  }

  static async listAll(req, res) {
    const ongsFound = await ongService.findAll();
    res.send(ongsFound);
  }

  static async delete(req, res) {
    const deleted = await contaService.delete(req.params.id_conta);
    res.send(deleted ? "Deletado com sucesso" : "Não foi possível remover");
  }
}

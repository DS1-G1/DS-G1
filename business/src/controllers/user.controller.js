import "dotenv/config";
import { hash } from "bcrypt";
import userService from "../services/user.service";
import contaService from "../services/conta.service";
import { HttpException } from "../error/httpException";

export default class UserController {
  static async create(req, res) {
    const { nome, email, senha, telefone, cep, sobreNome } = req.body;

    for (const [key, value] of Object.entries(req.body)) {
      if (!value) {
        throw new HttpException(400, `Campo inválido - ${key}: ${value}`);
      }
    }

    const userAlreadyExists = await userService.findOne({
      where: { email },
      raw: true,
      nest: true,
    });

    if (userAlreadyExists) {
      throw new HttpException(400, "Usuario já cadastrado");
    }
    const passwordHash = await hash(senha, parseInt(process.env.SECRET_SALT));
    const user = await userService.createUser({
      nome,
      email,
      senha: passwordHash,
      telefone,
      cep,
      sobreNome,
    });
    res.send(user);
  }

  static async updateUser(req, res) {
    const { id_conta } = req.params;
    const bodyUpdate = {};
    const fieldsRestrict = [
      "nome",
      "email",
      "senha",
      "isAdmin",
      "telefone",
      "cep",
      "sobreNome",
    ];
    for (const [key, value] of Object.entries(req.body)) {
      if (!value) {
        throw new HttpException(400, `Campo inválido - ${key}: ${value}`);
      } else if (fieldsRestrict.includes(key)) {
        bodyUpdate[key] = value;
      }
    }

    const userExists = await userService.findOne({ where: { id_conta } });
    if (!userExists) {
      throw new HttpException(400, "Usuario não existe");
    }

    if (bodyUpdate["email"]) {
      const emailAlreadyExists = await userService.findOne({
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
    const user = await userService.updateUser(id_conta, bodyUpdate);
    res.send(user);
  }

  static async listOne(req, res) {
    const { id_conta } = req.params;
    if (!id_conta) {
      throw new HttpException(400, `id_conta inválido`);
    }
    const userFound = await userService.findOne({ where: { id_conta } });
    if (!userFound) {
      throw new HttpException(
        404,
        `Usuário não existe com o id_conta: ${id_conta}`
      );
    }
    res.send(userFound);
  }

  static async listAll(req, res) {
    const usersFound = await userService.findAll();
    res.send(usersFound);
  }

  static async delete(req, res) {
    const deleted = await contaService.delete(req.params.id_conta);
    res.send(deleted ? "Deletado com sucesso" : "Não foi possível remover");
  }
}

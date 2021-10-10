import "dotenv/config";
import { hash } from 'bcrypt';
import userService from '../services/user.service';
import { HttpException } from '../error/httpException';


export default class UserController {
  static async create(req, res) {
    const {
      nome,
      email,
      senha,
      telefone,
      cep,
      sobreNome,
      dataNascimento
    } = req.body;

    for (const [key, value] of Object.entries(req.body)) {
      if (!value) {
        throw new HttpException(400, `Campo inválido - ${key}: ${value}`);
      }
    }
    
    const userAlreadyExists = await userService.findOne({
      where: { email },
      raw: true,
      nest: true
    });
  
    if (userAlreadyExists) {
      throw new HttpException(400, 'Usuario já cadastrado');
    }
    const passwordHash = await hash(senha, parseInt(process.env.SECRET_SALT));
    const user = await userService.createUser({
      nome,
      email,
      senha:passwordHash,
      telefone,
      cep,
      sobreNome,
      dataNascimento
    })
    res.send(user)
  }
  static async listOne(req, res) {
    const { id_conta } = req.params;
    if (!id_conta) {
      throw new HttpException(400, `id_conta inválido`);
    }
    const userFound = await userService.findOne({ where: { id_conta } });
    if (!userFound) {
      throw new HttpException(404, `Usuário não existe com o id_conta: ${id_conta}`);
    }
    res.send(userFound);
  }
}
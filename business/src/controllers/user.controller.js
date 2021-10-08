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
  
    const user = await userService.createUser({
      nome,
      email,
      senha,
      telefone,
      cep,
      sobreNome,
      dataNascimento
    })
    res.send(user)
  }
}
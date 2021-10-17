import "dotenv/config";
import AdressService from "../services/adress.service";
import { HttpException } from "../error/httpException";

export default class OngController {
  static async create(req, res) {
    const { cep, lagradouro, complemento, bairro, id_estado } = req.body;

    for (const [key, value] of Object.entries(req.body)) {
      if (!value) {
        throw new HttpException(400, `Campo inválido - ${key}: ${value}`);
      }
    }
    const adressAlreadyExists = await AdressService.findOne({
      where: {
        cep: cep,
      },
    });
    if (adressAlreadyExists) {
      throw new HttpException(400, `Endereço de cep: ${cep}, já cadastrado`);
    }
    const adress = await AdressService.create({
      cep,
      lagradouro,
      complemento,
      bairro,
      id_estado,
    });
    res.send(adress);
  }

  static async listOne(req, res) {
    const { cep } = req.params;
    if (!cep) {
      throw new HttpException(400, `id_conta inválido`);
    }
    const adressFound = await AdressService.findOne({ where: { cep } });
    if (!adressFound) {
      throw new HttpException(404, `Não existe endereço com o cep: ${cep}`);
    }
    res.send(adressFound);
  }

  static async delete(req, res) {
    const deleted = await AdressService.delete(req.params.cep);
    res.send(deleted ? "Deletado com sucesso" : "Não foi possível remover");
  }
}

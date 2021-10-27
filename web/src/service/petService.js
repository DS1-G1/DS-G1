import api from "./api";

export class petService {
  static async create(body) {
    const response = await api.post("/pet", body);
    console.log(response.data);
  }
  static async findAll() {
    const response = await api.get("/pet/all/pets");
    return response.data;
  }
}

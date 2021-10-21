import api from "./api";

export class userService {
  static async create(body) {
    const response = await api.post("/user", body);
    console.log(response.data);
  }
}

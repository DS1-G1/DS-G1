import { Router } from "express";
import { HttpException } from "../error/httpException";
const router = Router();

router.get('/', (request, response) => {
  response.send(request.body)
});

export default router;
import { Router } from "express";
import { HttpException } from "../error/httpException";
const router = Router();

router.get('/', (request, response) => {
  throw new HttpException(404, "Not found");
});

export default router;
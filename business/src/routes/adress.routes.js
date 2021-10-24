import express from "express";
import adressController from "../controllers/adress.controller";
const router = express.Router();

router.post("/", adressController.create);
router.get("/:cep", adressController.listOne);
router.delete("/:cep", adressController.delete);

export default router;

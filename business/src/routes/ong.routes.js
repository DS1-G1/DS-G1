import express from "express";
import ongController from "../controllers/ong.controller";
const router = express.Router();

router.post("/", ongController.create);
router.get("/:id_conta", ongController.listOne);
router.get("/", ongController.listAll);
router.put("/:id_conta", ongController.updateOng);
router.delete("/:id_conta", ongController.delete);

export default router;

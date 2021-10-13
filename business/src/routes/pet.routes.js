import express from "express";
import petController from "../controllers/pet.controller";
const router = express.Router();

router.post("/", petController.create);
router.get("/:id_pet", petController.listOne);
router.get("/all/pets", petController.listAll);
router.put("/:id_pet", petController.updatePet);
router.delete("/:id_pet", petController.delete);

export default router;

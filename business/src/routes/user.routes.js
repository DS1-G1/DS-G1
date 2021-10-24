import express from "express";
import userController from "../controllers/user.controller";
const router = express.Router();

router.post("/", userController.create);
router.get("/:id_conta", userController.listOne);
router.get("/", userController.listAll);
router.put("/:id_conta", userController.updateUser);
router.delete("/:id_conta", userController.delete);

export default router;

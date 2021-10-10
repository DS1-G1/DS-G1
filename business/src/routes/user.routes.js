import express from 'express';
import userController from '../controllers/user.controller'
const router = express.Router();

router.post('/', userController.create)
router.get('/:id_conta', userController.listOne);

export default router;
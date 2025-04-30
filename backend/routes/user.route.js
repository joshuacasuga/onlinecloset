import express from 'express';
import { getAllUsers } from '../controller/user.controller.js';
import { getUser } from '../controller/user.controller.js';
import { createUser } from '../controller/user.controller.js';
import { updateUser } from '../controller/user.controller.js';
import { deleteUser } from '../controller/user.controller.js';
import { loginUser } from '../controller/user.controller.js';

const router = express.Router();

router.get('/', getAllUsers);
router.get('/:id', getUser);
router.post('/', createUser);
router.patch("/:id", updateUser);
router.delete("/:id", deleteUser);
router.post('/login', loginUser);

export default router;
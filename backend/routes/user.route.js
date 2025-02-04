import express from 'express';
import { getUser } from '../controller/user.controller.js';
import { createUser } from '../controller/user.controller.js';
import { updateUser } from '../controller/user.controller.js';
import { deleteUser } from '../controller/user.controller.js';

const router = express.Router();

router.get('/', getUser);
router.post('/', createUser);
router.patch("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;
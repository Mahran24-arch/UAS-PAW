import express from 'express';
import { getUsers, getUserById, createUser, updateUser, deleteUser } from '../controllers/Users.js';

import { IsAuth, IsAdmin } from '../middleware/Authentication.js';

const router = express.Router();

router.get('/users', IsAuth, IsAdmin, getUsers);
router.get('/user/:id', getUserById);
router.post('/user', createUser);
router.patch('/user/:id', updateUser);
router.delete('/user/:id', deleteUser);

export default router;

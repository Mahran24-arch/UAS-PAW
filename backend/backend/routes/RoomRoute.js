import express from 'express';
import { getRooms, getRoomById, createRoom, updateRoom, deleteRoom } from '../controllers/Rooms.js';

const router = express.Router();

router.get('/rooms', getRooms);
router.get('/room/:id', getRoomById);
router.post('/room', createRoom);
router.patch('/room/:id', updateRoom);
router.delete('/room/:id', deleteRoom);

export default router;

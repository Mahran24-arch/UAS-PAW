import express from 'express';
import { getBookings, getBookingById, createBooking, updateBooking, deleteBooking } from '../controllers/Bookings.js';

const router = express.Router();

router.get('/bookings', getBookings);
router.get('/booking/:id', getBookingById);
router.post('/booking', createBooking);
router.patch('/booking/:id', updateBooking);
router.delete('/booking/:id', deleteBooking);

export default router;

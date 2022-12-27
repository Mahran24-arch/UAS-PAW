import Bookings from '../models/BookingModel.js';
import path from 'path';
import fs, { linkSync } from 'fs';
import Users from '../models/UserModel.js';
import Rooms from '../models/RoomModel.js';

export const getBookings = async (req, res) => {
  try {
    const response = await Bookings.findAll({
      attributes: ['uuid', 'tanggal', 'status', 'user_id', 'room_id', 'url_pembayaran'],
      include: [
        { model: Users, attributes: ['uuid', 'nama', 'email'] },
        { model: Rooms, attributes: ['uuid', 'nameroom', 'price'] },
      ],
    });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
export const getBookingById = async (req, res) => {
  try {
    const response = await Bookings.findOne({
      where: { uuid: req.params.id },
      include: [
        { model: Users, attributes: ['uuid', 'nama', 'email'] },
        { model: Rooms, attributes: ['uuid', 'nameroom', 'price'] },
      ],
    });
    if (!response) return res.status(404).json({ msg: 'Data Booking tidak ditemukan' });
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
let fileName, url;
export const createBooking = async (req, res) => {
  const { user_id, room_id } = req.body;
  if (req.files !== null) {
    const file = req.files.upload_pembayaran;
    const fileSize = req.files.upload_pembayaran;
    const ext = path.extname(file.name);
    fileName = file.md5 + ext;
    url = `${req.protocol}://${req.get('host')}/images/bookings/${fileName}`;
    const allowedType = ['.png', '.jpg', 'jpeg'];
    if (!allowedType.includes(ext.toLowerCase())) return res.status(422).json({ msg: 'Gambar tidak sesuai' });
    if (fileSize > 5000000) return res.status(422).json({ msg: 'Gambar harus dibawah 5 MB' });
    file.mv(`./public/images/bookings/${fileName}`, async (err) => {
      if (err) return res.status(500).json({ msg: err.message });
    });
  }

  try {
    await Bookings.create({
      user_id: user_id,
      room_id: room_id,
      tanggal: Date.now(),
      upload_pembayaran: fileName,
      url_pembayaran: url,
    });
    res.status(201).json({ msg: 'success' });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
export const updateBooking = async (req, res) => {
  const booking = await Bookings.findOne({ where: { uuid: req.params.id } });
  if (!booking) return res.status(404).json({ msg: 'Data booking tidak ditemukan' });
  const { user_id, room_id, status } = req.body;

  let fileName;
  if (req.files === null) {
    fileName = booking.photo;
  } else {
    const file = req.files.upload_pembayaran;
    const fileSize = req.files.file;
    const ext = path.extname(file.name);
    fileName = file.md5 + ext;
    const allowedType = ['.png', '.jpg', 'jpeg'];

    if (!allowedType.includes(ext.toLowerCase())) return res.status(422).json({ msg: 'Gambar tidak sesuai' });
    if (fileSize > 5000000) return res.status(422).json({ msg: 'Gambar harus dibawah 5 MB' });

    const filepath = `./public/images/bookings/${booking.upload_pembayaran}`;
    if (fs.existsSync(filepath)) {
      fs.unlinkSync(filepath);
    }

    file.mv(`./public/images/rooms/${fileName}`, (err) => {
      if (err) return res.status(500).json({ msg: err.message });
    });
  }
  const url = `${req.protocol}://${req.get('host')}/images/bookings/${fileName}`;
  try {
    await Bookings.update(
      { user_id: user_id, status: status, room_id: room_id, upload_pembayaran: fileName, url_pembayaran: url },
      {
        where: {
          uuid: req.params.id,
        },
      }
    );
    res.status(200).json({ msg: `Data booking berhasil diupdate` });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
export const deleteBooking = async (req, res) => {
  const booking = await Bookings.findOne({ where: { uuid: req.params.id } });
  if (!booking) return res.status(404).json({ msg: 'Data Boooking tidak ditemukan' });
  const filepath = `./public/images/bookings/${booking.upload_pembayaran}`;
  if (fs.existsSync(filepath)) {
    fs.unlinkSync(filepath);
  }
  try {
    await Bookings.destroy({ where: { uuid: req.params.id } });
    res.status(200).json({ msg: 'Data booking berhasil di hapus' });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

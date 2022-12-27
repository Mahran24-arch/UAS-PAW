import Rooms from '../models/RoomModel.js';
import path from 'path';
import fs from 'fs';

export const getRooms = async (req, res) => {
  try {
    const response = await Rooms.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ msg: error.message });
  }
};
export const getRoomById = async (req, res) => {
  try {
    const response = await Rooms.findOne({ where: { uuid: req.params.id } });
    if (!response) return res.status(404).json({ msg: 'Ruangan tidak ditemukan' });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ msg: error.message });
  }
};
export const createRoom = async (req, res) => {
  if (req.files === null) return res.status(400).json({ msg: 'Tidak ada file yang di upload' });

  const { nameroom, price } = req.body;

  const file = req.files.file;
  const fileSize = req.files.file;
  const ext = path.extname(file.name);
  const fileName = file.md5 + ext;
  const url = `${req.protocol}://${req.get('host')}/images/rooms/${fileName}`;
  const allowedType = ['.png', '.jpg', 'jpeg'];
  if (!allowedType.includes(ext.toLowerCase())) return res.status(422).json({ msg: 'Gambar tidak sesuai' });
  if (fileSize > 5000000) return res.status(422).json({ msg: 'Gambar harus dibawah 5 MB' });
  file.mv(`./public/images/rooms/${fileName}`, async (err) => {
    if (err) return res.status(500).json({ msg: err.message });
  });
  try {
    await Rooms.create({
      nameroom: nameroom,
      price: price,
      photo: fileName,
      url: url,
    });
    res.status(201).json({ msg: 'Rooms berhasil dibuat' });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
export const updateRoom = async (req, res) => {
  const room = await Rooms.findOne({ where: { uuid: req.params.id } });
  if (!room) return res.status(404).json({ msg: 'Produk tidak ditemukan' });
  const { nameroom, price } = req.body;

  let fileName;
  if (req.files === null) {
    fileName = room.photo;
  } else {
    const file = req.files.file;
    const fileSize = req.files.file;
    const ext = path.extname(file.name);
    fileName = file.md5 + ext;
    const allowedType = ['.png', '.jpg', 'jpeg'];

    if (!allowedType.includes(ext.toLowerCase())) return res.status(422).json({ msg: 'Gambar tidak sesuai' });
    if (fileSize > 5000000) return res.status(422).json({ msg: 'Gambar harus dibawah 5 MB' });

    const filepath = `./public/images/rooms/${room.photo}`;
    fs.unlinkSync(filepath);

    file.mv(`./public/images/rooms/${fileName}`, (err) => {
      if (err) return res.status(500).json({ msg: err.message });
    });
  }
  const url = `${req.protocol}://${req.get('host')}/images/rooms/${fileName}`;
  try {
    await Rooms.update(
      { nameroom: nameroom, price: price, photo: fileName, url: url },
      {
        where: {
          uuid: req.params.id,
        },
      }
    );
    res.status(200).json({ msg: `Room berhasil diupdate` });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
export const deleteRoom = async (req, res) => {
  const room = await Rooms.findOne({ where: { uuid: req.params.id } });
  if (!room) return res.status(404).json({ msg: 'Room tidak ditemukan' });
  const filepath = `./public/images/rooms/${room.photo}`;
  if (fs.existsSync(filepath)) {
    fs.unlinkSync(filepath);
  }
  try {
    await Rooms.destroy({ where: { uuid: req.params.id } });
    return res.status(200).json({ msg: 'Berhasil hapus data ruangan' });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ msg: error.message });
  }
};

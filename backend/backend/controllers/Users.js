import User from '../models/UserModel.js';
import argon2 from 'argon2';
import Users from '../models/UserModel.js';

export const getUsers = async (req, res) => {
  try {
    const response = await User.findAll({
      attributes: ['uuid', 'nama', 'email'],
    });

    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
export const getUserById = async (req, res) => {
  try {
    const response = await User.findOne(
      {
        attributes: ['uuid', 'nama', 'email'],
      },
      { where: { uuid: req.params.id } }
    );
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
export const createUser = async (req, res) => {
  const { nama, email, password, role } = req.body;
  const hashPassword = await argon2.hash(password);
  console.log(req.body);
  try {
    await Users.create({
      nama: nama,
      email: email,
      password: hashPassword,
      role: role,
    });
    res.status(201).json({ msg: 'Register Berhasil' });
  } catch (error) {
    res.status(400).json({ msg: error.message });
  }
};
export const updateUser = async (req, res) => {
  const { nama, email, password } = req.body;
  let hashPassword;
  const user = await Users.findOne({ where: { uuid: req.params.id } });
  if (!user) return res.status(404).json({ msg: 'User tidak ditemukan' });
  if (password === '' || password === null) {
    hashPassword = user.password;
  } else {
    hashPassword = await argon2.hash(password);
  }
  try {
    await Users.update(
      { nama: nama, email: email, password: hashPassword },
      {
        where: {
          uuid: req.params.id,
        },
      }
    );
    res.status(200).json({ msg: 'Update Berhasil' });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
export const deleteUser = async (req, res) => {
  const user = await Users.findOne({ where: { uuid: req.params.id } });
  if (!user) return res.status(404).json({ msg: 'User tidak ditemukan' });
  try {
    await Users.destroy({
      where: {
        uuid: req.params.id,
      },
    });
    res.status(200).json({ msg: 'User berhasil dihapus' });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

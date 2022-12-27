import { Sequelize } from 'sequelize';
import db from '../config/Database.js';
import Rooms from './RoomModel.js';
import Users from './UserModel.js';

const { DataTypes } = Sequelize;

const Bookings = db.define(
  'bookings',
  {
    uuid: {
      type: DataTypes.STRING,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    room_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    tanggal: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    status: {
      type: DataTypes.STRING,
      defaultValue: 'Belum Bayar',
    },
    upload_pembayaran: {
      type: DataTypes.STRING,
    },
    url_pembayaran: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
  }
);

Rooms.hasMany(Bookings, {
  foreignKey: {
    name: 'room_id',
  },
});
Bookings.belongsTo(Rooms, {
  foreignKey: {
    name: 'room_id',
  },
});
Users.hasMany(Bookings, {
  foreignKey: {
    name: 'user_id',
  },
});
Bookings.belongsTo(Users, {
  foreignKey: {
    name: 'user_id',
  },
});

export default Bookings;

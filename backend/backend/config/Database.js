import { Sequelize } from 'sequelize';

const db = new Sequelize('aplikasi_booking', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

export default db;

import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('baocaonodejs', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

export default sequelize;

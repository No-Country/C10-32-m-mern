import { Sequelize } from 'sequelize'

export const sequelize = new Sequelize(
  'C10-32-m-mern', // db name,
  'postgres', // username
  'nico', // password
  {
    host: 'localhost',
    dialect: 'postgres',
  }
)

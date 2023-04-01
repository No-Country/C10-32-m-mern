import { Sequelize } from 'sequelize';
import { DB_USER, DB_NAME, DB_PASSWORD, DB_HOST } from '../config/config';

export const sequelize = new Sequelize(
	DB_NAME!, // db name,
	DB_USER!, // username
	DB_PASSWORD, // password
	{
		host: DB_HOST,
		dialect: 'postgres',
	}
);

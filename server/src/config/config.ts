import dotenv from 'dotenv';

dotenv.config();

export const env = {
	DB_PORT: process.env.DB_PORT || 5432,
	DB_HOST: process.env.DB_HOST || 'localhost',
	DB_USER: process.env.DB_USER,
	DB_NAME: process.env.DB_NAME,
	DB_PASSWORD: process.env.DB_PASSWORD,
	PORT: process.env.PORT || 3000,
};

export const { DB_NAME, DB_PASSWORD, DB_HOST, DB_PORT, DB_USER, PORT } = env;

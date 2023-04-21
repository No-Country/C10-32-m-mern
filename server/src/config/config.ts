import dotenv from 'dotenv';

dotenv.config();

export const env = {
	DB_PORT: process.env.DB_PORT || 5432,
	DB_HOST: process.env.DB_HOST || 'localhost',
	DB_USER: process.env.DB_USER,
	DB_NAME: process.env.DB_NAME,
	DB_PASSWORD: process.env.DB_PASSWORD,
	PORT: process.env.PORT || 3000,
	NODEMAILER_EMAIL: process.env.NODEMAILER_EMAIL,
	NODEMAILER_PASS: process.env.NODEMAILER_PASS,
};

export const {
	DB_NAME,
	DB_PASSWORD,
	DB_HOST,
	DB_PORT,
	DB_USER,
	NODEMAILER_EMAIL,
	NODEMAILER_PASS,
	PORT,
} = env;

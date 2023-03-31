import { DataTypes } from 'sequelize';
import { sequelize } from '../database/db';

export const Specialist = sequelize.define(
	'specialist',
	{
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
		},

		name: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
		},

		speciality: {
			type: DataTypes.STRING,
			allowNull: false,
		},

		adress: {
			type: DataTypes.STRING,
			allowNull: false,
		},

		phone: {
			type: DataTypes.NUMBER,
			allowNull: false,
		},

		tuition: {
			type: DataTypes.NUMBER,
			allowNull: false,
		},

		consultingRoom: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	},
	{
		timestamps: false,
	}
);

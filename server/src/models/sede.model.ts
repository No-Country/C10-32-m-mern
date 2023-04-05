import { DataTypes } from 'sequelize';
import { sequelize } from '../database/db';

export const Sede = sequelize.define(
	'sedes',
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
			unique: false,
		},
	},
	{
		timestamps: false,
		tableName: 'sede',
	}
);

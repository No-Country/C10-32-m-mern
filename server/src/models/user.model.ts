import { DataTypes, UUIDV4 } from 'sequelize';
import { sequelize } from '../database/db';
import { ObraSocial } from './obrasocial.model';

export const User = sequelize.define(
	'users',
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
		},
		secondname: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		document: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		phone: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		obrasocialId: {
			type: DataTypes.INTEGER,
		},
	},
	{
		timestamps: false,
		tableName: 'users',
	}
);

User.belongsTo(ObraSocial);

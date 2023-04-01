import { DataType } from 'sequelize-typescript';
import { sequelize } from '../database/db';
import { Specialist } from './specialist.model';

export const Speciality = sequelize.define('speciality', {
	id: {
		type: DataType.INTEGER,
		allowNull: false,
		primaryKey: true,
		autoIncrement: true,
	},
	description: {
		type: DataType.STRING,
	},
});

// Speciality.belongsToMany(Specialist)
// Specialist.belongsToMany(Speciality)

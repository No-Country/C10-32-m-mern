import { DataType } from 'sequelize-typescript';
import { sequelize } from '../database/db';
import { Specialist } from './specialist.model';

export const Turn = sequelize.define('turn', {
	id: {
		type: DataType.INTEGER,
		allowNull: false,
		primaryKey: true,
		autoIncrement: true,
	},
	diagnostic: {
		type: DataType.STRING,
		allowNull: false,
	},
	date: {
		type: DataType.DATE,
		allowNull: false,
	},
});

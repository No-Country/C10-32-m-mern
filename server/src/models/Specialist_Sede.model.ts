import { DataTypes } from 'sequelize';
import { sequelize } from '../database/db';
import { Specialist } from './specialist.model';
import { Sede } from './sede.model';

export const Specialist_sede = sequelize.define(
	'Specialist_sede',
	{
		mondayini: {
			type: DataTypes.TIME,
			allowNull: true,
		
		},

		mondayend: {
			type: DataTypes.TIME,
			allowNull: true,
		
		},
		mondaytotal: {
			type: DataTypes.INTEGER,
			allowNull: true,
		
		},
		tuesdayini: {
			type: DataTypes.TIME,
			allowNull: true,
		
		},

		tuesdayend: {
			type: DataTypes.TIME,
			allowNull: true,
		
		},
		tuesdaytotal: {
			type: DataTypes.INTEGER,
			allowNull: true,
		
		},
		wednesdayini: {
			type: DataTypes.TIME,
			allowNull: true,
		
		},

		wednesdayend: {
			type: DataTypes.TIME,
			allowNull: true,
		
		},
		wednesdaytotal: {
			type: DataTypes.INTEGER,
			allowNull: true,
		
		},
		thursdayini: {
			type: DataTypes.TIME,
			allowNull: true,
		
		},

		thursdayend: {
			type: DataTypes.TIME,
			allowNull: true,
		
		},
		thursdaytotal: {
			type: DataTypes.INTEGER,
			allowNull: true,
		
		},
		fridayini: {
			type: DataTypes.TIME,
			allowNull: true,
		
		},

		fridayend: {
			type: DataTypes.TIME,
			allowNull: true,
		
		},
		fridaytotal: {
			type: DataTypes.INTEGER,
			allowNull: true,
		
		},
		
	},
	{
		timestamps: false,
		tableName: 'Specialist_sede',
	}
);



Specialist.belongsToMany(Sede, { through: 'Specialist_sede' });
Sede.belongsToMany(Specialist, { through: 'Specialist_sede' });

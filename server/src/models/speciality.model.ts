import { DataTypes } from 'sequelize';
import { sequelize } from '../database/db';
import { Sede } from './sede.model';

export const Speciality = sequelize.define('specialties', {
	id: {
		type: DataTypes.INTEGER,
		allowNull: false,
		primaryKey: true,
		autoIncrement: true,
	},
	description: {
		type: DataTypes.STRING,
		allowNull: false
	},

}, {
		timestamps: false,
	});

// Speciality.belongsToMany(Specialist)
// Specialist.belongsToMany(Speciality)

Speciality.belongsToMany(Sede, {through:'Speciality_sede'})
Sede.belongsToMany(Speciality, {through:'Speciality_sede'})
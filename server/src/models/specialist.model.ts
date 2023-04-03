import { DataTypes } from 'sequelize';
import { sequelize } from '../database/db';
import {Sede} from './sede.model'
import { Speciality } from './speciality.model';


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
			type: DataTypes.STRING,
			allowNull: false,
		},

		tuition: {
			type: DataTypes.STRING,
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

     Specialist.belongsToMany(Sede, {through:'Specialist_sede'})
     Sede.belongsToMany(Specialist, {through:'Specialist_sede'})

	 Specialist.belongsToMany(Speciality, { through:'Specialist_Speciality'})
	 Speciality.belongsToMany(Specialist, { through:'Specialist_Speciality'})
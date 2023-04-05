import { DataTypes } from 'sequelize';
import { sequelize } from '../database/db';

export const ObraSocial = sequelize.define(
	'obrasociales',
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
		tableName: 'obrasocial',
	}
);

//ObraSocial.hasMany(User)
//ObraSocial.hasOne(User)

//User.hasOne(ObraSocial)

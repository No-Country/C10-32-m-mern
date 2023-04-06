import { DataTypes } from 'sequelize';
import { sequelize } from '../database/db';
import { Sede } from './sede.model';
import { Speciality } from './speciality.model';

export const Specialist = sequelize.define(
	'specialists',
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

		speciality: {
			type: DataTypes.STRING,
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
			type: DataTypes.STRING({ length: 5 }),
			allowNull: false,
		},

		consultingRoom: {
			type: DataTypes.STRING,
			allowNull: false,
		},
	},
	{
		timestamps: false,
		tableName: 'specialists',
	}
);

Specialist.belongsToMany(Sede, { through: 'Specialist_sede' });
Sede.belongsToMany(Specialist, { through: 'Specialist_sede' });

Specialist.belongsToMany(Speciality, { through: 'Specialist_Speciality' });
Speciality.belongsToMany(Specialist, { through: 'Specialist_Speciality' });

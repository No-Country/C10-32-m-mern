import { DataTypes } from 'sequelize';
import { sequelize } from '../database/db';
import {Specialist} from './specialist.model'
import { Speciality } from './speciality.model';
import { User } from './user.model';
import { Sede } from './sede.model';

export const Shift = sequelize.define(
	'shifts',
	{
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
		},

		state: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: false,
    	},
        date: {
            type: DataTypes.DATEONLY
        },
        hour: {
            type:DataTypes.TIME
        }
	},
	{
		timestamps: true,
		tableName: 'shifts',
	}
);

Shift.belongsTo(Specialist)
Shift.belongsTo(User)
Shift.belongsTo(Sede)
Shift.belongsTo(Speciality)
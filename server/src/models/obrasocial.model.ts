import { DataTypes, UUIDV4 } from 'sequelize'
import { sequelize } from '../database/db'
import { User } from './user.model'

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
      }
    },
  {
    timestamps: false,
  }
)

//ObraSocial.hasMany(User)
//ObraSocial.hasOne(User)

//User.hasOne(ObraSocial)
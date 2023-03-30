import { DataTypes, UUIDV4 } from 'sequelize'
import { sequelize } from '../database/db'

export const User = sequelize.define(
  'users',
  {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: UUIDV4,
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
  },
  {
    timestamps: false,
  }
)

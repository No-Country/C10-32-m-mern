import { DataTypes, UUIDV4 } from 'sequelize'
import { sequelize } from '../database/db'

export const Asociado = sequelize.define(
  'asociados',
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      defaultValue: UUIDV4,
    },
  
    document: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,       
      }
    },
  {
    timestamps: false,
  }
)

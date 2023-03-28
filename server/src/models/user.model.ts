
// import { BuildOptions, DataTypes, Model, Sequelize } from "sequelize";

// export interface UserAttributes {
//   id: number;
//   email: string;
//   password: string;
//   createdAt?: Date;
//   updatedAt?: Date;
// }
// export interface UserModel extends Model<UserAttributes>, UserAttributes {}
// export class User extends Model<UserModel, UserAttributes> {}

// export type UserStatic = typeof Model & {
//   new (values?: object, options?: BuildOptions): UserModel;
// };

// export function UserFactory(sequelize: Sequelize): UserStatic {
//   return <UserStatic>sequelize.define("users", {
    // id: {
    //   type: DataTypes.NUMBER,
    //   autoIncrement: true,
    //   allowNull: false,
    //   primaryKey: true,
    // },
    // email: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    //   unique: true,
    // },
    // password: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    // },
    // createdAt: {
    //   type: DataTypes.DATE,
    //   allowNull: false,
    //   defaultValue: DataTypes.NOW,
    // },
    // updatedAt: {
    //   type: DataTypes.DATE,
    //   allowNull: false,
    //   defaultValue: DataTypes.NOW,
    // },
//   });
// }



import { DataTypes } from 'sequelize';
import db from '../database/db';

const User = db.define('Usuario', {
  id: {
    type: DataTypes.NUMBER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
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
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
}, 
// {
//     createdAt: false,
//     updatedAt: false
// }
);

export default User;
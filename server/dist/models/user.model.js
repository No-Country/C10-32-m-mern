"use strict";
// import { BuildOptions, DataTypes, Model, Sequelize } from "sequelize";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
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
const sequelize_1 = require("sequelize");
const db_1 = __importDefault(require("../database/db"));
const User = db_1.default.define('Usuario', {
    id: {
        type: sequelize_1.DataTypes.NUMBER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    email: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    createdAt: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize_1.DataTypes.NOW,
    },
    updatedAt: {
        type: sequelize_1.DataTypes.DATE,
        allowNull: false,
        defaultValue: sequelize_1.DataTypes.NOW,
    },
});
exports.default = User;
//# sourceMappingURL=user.model.js.map
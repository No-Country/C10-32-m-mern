"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const sequelize_1 = require("sequelize");
const db_1 = require("../database/db");
const obrasocial_model_1 = require("./obrasocial.model");
exports.User = db_1.sequelize.define('users', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    secondname: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    document: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true,
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
    phone: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    obrasocialId: {
        type: sequelize_1.DataTypes.INTEGER,
    },
}, {
    timestamps: false,
    tableName: 'users',
});
exports.User.belongsTo(obrasocial_model_1.ObraSocial);

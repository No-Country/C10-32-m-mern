"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObraSocial = void 0;
const sequelize_1 = require("sequelize");
const db_1 = require("../database/db");
exports.ObraSocial = db_1.sequelize.define('obrasociales', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: false,
    },
}, {
    timestamps: false,
    tableName: 'obrasociales',
});
//ObraSocial.hasMany(User)
//ObraSocial.hasOne(User)
//User.hasOne(ObraSocial)

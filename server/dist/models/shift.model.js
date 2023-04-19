"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shift = void 0;
const sequelize_1 = require("sequelize");
const db_1 = require("../database/db");
const specialist_model_1 = require("./specialist.model");
const speciality_model_1 = require("./speciality.model");
const user_model_1 = require("./user.model");
const sede_model_1 = require("./sede.model");
exports.Shift = db_1.sequelize.define('shifts', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    state: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: false,
    },
    date: {
        type: sequelize_1.DataTypes.DATEONLY
    },
    hour: {
        type: sequelize_1.DataTypes.TIME
    }
}, {
    timestamps: true,
    tableName: 'shifts',
});
exports.Shift.belongsTo(specialist_model_1.Specialist);
exports.Shift.belongsTo(user_model_1.User);
exports.Shift.belongsTo(sede_model_1.Sede);
exports.Shift.belongsTo(speciality_model_1.Speciality);

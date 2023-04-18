"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SpecialistSede = void 0;
const sequelize_1 = require("sequelize");
const db_1 = require("../database/db");
const specialist_model_1 = require("./specialist.model");
exports.SpecialistSede = db_1.sequelize.define('specialist-sede', {
    id: {
        type: sequelize_1.DataTypes.BIGINT,
        autoIncrement: true,
        primaryKey: true,
        allowNull: false
    },
    // idsede: {
    // 	type: DataTypes.INTEGER,
    // 	allowNull: false,
    // 	primaryKey: true,
    // },
    // idspecialist: {
    // 	type: DataTypes.INTEGER,
    // 	allowNull: false,
    // 	primaryKey: true,
    // },
}, {
    timestamps: false,
});
exports.SpecialistSede.belongsTo(specialist_model_1.Specialist);
//SpecialistSede.belongsTo(Sede)
//# sourceMappingURL=specialist-sede.model.js.map
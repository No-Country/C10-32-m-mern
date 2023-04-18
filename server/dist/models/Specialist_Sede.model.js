"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Specialist_sede = void 0;
const sequelize_1 = require("sequelize");
const db_1 = require("../database/db");
const specialist_model_1 = require("./specialist.model");
const sede_model_1 = require("./sede.model");
exports.Specialist_sede = db_1.sequelize.define('Specialist_sede', {
    mondayini: {
        type: sequelize_1.DataTypes.TIME,
        allowNull: true,
    },
    mondayend: {
        type: sequelize_1.DataTypes.TIME,
        allowNull: true,
    },
    mondaytotal: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
    },
    tuesdayini: {
        type: sequelize_1.DataTypes.TIME,
        allowNull: true,
    },
    tuesdayend: {
        type: sequelize_1.DataTypes.TIME,
        allowNull: true,
    },
    tuesdaytotal: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
    },
    wednesdayini: {
        type: sequelize_1.DataTypes.TIME,
        allowNull: true,
    },
    wednesdayend: {
        type: sequelize_1.DataTypes.TIME,
        allowNull: true,
    },
    wednesdaytotal: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
    },
    thursdayini: {
        type: sequelize_1.DataTypes.TIME,
        allowNull: true,
    },
    thursdayend: {
        type: sequelize_1.DataTypes.TIME,
        allowNull: true,
    },
    thursdaytotal: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
    },
    fridayini: {
        type: sequelize_1.DataTypes.TIME,
        allowNull: true,
    },
    fridayend: {
        type: sequelize_1.DataTypes.TIME,
        allowNull: true,
    },
    fridaytotal: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: true,
    },
}, {
    timestamps: false,
    tableName: 'Specialist_sede',
});
specialist_model_1.Specialist.belongsToMany(sede_model_1.Sede, { through: 'Specialist_sede' });
sede_model_1.Sede.belongsToMany(specialist_model_1.Specialist, { through: 'Specialist_sede' });
//# sourceMappingURL=Specialist_Sede.model.js.map
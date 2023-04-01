"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Specialist = void 0;
const sequelize_1 = require("sequelize");
const db_1 = require("../database/db");
exports.Specialist = db_1.sequelize.define('specialist', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    speciality: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    adress: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    phone: {
        type: sequelize_1.DataTypes.NUMBER,
        allowNull: false,
    },
    tuition: {
        type: sequelize_1.DataTypes.NUMBER,
        allowNull: false,
    },
    consultingRoom: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
}, {
    timestamps: false,
});
//# sourceMappingURL=specialist.model.js.map
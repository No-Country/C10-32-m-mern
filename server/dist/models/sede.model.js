"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sede = void 0;
const sequelize_1 = require("sequelize");
const db_1 = require("../database/db");
exports.Sede = db_1.sequelize.define('sedes', {
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
    tableName: 'sedes',
});
//# sourceMappingURL=sede.model.js.map
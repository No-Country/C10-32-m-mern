"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Asociado = void 0;
const sequelize_1 = require("sequelize");
const db_1 = require("../database/db");
exports.Asociado = db_1.sequelize.define('asociados', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        defaultValue: sequelize_1.UUIDV4,
    },
    document: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true,
    }
}, {
    timestamps: false,
});
//# sourceMappingURL=asociado.model.js.map
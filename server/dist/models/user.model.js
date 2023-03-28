"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const sequelize_1 = require("sequelize");
const db_1 = require("../database/db");
exports.User = db_1.sequelize.define('users', {
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
}, {
    timestamps: false,
});
//# sourceMappingURL=user.model.js.map
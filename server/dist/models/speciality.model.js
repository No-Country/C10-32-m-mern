"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Speciality = void 0;
const sequelize_1 = require("sequelize");
const db_1 = require("../database/db");
const sede_model_1 = require("./sede.model");
exports.Speciality = db_1.sequelize.define('specialties', {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    description: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
}, {
    timestamps: false,
});
// Speciality.belongsToMany(Specialist)
// Specialist.belongsToMany(Speciality)
exports.Speciality.belongsToMany(sede_model_1.Sede, { through: 'Speciality_sede' });
sede_model_1.Sede.belongsToMany(exports.Speciality, { through: 'Speciality_sede' });
//# sourceMappingURL=speciality.model.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Specialist = void 0;
const sequelize_1 = require("sequelize");
const db_1 = require("../database/db");

const sede_model_1 = require("./sede.model");
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

        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    tuition: {
        type: sequelize_1.DataTypes.STRING,

        allowNull: false,
    },
    consultingRoom: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
}, {
    timestamps: false,
});

exports.Specialist.belongsToMany(sede_model_1.Sede, { through: 'Specialist_sede' });
sede_model_1.Sede.belongsToMany(exports.Specialist, { through: 'Specialist_sede' });

//# sourceMappingURL=specialist.model.js.map
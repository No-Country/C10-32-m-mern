"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
const config_1 = require("../config/config");
exports.sequelize = new sequelize_1.Sequelize(config_1.DB_NAME, // db name,
config_1.DB_USER, // username
config_1.DB_PASSWORD, // password
{
    host: config_1.DB_HOST,
    dialect: 'postgres',
});
// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
//const { Specialist, Sede } = sequelize.models;
// Aca vendrian las relaciones
// Product.hasMany(Reviews);
// Specialist.belongsToMany(Sede, {through:'Specialist_sede'});
// Sede.belongsToMany(Specialist, {through:'Specialist_sede'})
//# sourceMappingURL=db.js.map
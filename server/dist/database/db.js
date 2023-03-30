"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const sequelize_1 = require("sequelize");
exports.sequelize = new sequelize_1.Sequelize('C10-32-m-mern', // db name,
'postgres', // username
'nico', // password
{
    host: 'localhost',
    dialect: 'postgres',
});
//# sourceMappingURL=db.js.map
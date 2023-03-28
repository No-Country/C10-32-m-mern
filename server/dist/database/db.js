"use strict";
// import { connect } from "http2";
// import { Dialect, Options, Sequelize } from "sequelize";
Object.defineProperty(exports, "__esModule", { value: true });
// export class SequelizeConnection {
//   private static instance: Sequelize;
//   static getInstance(): Sequelize {
//     if (!SequelizeConnection.instance) {
//       const dbConfig = {} as Options;
//       dbConfig.port = 5432;
//       dbConfig.host = "localhost";
//       dbConfig.database = "C10-32-m-mern";
//       dbConfig.ssl = false;
//       dbConfig.username = "postgres";
//       dbConfig.password = "nico";
//       dbConfig.logging = true;
//       dbConfig.dialect = "postgres" as Dialect;
//       SequelizeConnection.instance = new Sequelize(dbConfig);
//     }
//     return SequelizeConnection.instance;
//   }
//   static async connect(): Promise<Sequelize> {
//     const sequelize = SequelizeConnection.getInstance();
//     try {
//       await sequelize.authenticate();
//       console.log("Database authenticadted succesfully");
//       return sequelize;
//     } catch (error) {
//       console.log("Error while creation conection db:: ");
//       return sequelize;
//     }
//   }
// }
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize('C10-32-m-mern', 'postgres', 'nico', {
    host: 'localhost',
    dialect: 'postgres'
});
exports.default = sequelize;
//# sourceMappingURL=db.js.map
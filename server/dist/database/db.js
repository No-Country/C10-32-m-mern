"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SequelizeConnection = void 0;
const sequelize_1 = require("sequelize");
class SequelizeConnection {
    static getInstance() {
        if (!SequelizeConnection.instance) {
            const dbConfig = {};
            dbConfig.port = 5432;
            dbConfig.host = "localhost";
            dbConfig.database = "C10-32-m-mern";
            dbConfig.ssl = false;
            dbConfig.username = "postgres";
            dbConfig.password = "46626645";
            dbConfig.logging = true;
            dbConfig.dialect = "postgres";
            SequelizeConnection.instance = new sequelize_1.Sequelize(dbConfig);
        }
        return SequelizeConnection.instance;
    }
    static connect() {
        return __awaiter(this, void 0, void 0, function* () {
            const sequelize = SequelizeConnection.getInstance();
            try {
                yield sequelize.authenticate();
                console.log("Database authenticadted succesfully");
                return sequelize;
            }
            catch (error) {
                console.log("Error while creation conection db:: ");
                return sequelize;
            }
        });
    }
}
exports.SequelizeConnection = SequelizeConnection;
//# sourceMappingURL=db.js.map
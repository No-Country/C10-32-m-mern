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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const config_1 = require("./config/config");
const db_1 = require("./database/db");
require("./models/user.model");
require("./models/asociado.model");
require("./models/obrasocial.model");
require("./models/sede.model");
require("./models/specialist.model");
require("./models/speciality.model");
require("./models/Specialist_Sede.model");
require("./models/shift.model");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        yield db_1.sequelize.sync({ force: false });
        app_1.default.listen(config_1.PORT);
        console.log(`Server on port ${config_1.PORT}`);
    });
}
main();

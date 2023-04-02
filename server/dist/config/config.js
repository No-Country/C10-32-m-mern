"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PORT = exports.DB_USER = exports.DB_PORT = exports.DB_HOST = exports.DB_PASSWORD = exports.DB_NAME = exports.env = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
exports.env = {
    DB_PORT: process.env.DB_PORT || 5432,
    DB_HOST: process.env.DB_HOST || 'localhost',
    DB_USER: process.env.DB_USER,
    DB_NAME: process.env.DB_NAME,
    DB_PASSWORD: process.env.DB_PASSWORD,
    PORT: process.env.PORT || 3000,
};
exports.DB_NAME = exports.env.DB_NAME, exports.DB_PASSWORD = exports.env.DB_PASSWORD, exports.DB_HOST = exports.env.DB_HOST, exports.DB_PORT = exports.env.DB_PORT, exports.DB_USER = exports.env.DB_USER, exports.PORT = exports.env.PORT;
//# sourceMappingURL=config.js.map
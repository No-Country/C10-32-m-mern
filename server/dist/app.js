"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const app = (0, express_1.default)();
const auth_routes_1 = __importDefault(require("./routes/auth.routes"));
//settings
app.set("port", 3000);
//midleware
app.use((0, morgan_1.default)("dev"));
//routes
app.use(auth_routes_1.default);
exports.default = app;
//# sourceMappingURL=app.js.map
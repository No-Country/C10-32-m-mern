"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const app = (0, express_1.default)();
const auth_routes_1 = __importDefault(require("./routes/auth.routes"));
const user_routes_1 = __importDefault(require("./routes/user.routes"));
const obrasocial_routes_1 = __importDefault(require("./routes/obrasocial.routes"));
const sede_routes_1 = __importDefault(require("./routes/sede.routes"));
//settings
app.set('port', 3000);
//midleware
app.use((0, morgan_1.default)('dev'));
app.use(express_1.default.json());
//routes
app.use('/api', auth_routes_1.default);
app.use('/api', obrasocial_routes_1.default);
app.use('/api', sede_routes_1.default);
app.use('/users', user_routes_1.default);
exports.default = app;
//# sourceMappingURL=app.js.map
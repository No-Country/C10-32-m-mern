"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
const auth_routes_1 = __importDefault(require("./routes/auth.routes"));
const user_routes_1 = __importDefault(require("./routes/user.routes"));
const obrasocial_routes_1 = __importDefault(require("./routes/obrasocial.routes"));
const sede_routes_1 = __importDefault(require("./routes/sede.routes"));
const config_1 = require("./config/config");
var whitelist = ['http://localhost:5173'];
var corsOptions = {
    credentials: true,
    origin: function (origin, callback) {
        if (whitelist.indexOf(origin) !== -1) {
            callback(null, true);
        }
        else {
            callback(new Error('Not allowed by CORS'));
        }
    },
};
//settings
app.set('port', config_1.PORT);
//midleware
app.use((0, morgan_1.default)('dev'));
app.use(express_1.default.json());
app.use((0, cors_1.default)(corsOptions));
//routes
app.use('/api', auth_routes_1.default);
app.use('/api', obrasocial_routes_1.default);
app.use('/api', sede_routes_1.default);
app.use('/users', user_routes_1.default);
exports.default = app;
//# sourceMappingURL=app.js.map
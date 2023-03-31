"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const sede_controller_1 = require("../controllers/sede.controller");
router.get("/sede", sede_controller_1.getsedes);
exports.default = router;
//# sourceMappingURL=sede.routes.js.map
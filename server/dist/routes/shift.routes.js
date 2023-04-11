"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const shift_controller_1 = require("../controllers/shift.controller");
const router = (0, express_1.Router)();
router.get('/getshifts', shift_controller_1.getavailableshifts);
exports.default = router;
//# sourceMappingURL=shift.routes.js.map
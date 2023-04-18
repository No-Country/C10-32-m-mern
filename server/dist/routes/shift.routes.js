"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const shift_controller_1 = require("../controllers/shift.controller");
const router = (0, express_1.Router)();
router.post('/getshifts', shift_controller_1.getavailableshifts);
router.post('/scheduleshifts', shift_controller_1.scheduleshift);
router.get('/shiftbyuser/:id', shift_controller_1.getshiftbyuser);
exports.default = router;
//# sourceMappingURL=shift.routes.js.map
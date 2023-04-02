"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const speciality_controller_1 = require("../controllers/speciality.controller");
const router = (0, express_1.Router)();
router.get('/specialiestbysede', speciality_controller_1.getspecialiestbysede);
exports.default = router;
//# sourceMappingURL=speciality.routes.js.map
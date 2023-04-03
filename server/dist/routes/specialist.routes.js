"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const specialist_controller_1 = require("../controllers/specialist.controller");
const router = (0, express_1.Router)();
router.get('/specialistbysede', specialist_controller_1.getspecialistbysede);
router.get('/specialistdetails/:id', specialist_controller_1.getspecialistdetails);
exports.default = router;
//# sourceMappingURL=specialist.routes.js.map
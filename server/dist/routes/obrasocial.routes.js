"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const obrasocial_controller_1 = require("../controllers/obrasocial.controller");
router.get("/obrasocial", obrasocial_controller_1.getobrasociales);
exports.default = router;

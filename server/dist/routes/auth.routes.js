"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
const auth_controller_1 = require("../controllers/auth.controller");
//ruta de prueba para borrar
router.get('/', (req, res) => {
    res.send('prueba de rutas');
});
router.post('/signin', auth_controller_1.signin);
router.post('/signup', auth_controller_1.signup);
router.get('/logout', auth_controller_1.logout);
exports.default = router;
//# sourceMappingURL=auth.routes.js.map
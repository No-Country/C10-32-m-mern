"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getsedes = void 0;
const sede_model_1 = require("../models/sede.model");
const getsedes = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const sedes = yield sede_model_1.Sede.findAll();
        if (sedes.length == 0)
            return res.status(400).json('No existen datos');
        res.status(200).json(sedes);
    }
    catch (error) {
        res.status(400).json(error);
    }
});
exports.getsedes = getsedes;
//# sourceMappingURL=sede.controller.js.map
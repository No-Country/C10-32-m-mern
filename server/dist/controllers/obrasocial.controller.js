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
exports.getobrasociales = void 0;
const obrasocial_model_1 = require("../models/obrasocial.model");
const getobrasociales = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const obrassociales = yield obrasocial_model_1.ObraSocial.findAll();
        console.log(obrassociales.length);
        if (obrassociales.length == 0)
            return res.status(400).json('No existen datos');
        res.status(200).json(obrassociales);
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
});
exports.getobrasociales = getobrasociales;

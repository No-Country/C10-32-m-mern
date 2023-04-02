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
exports.getspecialiestbysede = void 0;
const speciality_model_1 = require("../models/speciality.model");
const sede_model_1 = require("../models/sede.model");
// Obtiene los especialistas de la sede enviada por query. 
const getspecialiestbysede = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const idsede = req.query.idsede;
    if (!idsede)
        return res.status(400).json('No se ha especificado la Sede');
    try {
        const sede = yield sede_model_1.Sede.findAll({
            where: { id: idsede },
            include: [{
                    model: speciality_model_1.Speciality
                }]
        });
        if (!sede.length)
            return res.status(200).send('No hay especialidades para la sede seleccionada.');
        res.status(200).send(sede);
    }
    catch (error) {
        res.status(400).send(error);
    }
});
exports.getspecialiestbysede = getspecialiestbysede;
//# sourceMappingURL=speciality.controller.js.map
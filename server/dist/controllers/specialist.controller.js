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
exports.getspecialistdetails = exports.getspecialistbysede = void 0;
const specialist_model_1 = require("../models/specialist.model");
const sede_model_1 = require("../models/sede.model");
// Obtiene los especialistas de la sede enviada por query. 
const getspecialistbysede = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const idsede = req.query.idsede;
    console.log(idsede);
    if (!idsede)
        return res.status(400).json('No se ha especificado la Sede');
    try {
        const sede = yield sede_model_1.Sede.findAll({
            where: { id: idsede },
            include: [{
                    model: specialist_model_1.Specialist
                }]
        });
        if (!sede.length)
            return res.status(200).send('No hay especialistas para la sede seleccionada.');
        res.status(200).send(sede);
    }
    catch (error) {
        res.status(400).send(error);
    }
});
exports.getspecialistbysede = getspecialistbysede;
const getspecialistdetails = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const idspecialist = req.params.id;
    console.log(idspecialist);
    try {
        const specialistdetails = yield specialist_model_1.Specialist.findByPk(idspecialist);
        if (!specialistdetails)
            return res.status(200).send('No existe especialista con el id enviado.');
        res.status(200).send(specialistdetails);
    }
    catch (error) {
        res.status(400).send(error);
    }
});
exports.getspecialistdetails = getspecialistdetails;
//# sourceMappingURL=specialist.controller.js.map
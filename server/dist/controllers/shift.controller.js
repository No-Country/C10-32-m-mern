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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.scheduleshift = exports.getavailableshifts = void 0;
const db_1 = require("../database/db");
const moment_1 = __importDefault(require("moment"));
const shift_model_1 = require("../models/shift.model");
const getavailableshifts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t;
    const { idspecialist, idsede, idspeciality, days } = req.body;
    function sumarDias(fecha, dias) {
        fecha.setDate(fecha.getDate() + dias);
        return fecha;
    }
    let arr = [];
    var today = new Date();
    var now = new Date();
    var maxday = sumarDias(now, days); // me permite establecer la cantidad de dias de las que voy a traer informacion. 
    console.log('TODAY**********', today);
    const infoturno = yield db_1.sequelize.query('SELECT mondayini, mondayend, mondaytotal, tuesdayini, tuesdayend, tuesdaytotal, wednesdayini, wednesdayend, wednesdaytotal, thursdayini, thursdayend, thursdaytotal, fridayini, fridayend, fridaytotal, "specialistId", "sedeId" FROM "Specialist_sede"  where "specialistId" =' + idspecialist + ' AND "sedeId" =' + idsede + ';');
    try {
        while (today <= maxday) {
            const todayquery = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
            let infoday;
            const countday = yield db_1.sequelize.query("SELECT COUNT (*) FROM public.shifts where date='" + todayquery + "';");
            const totalshiftday = (_a = countday[0][0]) === null || _a === void 0 ? void 0 : _a.count;
            switch (today.getDay()) {
                case 1:
                    infoday = { "total": (_b = infoturno[0][0]) === null || _b === void 0 ? void 0 : _b.mondaytotal, "ini": (_c = infoturno[0][0]) === null || _c === void 0 ? void 0 : _c.mondayini, "fin": (_d = infoturno[0][0]) === null || _d === void 0 ? void 0 : _d.mondayend };
                    break;
                case 2:
                    infoday = { "total": (_e = infoturno[0][0]) === null || _e === void 0 ? void 0 : _e.tuesdaytotal, "ini": (_f = infoturno[0][0]) === null || _f === void 0 ? void 0 : _f.tuesdayini, "fin": (_g = infoturno[0][0]) === null || _g === void 0 ? void 0 : _g.tuesdayend };
                    break;
                case 3:
                    infoday = { "total": (_h = infoturno[0][0]) === null || _h === void 0 ? void 0 : _h.wednesdaytotal, "ini": (_j = infoturno[0][0]) === null || _j === void 0 ? void 0 : _j.wednesdayini, "fin": (_k = infoturno[0][0]) === null || _k === void 0 ? void 0 : _k.wednesdayend };
                    break;
                case 4:
                    infoday = { "total": (_l = infoturno[0][0]) === null || _l === void 0 ? void 0 : _l.thursdaytotal, "ini": (_m = infoturno[0][0]) === null || _m === void 0 ? void 0 : _m.thursdayini, "fin": (_o = infoturno[0][0]) === null || _o === void 0 ? void 0 : _o.thursdayend };
                    break;
                case 5:
                    infoday = { "total": (_p = infoturno[0][0]) === null || _p === void 0 ? void 0 : _p.fridaytotal, "ini": (_q = infoturno[0][0]) === null || _q === void 0 ? void 0 : _q.fridayini, "fin": (_r = infoturno[0][0]) === null || _r === void 0 ? void 0 : _r.fridayend };
                    break;
            }
            if (totalshiftday <= (infoday === null || infoday === void 0 ? void 0 : infoday.total)) { //comparo si los turnos dados de ese dia son menores a los turnos disponibles de ese dia. Si son
                //menores hay lugar disponible, no estan sacados todos los turnos
                var init = (0, moment_1.default)(infoday === null || infoday === void 0 ? void 0 : infoday.ini, "h:mm:ss");
                var finturno = (0, moment_1.default)(infoday === null || infoday === void 0 ? void 0 : infoday.ini, "h:mm:ss").add(30, 'minutes');
                var count = 0;
                let hours = {};
                let aux = [];
                for (var i = 0; i < (infoday === null || infoday === void 0 ? void 0 : infoday.total) - 1; i++) {
                    if (i == 0) { //PARA EL PRIMER TURNO
                        const itsfree = yield db_1.sequelize.query('SELECT count(*) FROM public.shifts  where date = ' + "'" + todayquery + "'" + ' and hour = ' + "'" + init.format("HH:mm") + "'" + ' and "specialistId" =' + idspecialist + ' and "sedeId" = ' + idsede + ';');
                        if (((_s = itsfree[0][0]) === null || _s === void 0 ? void 0 : _s.count) == 0) {
                            hours = {
                                "ini": init.format("HH:mm"),
                                "fin:": finturno.format("HH:mm")
                            };
                            aux.push(hours);
                        }
                    }
                    init.add(30, 'minutes');
                    finturno.add(30, 'minutes');
                    const itsfree1 = yield db_1.sequelize.query('SELECT count(*) FROM public.shifts  where date = ' + "'" + todayquery + "'" + ' and hour = ' + "'" + init.format("HH:mm") + "'" + ' and "specialistId" =' + idspecialist + ' and "sedeId" = ' + idsede + ';');
                    if (((_t = itsfree1[0][0]) === null || _t === void 0 ? void 0 : _t.count) == 0) {
                        hours = {
                            "ini": init.format("HH:mm"),
                            "fin:": finturno.format("HH:mm")
                        };
                        aux.push(hours);
                    }
                }
                arr.push(todayquery, aux);
            }
            sumarDias(today, 1);
        }
        res.status(200).send(arr);
    }
    catch (error) {
        res.status(404).send(error);
    }
});
exports.getavailableshifts = getavailableshifts;
const scheduleshift = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { body } = req;
    try {
        //registrando turno//
        const newShift = yield shift_model_1.Shift.create({
            state: body.state,
            date: body.date,
            hour: body.hour,
            specialistId: body.specialistId,
            userId: body.userId,
            sedeId: body.sedeId,
            specialtyId: body.specialtyId,
        });
        res.status(200).json({ Shift: newShift });
    }
    catch (error) {
        res.status(400).json({ error: error.messagge });
    }
});
exports.scheduleshift = scheduleshift;
//# sourceMappingURL=shift.controller.js.map
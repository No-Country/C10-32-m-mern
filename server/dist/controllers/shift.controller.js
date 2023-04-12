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
exports.getavailableshifts = void 0;
const getavailableshifts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    /*
    const { idspecialist, idsede, idspeciality , days} = req.body


    function sumarDias(fecha: Date, dias: number) {
        fecha.setDate(fecha.getDate() + dias);
        return fecha;
    }


    let arr = [];
    var today = new Date();
    var now = new Date();
    var maxday = sumarDias(now, days) // me permite establecer la cantidad de dias de las que voy a traer informacion.

    const infoturno = await sequelize.query('SELECT mondayini, mondayend, mondaytotal, tuesdayini, tuesdayend, tuesdaytotal, wednesdayini, wednesdayend, wednesdaytotal, thursdayini, thursdayend, thursdaytotal, fridayini, fridayend, fridaytotal, "specialistId", "sedeId" FROM "Specialist_sede"  where "specialistId" =' + idspecialist + 'AND "sedeId" =' + idsede + ';')

    try {

        while (today <= maxday) {

            const todayquery = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate()
            let infoday;


            const countday = await sequelize.query("SELECT COUNT (*) FROM public.shifts where date='" + todayquery + "';")
            const totalshiftday = countday[0][0]?.count


            switch (today.getDay()) {

                case 1:
                    infoday = { "total": infoturno[0][0]?.mondaytotal, "ini": infoturno[0][0]?.mondayini, "fin": infoturno[0][0]?.mondayend }
                    break;
                case 2:
                    infoday = { "total": infoturno[0][0]?.tuesdaytotal, "ini": infoturno[0][0]?.tuesdayini, "fin": infoturno[0][0]?.tuesdayend }
                    break;
                case 3:
                    infoday = { "total": infoturno[0][0]?.wednesdaytotal, "ini": infoturno[0][0]?.wednesdayini, "fin": infoturno[0][0]?.wednesdayend }
                    break;
                case 4:
                    infoday = { "total": infoturno[0][0]?.thursdaytotal, "ini": infoturno[0][0]?.thursdayini, "fin": infoturno[0][0]?.thursdayend }
                    break;
                case 5:
                    infoday = { "total": infoturno[0][0]?.fridaytotal, "ini": infoturno[0][0]?.fridayini, "fin": infoturno[0][0]?.fridayend }
                    break;

            }



            if (totalshiftday <= infoday?.total) { //comparo si los turnos dados de ese dia son menores a los turnos disponibles de ese dia. Si son
                //menores hay lugar disponible, no estan sacados todos los turnos
                var init = moment(infoday?.ini, "h:mm:ss")
                var finturno = moment(infoday?.ini, "h:mm:ss").add(30, 'minutes')
                var count = 0


                let hours = {}

                let aux = []

                for (var i = 0; i < infoday?.total - 1; i++) {
                    if (i == 0) { //PARA EL PRIMER TURNO
                        const itsfree = await sequelize.query('SELECT count(*) FROM public.shifts  where date = ' + "'" + todayquery + "'" + ' and hour = ' + "'" + init.format("HH:mm") + "'" + ' and "specialistId" =' + idspecialist + ' and "sedeId" = ' + idsede + ';')

                        if (itsfree[0][0]?.count == 0) {

                            hours = {
                                "ini": init.format("HH:mm"),
                                "fin:": finturno.format("HH:mm")
                            };
                            aux.push(hours)
                        }

                    }

                    init.add(30, 'minutes');
                    finturno.add(30, 'minutes')
                    const itsfree1 = await sequelize.query('SELECT count(*) FROM public.shifts  where date = ' + "'" + todayquery + "'" + ' and hour = ' + "'" + init.format("HH:mm") + "'" + ' and "specialistId" =' + idspecialist + ' and "sedeId" = ' + idsede + ';')
                    
                    if (itsfree1[0][0]?.count == 0) {
                        hours = {
                            "ini": init.format("HH:mm"),
                            "fin:": finturno.format("HH:mm")
                        };

                        aux.push(hours)
                    }

                }

                arr.push(todayquery, aux)

            }

            sumarDias(today, 1)
        }
        res.status(200).send(arr)
    } catch (error) {
        res.status(404).send(error)

    }
 */
});
exports.getavailableshifts = getavailableshifts;
//# sourceMappingURL=shift.controller.js.map
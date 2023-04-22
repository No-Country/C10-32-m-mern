import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { specialitiesSeter } from "../redux/slices/specialities";
import { useCustomSelector } from "../hooks/redux";
import { specialistSeter } from "../redux/slices/specialists";
import { daySeter } from "../redux/slices/date";

function Dropdown({ header, title }: any) {
  const url: string = "https://jsonplaceholder.typicode.com/users";

  const [specialitie, setSpecialitie] = useState<String | Number | null>(null);
  const [specialist, setSpecialist] = useState<string | null>(null);
  const [shiftDate, setShiftDate] = useState("");

  const [handleDateButton, sethandleDateButton] = useState(false);

  const [specialitieSelect, setSpecialitieSelect] = useState(false);
  const [specialistSelect, setSpecialistSelect] = useState(false);

  const dispatch = useDispatch();

  const { specialities } = useCustomSelector((state) => state);
  console.log("especialidades", specialities);

  const {
    specialists: { specialists },
  } = useCustomSelector((state) => state);
  console.log("especialistas", specialists);

  const {
    sede: { sede },
  } = useCustomSelector((state) => state);

  const { date } = useCustomSelector((state) => state);

  useEffect(() => {
    dispatch<any>(specialitiesSeter({ sede }));
    console.log(sede);
  }, []);

  const handleSpecialitie = () => {
    if (specialitie !== "Seleccione una Especialidad" && specialitie !== null) {
      setSpecialitieSelect(!specialitieSelect);
      dispatch<any>(specialistSeter(specialitie));
      console.log("el id de la especialidad elegida", specialitie);
    }
  };

  const handleSpecialist = () => {
    if (specialist !== "Seleccione una Especialista" && specialist !== null) {
      setSpecialistSelect(!specialistSelect);
      dispatch<any>(daySeter(2, 5, 1));
      // dispatch<any>(daySeter(parseInt(specialist,1), sede, specialitie));
      console.log(
        "el especialista seleccionado",
        typeof parseInt(specialist, 1)
      );
    }
  };

  const handleDate = () => {
    console.log("la fecha elegida", date.date[0][1].aux[0].ini);
  };

  return (
    <div className="mx-auto max-w-lg w-full my-6">
      <div className="divide-y divide-gray-100 overflow-hidden rounded-[3px] border border-gray-200 bg-white shadow-sm">
        <details className="group text-[13px]">
          <summary className="flex cursor-pointer list-none items-center justify-between p-4  font-bold group-open:border-b group-open:border-b-gray-100 bg-lightPurple">
            {header}
            <div className="text-secondary-500">
              {/* <p>Agendar</p> */}
              {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="block h-5 w-5 transition-all duration-300 group-open:rotate-180">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg> */}
            </div>
          </summary>
          <div className="p-6">
            <select
              onChange={(e) => setSpecialitie(e.target.value)}
              name=""
              className="block w-full rounded-[3px] mx-auto max-w-xs p-4 my-4 border border-gray-100 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 focus:bg-lightPurple "
            >
              <option>{title}</option>
              {specialities.specialities.map((i) => (
                <option key={i.id} value={i.id} className="bg-lightPurple">
                  {i.description}
                </option>
              ))}
            </select>
            {specialitieSelect ? (
              ""
            ) : (
              <button
                onClick={handleSpecialitie}
                className="w-full bg-darkPurple h-[45px] rounded-[4px] text-[13px] text-white font-bold"
              >
                AGENDAR ESPECIALIDAD
              </button>
            )}
            {specialitieSelect && (
              <>
                <select
                  onChange={(e) => setSpecialist(e.target.value)}
                  name=""
                  id=""
                  className="block w-full rounded-[3px] mx-auto max-w-xs p-4 my-4 border border-gray-100 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 focus:bg-lightPurple "
                >
                  <option>Seleccione un Especialista</option>
                  {specialists[0].specialists.map((i) => (
                    <option value={i.name}>{i.name}</option>
                  ))}
                </select>
                {specialistSelect ? (
                  ""
                ) : (
                  <button
                    onClick={handleSpecialist}
                    className="w-full bg-darkPurple h-[45px] rounded-[4px] text-[13px] text-white font-bold"
                  >
                    AGENDAR ESPECIALISTA
                  </button>
                )}
              </>
            )}
            {specialitieSelect == true && specialistSelect == true ? (
              <>
                <select
                  onChange={(e) => setShiftDate(e.target.value)}
                  name=""
                  id=""
                  className="block w-full rounded-[3px] mx-auto max-w-xs p-4 my-4 border border-gray-100 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 focus:bg-lightPurple "
                >
                  <option>Seleccione una Fecha</option>

                  {date.date.map((i) => (
                    <option>{i[0].fecha}</option>
                  ))}
                </select>
                <button
                  onClick={handleDate}
                  className="w-full bg-darkPurple h-[45px] rounded-[4px] text-[13px] text-white font-bold"
                >
                  ASIGNAR FECHA
                </button>
              </>
            ) : (
              ""
            )}
            {specialitieSelect && (
              <>
                <select
                  onChange={(e) => setSpecialist(e.target.value)}
                  name=""
                  id=""
                  className="block w-full rounded-[3px] mx-auto max-w-xs p-4 my-4 border border-gray-100 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 focus:bg-lightPurple "
                >
                  <option>Seleccione un Horario</option>

                  {date.date.map((i) => (
                    i[1].aux.map((element) => {
                      
                      <option>{element.ini} {element.fin}</option>
                    })
                  ))}
                </select>
                {specialistSelect ? (
                  ""
                ) : (
                  <button
                    onClick={handleSpecialist}
                    className="w-full bg-darkPurple h-[45px] rounded-[4px] text-[13px] text-white font-bold"
                  >
                    AGENDAR HORARIO
                  </button>
                )}
              </>
            )}
          </div>
        </details>
      </div>
    </div>
  );
}

export default Dropdown;

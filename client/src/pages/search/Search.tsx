import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";

import Text from "../../components/Text";
import Title from "../../components/Title";
import Dropdown from "../../components/Dropdown";

import IconSearchSmall from "../../icons/IconSearchSmall";
import { useCustomSelector } from "../../hooks/redux";

const Search = () => {
  [];

  const [shifts, setShifts] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [specialities, setSpecialities] = useState([]);

  // useEffect(() => {
  //   axios.get("https://api-c1032mmern.onrender.com/api/specialistbfl?letter=").then((res) => {
  //     setDoctors(res.data);
  //     console.log(res.data);
  //   });
  //   axios.get("https://api-c1032mmern.onrender.com/api/specialiestbysede?idsede=2").then((res) => {
  //     setSpecialities(res.data[0].specialties);
  //     console.log("specialities en search", res.data);
  //     console.log(res.data[0].specialties[0].description);
  //   });
  // }, []);

  const { user } = useCustomSelector((state) => state);

  const { category } = useParams();

  useEffect(() => {
    axios
      .post<any>("https://api-c1032mmern.onrender.com/api/getshifts", {
        idspecialist: 2,
        idsede: 5,
        idspeciality: 1,
        days: 4,
      })
      .then((res) => {
        console.log(res);
      });
  }, []);

  return (
    <div className="pb-40 lg:px-6 px-32">
      {category === "specialists" ? (
        <>
          <Title title={"Especialistas"} />
          <Text
            first={`Bienvenido ${user.name}`}
            second={"Ubica al doctor de tu preferencia y selecciona el horario."}
          />

          <Dropdown
            header="Primero elige a un Especialista (Haz click aquí)"
            title="Seleccione un Especialista"
          />
        </>
      ) : (
        <>
          <Title title={"Espcialidades"} />
          <Text
            first={`Bienvenido ${user.name}`}
            second={"Busque la especialidad y seleccione el especialista y horario"}
          />

          <Dropdown
            header="Primero elige a una Especialidad (Haz click aquí)"
            title="Seleccione una Especialidad"
            array={specialities}
          />

          {/* <div className="mx-auto max-w-lg lg:w-full w-1/3 my-6">
            <div className="divide-y divide-gray-100 overflow-hidden rounded-[3px] border border-gray-200 bg-white shadow-sm">
              <details className="group text-[13px]">
                <summary className="flex cursor-pointer list-none items-center justify-between p-4  font-bold group-open:border-b group-open:border-b-gray-100 bg-lightPurple">
                  {turnos.estudio}
                  <div className="text-secondary-500"></div>
                </summary>
                <div className="p-6">
                  <select
                    name=""
                    className="block w-full rounded-[3px] mx-auto max-w-xs p-4 my-4 border border-gray-100 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 focus:bg-lightPurple "
                  >
                    <option>Seleccione un Especialista</option>
                    {estudio.especialistas.map((i) => (
                      <option value="" className="bg-lightPurple">
                        {i}
                      </option>
                    ))}
                  </select>

                  <select
                    name=""
                    className="block w-full rounded-[3px] mx-auto max-w-xs p-4 my-4 border border-gray-10 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 focus:bg-lightPurple"
                  >
                    <option>Seleccione el dia</option>
                    {estudio.fecha.map((i) => (
                      <option value="" className="bg-lightPurple ">
                        {i}
                      </option>
                    ))}
                  </select>

                  <select
                    name=""
                    className="block w-full rounded-[3px] mx-auto max-w-xs p-4 my-4 border border-gray-10 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 focus:bg-lightPurple"
                  >
                    <option>Seleccione el horario</option>
                    {estudio.horarios.map((i) => (
                      <option value="" className="bg-lightPurple ">
                        {i}
                      </option>
                    ))}
                  </select>
                  <button className="w-full bg-darkPurple h-[45px] rounded-[4px] text-[13px] text-white font-bold">
                    AGENDAR
                  </button>
                </div>
              </details>
            </div>
          </div> */}
        </>
      )}
    </div>
  );
};

export default Search;

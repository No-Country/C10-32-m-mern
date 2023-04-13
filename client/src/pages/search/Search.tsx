import { useParams } from "react-router-dom";
import Text from "../../components/Text";
import Title from "../../components/Title";
import iconSearchSmall from "../../assets/iconSearchSmall.svg";
import Dropdown from "../../components/Dropdown";
import { useEffect, useState } from "react";
import axios from "axios";

const Search = () => {
  [];

  const [turnos, setTurnos] = useState([]);

  // await fetch("http://localhost:3000/api/getshifts", {
  //       method: "GET",
  //       headers: { "Content-Type": "application/json" },
  //       body: JSON.stringify({
  //         name,
  //         secondname,
  //         document,
  //         email,
  //         password,
  //         phone,
  //         obrasocialeId,
  //       }),
  //     });

  const { category } = useParams();
  console.log(category);
  useEffect(() => {
    axios
      .post<any>("http://localhost:3000/api/getshifts", {
        idspecialist: 2,
        idsede: 5,
        idspeciality: 1,
        days: 4,
      })
      .then((res) => {
        console.log(res);
        // setTurnos(res.data);
      });
  }, []);

  return (
    <div>
      {category === "specialists" ? (
        <>
          <Title title={"Especialistas"} />
          <Text
            first={"Hola Nombre Usuario"}
            second={"Ubica al doctor de tu preferencia y selecciona el horario."}
          />

          <Dropdown header="Primero elige a un Especialista" />
        </>
      ) : (
        <>
          <Title title={"Espcialidades"} />
          <Text
            first={"Hola Nombre Usuario"}
            second={"Busque la especialidad y seleccione el especialista y horario"}
          />

          <Dropdown header="Primero elige a una Especialidad" />

          <div className="mx-auto max-w-lg lg:w-full w-1/3 my-6">
            <div className="divide-y divide-gray-100 overflow-hidden rounded-[3px] border border-gray-200 bg-white shadow-sm">
              <details className="group text-[13px]">
                <summary className="flex cursor-pointer list-none items-center justify-between p-4  font-bold group-open:border-b group-open:border-b-gray-100 bg-lightPurple">
                  {estudio.estudio}
                  <div className="text-secondary-500">
                    {/* <p>Agendar</p> */}
                    {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="block h-5 w-5 transition-all duration-300 group-open:rotate-180">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                    </svg> */}
                  </div>
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
          </div>
        </>
      )}
    </div>
  );
};

export default Search;

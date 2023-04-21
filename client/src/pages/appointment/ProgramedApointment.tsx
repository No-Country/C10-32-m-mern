import { Link } from "react-router-dom";
import Title from "../../components/Title";
import Text from "../../components/Text";
import NavBar from "../../components/NavBar";
import Accordion from "react-bootstrap/Accordion";
import AllCollapseExample from "../../components/Dropdown";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const ProgramedApointment = () => {
  interface item {
    estudio: string;
    especialidad: string;
    especialistas: string[];
    fecha: string[];
    horarios: string[];
  }

  let pedidos: Array<item> = [
    {
      estudio: "Electrocardiograma",
      especialidad: "Cardiologia",
      especialistas: ["Dr. Pedro Pascal", "Dr. Strange"],
      fecha: ["26 de Abril", "27 de Abril", "28 de Abril"],
      horarios: ["09:00", "10:30", "11:00"],
    },
    {
      estudio: "Colonoscopia",
      especialidad: "Gastroenterologia",
      especialistas: ["Dr. Bruno Diaz", "Dra. Martinez"],
      fecha: ["26 de Abril", "27 de Abril", "28 de Abril"],
      horarios: ["09:00", "10:30", "11:00"],
    },
    {
      estudio: "Espirometria",
      especialidad: "Neumonologia",
      especialistas: ["Dr. Pedro Pascal", "Dr. Strange"],
      fecha: ["26 de Abril", "27 de Abril", "28 de Abril"],
      horarios: ["09:00", "10:30", "11:00"],
    },
    {
      estudio: "Electrocardiograma",
      especialidad: "Cardiologia",
      especialistas: ["Dr. Pedro Pascal", "Dr. Strange"],
      fecha: ["26 de Abril", "27 de Abril", "28 de Abril"],
      horarios: ["09:00", "10:30", "11:00"],
    },
    {
      estudio: "Colonoscopia",
      especialidad: "Gastroenterologia",
      especialistas: ["Dr. Bruno Diaz", "Dra. Martinez"],
      fecha: ["26 de Abril", "27 de Abril", "28 de Abril"],
      horarios: ["09:00", "10:30", "11:00"],
    },
    {
      estudio: "Espirometria",
      especialidad: "Neumonologia",
      especialistas: ["Dr. Pedro Pascal", "Dr. Strange"],
      fecha: ["26 de Abril", "27 de Abril", "28 de Abril"],
      horarios: ["09:00", "10:30", "11:00"],
    },
  ];

  interface turno {
    estudio: string;
    especialidad: string;
    especialistas: string[];
    fecha: string[];
    horarios: string[];
  }

  let reserva: Array<turno> = [];

  interface cita {
    estudio: string;
    especialidad: string;
    especialista: string;
    fecha: string;
    horario: string;
  }

  let citas: Array<cita> = [
    {
      estudio: "Endoscopia",
      especialidad: "Gastroenterologia",
      especialista: "Dr. Barty Crouch Jr. ",
      fecha: "26 de Abril",
      horario: "09:00",
    },
  ];

  return (
    <div className="px-32 lg:px-8">
      <NavBar />
      <Title title={"Agenda tu turno"} />
      <Text
        first={"Hola, Nombre Usuario."}
        second={`Tienes ${citas.length} Citas programadas`}
        third={"Escoge el especialista y el horario:"}
      />
      <div className="flex lg:flex-col flex-wrap gap-8 pb-10">
        {citas?.map((cita) => {
          return (
            <div className="mx-auto max-w-lg lg:w-full w-[40%] my-6 ">
              <div className="divide-y divide-gray-100 overflow-hidden rounded-[3px] border border-gray-200 bg-white shadow-sm">
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between p-4 text-[13px] font-bold  group-open:border-b group-open:border-b-gray-100 bg-white">
                    {cita.estudio}
                    <div className="text-secondary-500">
                      {/* <p>Agendar</p> */}
                      {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="block h-5 w-5 transition-all duration-300 group-open:rotate-180">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                      </svg> */}
                    </div>
                  </summary>
                  <div className="p-6 text-base">
                    <p>
                      Especialista: <span className="font-bold">{cita.especialista}</span>
                    </p>
                    <p>
                      Fecha: <span className="font-bold">{cita.fecha}</span>
                    </p>
                    <p>
                      Horario: <span className="font-bold">{cita.horario}</span>
                    </p>
                  </div>
                  <div className="flex">
                    <button className="w-1/2 bg-[#F75E5E] h-[45px] my-6 mx-auto rounded-[4px] text-[13px] text-white font-bold hover:drop-shadow-md hover:-translate-y-1 transition duration-200 ease-in-out">
                      CANCELAR
                    </button>
                  </div>
                </details>
              </div>
            </div>
          );
        })}
        {pedidos.map((estudio) => {
          return (
            <>
              <div className="mx-auto max-w-lg lg:w-full w-[40%] my-6">
                <div className="divide-y divide-gray-100 overflow-hidden rounded-[3px] border border-gray-200 bg-white shadow-sm">
                  <details className="group text-[13px]">
                    <summary className="flex cursor-pointer list-none items-center justify-between p-4  font-bold group-open:border-b group-open:border-b-gray-100 bg-white">
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
                      <button className="w-full bg-darkPurple h-[45px] rounded-[4px] text-[13px] text-white font-bold hover:drop-shadow-md hover:-translate-y-1 transition duration-200 ease-in-out">
                        AGENDAR
                      </button>
                    </div>
                  </details>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};
export default ProgramedApointment;

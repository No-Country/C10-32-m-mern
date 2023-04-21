import NavBar from "../../components/NavBar";
import ButtonAction from "../../components/ButtonAction";

import Calendar from "../../icons/Calendar";
import { useCustomSelector } from "../../hooks/redux";

const ScheduledsShifts = () => {
  const {
    user: { name, secondname },
  } = useCustomSelector((state) => state);

  const turnosAgendados = [
    {
      name: "Hemograma completo",
      doctor: "Dr. Pedro Pascal",
      date: "Jueves 30 de Marzo",
      hour: "10:30 - 11:30 am",
    },
    {
      name: "Hemograma completo",
      doctor: "Dr. Pedro Pascal",
      date: "Jueves 30 de Marzo",
      hour: "10:30 - 11:30 am",
    },
    {
      name: "Hemograma completo",
      doctor: "Dr. Pedro Pascal",
      date: "Jueves 30 de Marzo",
      hour: "10:30 - 11:30 am",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center max-w-[30rem]">
      <NavBar />
      <div className="max-w-[30rem] w-[30rem] lg:w-[90vw] mt-10 flex justify-start items-center gap-8 bg-fontNav drop-shadow rounded-2xl h-[5rem] px-8">
        <Calendar active={true} />
        <p className="text-center text-[30px] text-white leading-6">Turnos agendados</p>
      </div>
      <div className="flex flex-col justify-start w-full">
        <h2 className="text-xl font-bold mt-6">
          Hola, {name} {secondname}.
        </h2>
        <p className="text-lg">Estas son las citas y fechas que tienes programadas</p>
      </div>
      {turnosAgendados.map((turno) => (
        <div className="max-w-[30rem] w-full border border-borders rounded-md bg-white my-6">
          <div className="border-b border-borders p-2 font-bold">
            <p>{turno.name}</p>
          </div>
          <ul className="p-[1.5rem] ">
            <li>
              Doctor: <strong>{turno.doctor}</strong>
            </li>
            <li>
              Fecha: <strong>{turno.date}</strong>
            </li>
            <li>
              Horario: <strong>{turno.hour}</strong>
            </li>
          </ul>
          <div className="flex justify-center items-center pb-[1.5rem]">
            <ButtonAction className="bg-darkPurple text-white">CANCELAR CITA</ButtonAction>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ScheduledsShifts;

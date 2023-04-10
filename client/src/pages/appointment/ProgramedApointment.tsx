import { Link } from "react-router-dom";
import Title from "../../components/Title";
import Text from "../../components/Text";
import HeaderSm from "../../components/HeaderSm";
import NavBar from "../../components/NavBar";
import Accordion from "react-bootstrap/Accordion";
import AllCollapseExample from "../../components/Accordion";
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
    <div className="">
      <HeaderSm />
      <NavBar />
      <Title title={"Agenda tu turno"} />
      <Text
        first={"Hola, Nombre Usuario."}
        second={"Tienes Citas programadas"}
        third={"Escoge el especialista y el horario:"}
      />
      <div style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
        {citas?.map((cita) => {
          return (
            <Accordion defaultActiveKey="0" className="w-full">
              <Accordion.Item eventKey="0">
                <Accordion.Header>{cita.estudio}</Accordion.Header>
                <Accordion.Body>
                  <p>
                    Especialista: <span>{cita.especialista}</span>
                  </p>
                  <p>
                    Fecha: <span>{cita.fecha}</span>
                  </p>
                  <p>
                    Horario: <span>{cita.horario}</span>
                  </p>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          );
        })}
        {pedidos.map((estudio) => {
          return (
            <>
            <div className="mx-auto max-w-lg w-full">
              <div className="divide-y divide-gray-100 overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
                <details className="group" open>
                  <summary className="flex cursor-pointer list-none items-center justify-between p-4 text-lg font-medium text-secondary-900 group-open:bg-gray-50">
                    Accordion item 01
                    <div className="text-secondary-500">
                      {/* <p>Agendar</p> */}
                      {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="block h-5 w-5 transition-all duration-300 group-open:rotate-180">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                      </svg> */}
                    </div>
                  </summary>
                  <div className="mx-auto max-w-xs p-4 border-t border-t-gray-100">
                    <select name="" className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50">
                      <option value="">English</option>
                      <option value="">Japanese</option>
                      <option value="">Chinese</option>
                    </select>
                  </div>
                </details>
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between p-4 text-lg font-medium text-secondary-900 group-open:bg-gray-50">
                    Accordion item 02
                    <div className="text-secondary-500">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="block h-5 w-5 transition-all duration-300 group-open:rotate-180">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                      </svg>
                    </div>
                  </summary>
                  <div className="border-t border-t-gray-100 p-4 text-secondary-500">This is the second item's accordion body.</div>
                </details>
                <details className="group">
                  <summary className="flex cursor-pointer list-none items-center justify-between p-4 text-lg font-medium text-secondary-900 group-open:bg-gray-50">
                    Accordion item 03
                    <div className="text-secondary-500">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="block h-5 w-5 transition-all duration-300 group-open:rotate-180">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                      </svg>
                    </div>
                  </summary>
                  <div className="border-t border-t-gray-100 p-4 text-secondary-500">This is the third item's accordion body.</div>
                </details>
              </div>
            </div>
            <Accordion className="my-5 w-full">
              <Accordion.Item eventKey="0">
                <Accordion.Header>{estudio.estudio}</Accordion.Header>
                <Accordion.Body>
                  <Form.Select
                    aria-label="Default select example"
                    className="w-full border-2 border-borders my-2"
                  >
                    <option>Seleccione un Especialista</option>
                    {estudio.especialistas.map((i) => (
                      <option value="">{i}</option>
                    ))}
                  </Form.Select>
                  <Form.Select
                    aria-label="Default select example"
                    className="w-full border-2 border-borders my-2"
                  >
                    <option>Seleccione el dia</option>
                    {estudio.fecha.map((i) => (
                      <option value="">{i}</option>
                    ))}
                  </Form.Select>
                  <Form.Select
                    aria-label="Default select example"
                    className="w-full border-2 border-borders my-2"
                  >
                    <option>Seleccione el horario</option>
                    {estudio.horarios.map((i) => (
                      <option value="">{i}</option>
                    ))}
                  </Form.Select>

                  <Button variant="primary" className="w-full">
                    Agendar
                  </Button>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
            </>
          );
        })}
      </div>
    </div>
  );
};
export default ProgramedApointment;

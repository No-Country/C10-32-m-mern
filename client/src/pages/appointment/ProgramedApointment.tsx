import { Link } from "react-router-dom";
import Title from "../../components/Title";
import Text from "../../components/Text";
import HeaderSm from "../../components/HeaderSm";
import NavBar from "../../components/NavBar";
// import Accordion from 'react-bootstrap/Accordion';
// import AllCollapseExample from "../../components/Accordion";
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';

const ProgramedApointment = () => {

  interface item {
    estudio: string,
    especialidad: string,
    especialistas: string[],
    fecha:string[],
    horarios: string[],
}

  let pedidos : Array<item> =[
    {
      estudio: 'Electrocardiograma',
      especialidad: 'Cardiologia',
      especialistas: ['Dr. Pedro Pascal' , 'Dr. Strange'],
      fecha:['26 de Abril', '27 de Abril', '28 de Abril'],
      horarios: ['09:00', '10:30', '11:00'],
    },
    {
      estudio: 'Colonoscopia',
      especialidad: 'Gastroenterologia',
      especialistas: ['Dr. Bruno Diaz' , 'Dra. Martinez'],
      fecha:['26 de Abril', '27 de Abril', '28 de Abril'],
      horarios: ['09:00', '10:30', '11:00'],
    },
    {
      estudio: 'Espirometria',
      especialidad: 'Neumonologia',
      especialistas: ['Dr. Pedro Pascal' , 'Dr. Strange'],
      fecha:['26 de Abril', '27 de Abril', '28 de Abril'],
      horarios: ['09:00', '10:30', '11:00'],
    }
  ];
  
  interface turno {
    estudio: string,
    especialidad: string,
    especialistas: string[],
    fecha:string[],
    horarios: string[],
}

let reserva: Array<turno> = []


interface cita {
  estudio: string,
  especialidad: string,
  especialista: string,
  fecha:string,
  horario: string,
}

let citas: Array<cita> = [
  {
    estudio: 'Endoscopia',
    especialidad: 'Gastroenterologia',
    especialista: 'Dr. Barty Crouch Jr. ',
    fecha:'26 de Abril',
    horario: '09:00',
  }
]

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
      <div className="flex-col items-center">
        {
          
          citas?.map((cita) => {
            return(
              <Accordion defaultActiveKey="0" >
                <Accordion.Item eventKey="0" >
                  <Accordion.Header>{cita.estudio}</Accordion.Header>
                  <Accordion.Body>
                    <p>Especialista: <span>{cita.especialista}</span></p>
                    <p>Fecha: <span>{cita.fecha}</span></p>
                    <p>Horario: <span>{cita.horario}</span></p>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            )
          }) 
        }
          {

            pedidos.map((estudio) => {
              return(
                <Accordion className="my-5">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>{estudio.estudio}</Accordion.Header>
                  <Accordion.Body>
                    <Form.Select aria-label="Default select example" className="w-full border-2 border-borders my-2">
                      <option>Seleccione un Especialista</option>
                      {estudio.especialistas.map((i) => <option value="">{i}</option>)}
                    </Form.Select>
                    <Form.Select aria-label="Default select example" className="w-full border-2 border-borders my-2">
                      <option >Seleccione el dia</option>
                        {estudio.fecha.map((i) => <option value="">{i}</option>)}
                    </Form.Select>
                    <Form.Select aria-label="Default select example" className="w-full border-2 border-borders my-2">
                      <option >Seleccione el horario</option>
                        {estudio.horarios.map((i) => <option value="">{i}</option>)}
                    </Form.Select>
  
                    <Button variant="primary" className="w-full">Agendar</Button>
                  </Accordion.Body>
                </Accordion.Item>
        
              </Accordion>
              )
            })
          }
      </div>

    </div>
  );
};
export default ProgramedApointment;

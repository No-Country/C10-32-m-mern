import { Link } from "react-router-dom";
import Title from "../../components/Title";
import Text from "../../components/Text";
import HeaderSm from "../../components/HeaderSm";
import NavBar from "../../components/NavBar";
import Accordion from 'react-bootstrap/Accordion';
import AllCollapseExample from "../../components/Accordion";

const ProgramedApointment = () => {
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
        <AllCollapseExample header="Estudio 1" body="Algo por aca"/>
        
        <Accordion className="my-5">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Estudio 2</Accordion.Header>
          <Accordion.Body>
            <select name="specialist" className="w-full border-2 border-borders my-2">
              <option >Seleccione su Dr/Dra</option>
              <option value="">Doc uno</option>
              <option value="">Doc dos</option>
              <option value="">Doc tres</option>
            </select>
            <select name="date" className="w-full border-2 border-borders my-2">
              <option >Seleccione el dia</option>
              <option value="">23 de Abril</option>
            </select>
            <select name="schedule" className="w-full border-2 border-borders my-2">
              <option >Seleccione el horario</option>
              <option value="">09:00</option>
              <option value="">09:30</option>
              <option value="">10:00</option>
            </select>
          </Accordion.Body>
        </Accordion.Item>

      </Accordion>
      </div>

    </div>
  );
};
export default ProgramedApointment;

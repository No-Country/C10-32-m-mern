import { Link } from "react-router-dom";
import Title from "../../components/Title";
import Text from "../../components/Text";
import HeaderSm from "../../components/HeaderSm";
import NavBar from "../../components/NavBar";

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
      </div>

    </div>
  );
};
export default ProgramedApointment;

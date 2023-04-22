import { Link } from "react-router-dom";
import Title from "../../components/Title";
import ButtonRight from "../../components/ButtonRight";
import Text from "../../components/Text";
import IconSpecialistSmall from "../../icons/IconSpecialiestSmall";
import IconSmallHeart from "../../icons/IconSmallHearth";
import { useCustomSelector } from "../../hooks/redux";
import Swal from "sweetalert2";

const NewAppoitment = () => {
  const {
    user: { name },
  } = useCustomSelector((state) => state);

  const alert = () => {
    Swal.fire({
      icon: "info",
      title: "Proximamente",
    });
  };
  return (
    <div className="px-32 lg:px-8 mt-8">
      <Title title={"Agenda tu turno"} />
      <Text
        first={`Hola, ${name}.`}
        second={"Agenda tu nueva cita."}
        third={"Escoge una opción:"}
      />
      <div className="flex lg:flex-col items-center justify-center gap-10 mb-40 lg:mb-10">
        <div
          onClick={alert}
          className="hover:cursor-pointer flex lg:flex-row lg:justify-around flex-col justify-center items-center bg-gray text-[#4A4A4A] rounded-2xl lg:h-[106px] lg:w-[311px] h-[10rem] w-[250px] my-8 p-6 shadow-md"
        >
          <IconSpecialistSmall />
          <p className="font-montserrat font-semibold text-center text-[18px] leading-6">
            Por Especialistas
          </p>
          <ButtonRight color={"bg-lightBlue"} />
        </div>
        <Link
          to="/search/specialities"
          className="flex lg:flex-row lg:justify-around flex-col justify-center items-center bg-gray text-[#4A4A4A] rounded-2xl lg:h-[106px] lg:w-[311px] h-[10rem] w-[250px] my-8 p-6 shadow-md"
        >
          <IconSmallHeart />
          <p className="font-montserrat font-semibold text-center text-[18px] leading-6">
            Por Esp. Médicas
          </p>
          <ButtonRight color={"bg-lightYellow"} />
        </Link>
      </div>
    </div>
  );
};
export default NewAppoitment;

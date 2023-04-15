import { Link } from "react-router-dom";
import Title from "../../components/Title";
import iconCalendarSmall from "../../assets/iconCalendarSmall.svg";
import iconCheckCalendar from "../../assets/iconCheckCalendarSmall.svg";
import HeaderSm from "../../components/HeaderSm";

const AppointmentOptions = () => {
  return (
    <div className="pb-5">
      <HeaderSm />
      <Title title={"Agenda tu turno"} />
      <p className="mt-6 text-[18px]">Escoge una opcion</p>
      <div className="flex lg:flex-col items-center justify-around">
        <Link
          to="/programedAppointment"
          className="flex flex-col justify-center items-center bg-lightBlue text-[#FFFFFF] rounded-2xl lg:h-[100px] lg:w-[202px] h-[250px] w-[250px] my-8 px-8"
        >
          <img src={iconCheckCalendar} alt="" />
          <p className="font-montserrat font-semibold tracking-tight text-center text-[22px] leading-6 mt-[7px]">
            Citas programadas
          </p>
        </Link>
        <Link
          to="/newAppointment"
          className="flex flex-col justify-center items-center bg-lightGreen text-[#FFFFFF] rounded-2xl lg:h-[100px] lg:w-[202px] h-[250px] w-[250px] my-8 px-8"
        >
          <img src={iconCalendarSmall} alt="" />
          <p className="font-montserrat font-semibold tracking-tight text-center text-[22px] leading-6 mt-[7px]">
            Agendar nueva cita
          </p>
        </Link>
      </div>
    </div>
  );
};
export default AppointmentOptions;

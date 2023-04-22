import { Link } from "react-router-dom";
import Title from "../../components/Title";
import IconCalendarSmall from "../../icons/IconCalendarSmall";
import IconCheckCalendar from "../../icons/IconChechCalendar";
import Swal from "sweetalert2";

const AppointmentOptions = () => {
  const alert = () => {
    Swal.fire({
      icon: "info",
      title: "Proximamente",
      confirmButtonColor: "#1C6ACC",
    });
  };

  return (
    <div className="px-32 lg:px-8 py-32 lg:py-10">
      <Title title={"Agenda tu turno"} />
      <p className="mt-6 text-[18px]">Escoge una opcion</p>
      <div className="flex lg:flex-col items-center justify-around gap-10">
        <button
          onClick={alert}
          className="flex flex-col justify-center items-center bg-lightBlue text-[#FFFFFF] rounded-2xl lg:h-fit lg:w-[202px] h-[160px] w-[250px] my-8 p-8"
        >
          <IconCheckCalendar />
          <p className="font-montserrat font-semibold tracking-tight text-center text-[22px] leading-6 mt-[7px]">
            Citas programadas
          </p>
        </button>
        <Link
          to="/newAppointment"
          className="flex flex-col justify-center items-center bg-lightGreen text-[#FFFFFF] rounded-2xl lg:h-fit lg:w-[202px] h-[160px] w-[250px] my-8 p-8"
        >
          <IconCalendarSmall />
          <p className="font-montserrat font-semibold tracking-tight text-center text-[22px] leading-6 mt-[7px]">
            Agendar nueva cita
          </p>
        </Link>
      </div>
    </div>
  );
};
export default AppointmentOptions;

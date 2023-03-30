import { Link } from "react-router-dom"
import Title from "../../components/Title"

const AppoinmentOptions = () =>{
    return (

        <div className="">
            <Title/>
            <p className="mt-6 text-[18px]">Escoge una opcion</p>
            <div className="flex flex-col items-center">
                <Link to="/newAppointment" className="flex flex-col justify-center items-center bg-lightGreen text-[#FFFFFF] rounded-2xl h-[100px] w-[202px] my-8 px-8">
                    <img src="https://icongr.am/feather/calendar.svg?size=33&color=ffffff" alt="" />
                    <p className="text-center text-[22px] leading-6 mt-[7px]">Agendar nueva cita</p>

                </Link>
                <Link to="/programedAppointment" className="flex flex-col justify-center items-center bg-lightBlue text-[#FFFFFF] rounded-2xl h-[100px] w-[202px] my-8 px-8">
                    <img src="https://icongr.am/feather/check-square.svg?size=33&color=ffffff" alt="" />
                    <p className="text-center text-[22px] leading-6 mt-[7px]">Citas programadas</p>

                </Link>
            </div>
        </div>
    )
}
export default AppoinmentOptions
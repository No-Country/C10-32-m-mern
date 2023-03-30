import { Link } from "react-router-dom"
import Title from "../../components/Title"

const NewAppoitment = () =>{
    return (

        <div className="">
            <Title/>
            <p className="mt-6 text-[18px]">Hola, Nombre Usuario.</p>
            <p className="mt-6 text-[18px]">Agenda tu nueva cita</p>
            <p className="mt-6 text-[18px]">Escoge una opción</p>
            <div className="flex-col items-center">
            <Link to="#" className="flex justify-around items-center bg-lightBlue text-[#FFFFFF] rounded-2xl h-[54px] my-8 px-8">
                    <img src="https://icongr.am/feather/user.svg?size=33&color=ffffff" alt="" />
                    <p className="text-center text-[22px] leading-6">Por Especialistas</p>
                </Link>
                <Link to="#" className="flex justify-around items-center bg-lightYellow text-[#FFFFFF] rounded-2xl h-[54px] my-8 px-8">
                    <img src="https://icongr.am/feather/heart.svg?size=33&color=ffffff" alt="" />
                    <p className="text-center text-[22px] leading-6">Por Esp. Médicas</p>
                </Link>
            </div>
        </div>
    )
}
export default NewAppoitment
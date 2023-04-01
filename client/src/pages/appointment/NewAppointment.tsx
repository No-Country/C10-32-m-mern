import { Link } from "react-router-dom"
import Title from "../../components/Title"
import ButtonRight from "../../components/ButtonRight"
import Text from "../../components/Text"

const NewAppoitment = () =>{
    return (

        <div className="">
            <Title 
                title={"Agenda tu turno"}
            />
            <Text
                first={"Hola, Nombre Usuario."}
                second={"Agenda tu nueva cita"}
                third={"Escoge una opción"}
            />
            <div className="flex-col items-center">
            <Link to="/search" className="flex justify-around items-center bg-gray text-[#4A4A4A] rounded-2xl h-[54px] my-8 px-8 shadow-md">
                    <img src="https://icongr.am/feather/user.svg?size=33&color=4A4A4A" alt="" />
                    <p className="text-center text-[22px] leading-6">Por Especialistas</p>
                    <ButtonRight
                        color={"bg-lightBlue"}
                    />
                </Link>
                <Link to="/search" className="flex justify-around items-center bg-gray text-[#4A4A4A] rounded-2xl h-[54px] my-8 px-8 shadow-md">
                    <img src="https://icongr.am/feather/heart.svg?size=33&color=4A4A4A" alt="" />
                    <p className="text-center text-[22px] leading-6">Por Esp. Médicas</p>
                    <ButtonRight
                        color={"bg-lightYellow"}
                    />
                </Link>
            </div>
        </div>
    )
}
export default NewAppoitment
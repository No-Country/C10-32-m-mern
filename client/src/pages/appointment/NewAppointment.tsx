import { Link } from "react-router-dom"
import Title from "../../components/Title"
import ButtonRight from "../../components/ButtonRight"
import Text from "../../components/Text"
import iconSpecialistSmall from "../../assets/iconSpecialistSmall.svg"
import iconSmallHeart from "../../assets/iconSmallHeart.svg"



const NewAppoitment = () =>{
    return (

        <div className="px-32 lg:px-8">
            <Title 
                title={"Agenda tu turno"}
            />
            <Text
                first={"Hola, Nombre Usuario."}
                second={"Agenda tu nueva cita"}
                third={"Escoge una opción"}
            />
            <div className="flex lg:flex-col items-center justify-around">
            <Link to="/search/specialists" className="flex lg:flex-row lg:justify-around flex-col justify-center items-center bg-gray text-[#4A4A4A] rounded-2xl lg:h-[106px] lg:w-[311px] h-[250px] w-[250px] my-8 px-6 shadow-md">
                    <img src={iconSpecialistSmall} alt="" />
                    <p className="font-montserrat font-semibold text-center text-[18px] leading-6">Por Especialistas</p>
                    <ButtonRight
                        color={"bg-lightBlue"}
                    />
                </Link>
                <Link to="/search/specialities" className="flex lg:flex-row lg:justify-around flex-col justify-center items-center bg-gray text-[#4A4A4A] rounded-2xl lg:h-[106px] lg:w-[311px] h-[250px] w-[250px] my-8 px-6 shadow-md">
                    <img src={iconSmallHeart} alt="" />
                    <p className="font-montserrat font-semibold text-center text-[18px] leading-6">Por Esp. Médicas</p>
                    <ButtonRight
                        color={"bg-lightYellow"}
                    />
                </Link>
            </div>
        </div>
    )
}
export default NewAppoitment
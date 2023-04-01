import Title from "../../components/Title"
import Appointment from "../../icons/Appointment"

const AppoinmentOptions = () =>{
    return (

        <div>
            <Title 
                title={"Agenda tu cita"}
                color={"bg-[#76D9D5]"}
                icon={<Appointment/>}
            />
        </div>
    )
}
export default AppoinmentOptions
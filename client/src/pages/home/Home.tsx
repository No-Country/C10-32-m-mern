import { Link } from "react-router-dom";

const Home = () =>{

    return(
        <div className="flex-col justify-center">
            <select name="select" className="w-full mt-8 h-10 bg-transparent border-2 border-borders rounded-[3px] text-sm px-2">
                <option selected>Selecciona la sede</option>
                <option value="norte">Sede Norte</option>
                <option value="sur">Sede Sur</option>
                <option value="oeste">Sede Oeste</option>
            </select>
            <div className="">
                <Link to="/appointment" className="flex justify-between items-center bg-lightGreen text-[#FFFFFF] rounded-2xl h-[100px] my-8 px-8">
                    <img src="https://icongr.am/feather/calendar.svg?size=63&color=ffffff" alt="" />
                    <p className="text-center text-[22px] leading-6">Agenda tu turno</p>

                </Link>
                <Link to="/specialists" className="flex justify-between items-center bg-lightBlue text-[#FFFFFF] rounded-2xl h-[100px] my-8 px-8">
                    <img src="https://icongr.am/feather/user.svg?size=63&color=ffffff" alt="" />
                    <p className="text-center text-[22px] leading-6">Especialistas</p>
                </Link>
                <Link to="#" className="flex justify-between items-center bg-lightYellow text-[#FFFFFF] rounded-2xl h-[100px] my-8 px-8">
                    <img src="https://icongr.am/feather/heart.svg?size=63&color=ffffff" alt="" />
                    <p className="text-center text-[22px] leading-6">Esp. Médicas</p>
                </Link>
            </div>
        </div>
    )
}

export default Home;
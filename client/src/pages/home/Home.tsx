import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar";
import iconCalendarHome from "../../assets/iconCalendarHome.svg";
import iconSpecialistHome from "../../assets/iconSpecialistHome.svg";
import iconHeartHome from "../../assets/iconHeartHome.svg";
import Header from "../../components/Header";
import { useEffect, useState } from "react";
import axios from "axios";
import FloatingChat from "../../components/FloatingChat";
import { useCustomSelector } from "../../hooks/redux";
import IconLanding from "../../icons/IconLanding";

const Home = () => {
  const [sedes, setSedes] = useState([]);

  const { user } = useCustomSelector((state) => state);

  useEffect(() => {
    axios.get("http://localhost:3000/api/sede").then((res) => {
      console.log(res.data);
      setSedes(res.data);
    });
  }, []);

  const handleChoose = (e: any) => {
    console.log(e.target.value);
  };

  return (
    <div className="flex flex-col justify-center">
      <NavBar />
      <Header name={user.name} lastName={user.secondname} />

      <select
        onChange={handleChoose}
        name="select"
        className="hidden lg:inline-block lg:w-full mt-8 lg:h-10 w-1/2 h-12 m-auto bg-transparent border-2 border-borders rounded-[3px] text-sm px-2"
      >
        <option>Selecciona la sede</option>
        {sedes.map((sede) => (
          <option value={sede.name}>{sede.name}</option>
        ))}
      </select>
      {/* version mobile */}
      <div className="flex flex-wrap gap-8 justify-center lg:block">
        <Link
          to="/appointment"
          className="hidden lg:flex items-center bg-lightGreen text-[#FFFFFF] rounded-2xl lg:h-[100px] lg:w-full h-[250px] w-[250px] my-8 px-[43px]"
        >
          <img src={iconCalendarHome} alt="" />
          <p className="font-montserrat font-semibold text-start text-[22px] leading-6 px-[23px] lg:w-1/2">
            Agenda tu turno
          </p>
        </Link>
        <Link
          to="/specialists"
          className="hidden lg:flex  items-center bg-lightBlue text-[#FFFFFF] rounded-2xl lg:h-[100px] lg:w-full h-[250px] w-[250px] my-8 px-[43px]"
        >
          <img src={iconSpecialistHome} alt="" />
          <p className="font-montserrat font-semibold text-start text-[22px] leading-6 px-[23px]">
            Especialistas
          </p>
        </Link>
        <Link
          to="#"
          className="hidden lg:flex items-center bg-lightYellow text-[#FFFFFF] rounded-2xl lg:h-[100px] lg:w-full h-[250px] w-[250px] my-8 px-[43px]"
        >
          <img src={iconHeartHome} alt="" />
          <p className="font-montserrat font-semibold text-start text-[22px] leading-6 px-[23px]">
            Esp. Médicas
          </p>
        </Link>
      </div>
      {/* version desktop */}
      <section className="flex justify-between lg:hidden">
        <IconLanding />
        <div className="flex flex-col justify-start items-center">
          <h1 className="text-primary-start font-bold text-5xl text-center max-w-[600px] mt-20">
            AHORRA TIEMPO Y ORGANIZA TUS TURNOS MEDICOS DE FORMA FÁCIL Y RÁPIDA
          </h1>
          <Link
            to="/appointment"
            className="lg:hidden flex items-center bg-lightGreen text-[#FFFFFF] rounded-2xl h-[100px] w-[400px] mt-16 px-[43px]"
          >
            <img src={iconCalendarHome} alt="" />
            <p className="font-montserrat font-semibold text-start text-[22px] leading-6 px-[23px] lg:w-1/2">
              Agenda tu turno
            </p>
          </Link>
        </div>
      </section>

      <FloatingChat />
    </div>
  );
};

export default Home;

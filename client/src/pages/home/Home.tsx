import { Link, useNavigate } from "react-router-dom";
import NavBar from "../../components/NavBar";
import iconCalendarHome from "../../assets/iconCalendarHome.svg";
import iconSpecialistHome from "../../assets/iconSpecialistHome.svg";
import iconHeartHome from "../../assets/iconHeartHome.svg";
import Header from "../../components/Header";
import React, { useEffect, useState } from "react";
import axios from "axios";
import FloatingChat from "../../components/FloatingChat";
import { useCustomSelector } from "../../hooks/redux";
import IconLanding from "../../icons/IconLanding";
import Slider from "../../components/Slider";
import GridLanding from "../../components/GridLanding";
import Map from "../../assets/Mapsicle Map.jpg";
import IconPlusFast from "../../icons/IconPlusFast";
import IconPlusEasy from "../../icons/IconPlusEasy";
import IconPlusHome from "../../icons/IconPlusHome";
import ButtonAction from "../../components/ButtonAction";
import SliderSpecialities from "../../components/SliderSpecilities";

const Home = () => {
  const [sedes, setSedes] = useState([]);
  const [algo, setAlgo] = React.useState(null);

  const navigate = useNavigate();

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

      {algo ? (
        <div className="px-6">
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
        </div>
      ) : (
        <>
          <h1 className="lg:block hidden font-montserrat font-extrabold text-center text-base leading-[50px] tracking-widest text-darkBlue py-8 px-[23px]">
            AHORRA TU TIEMPO <br /> Y ORGANIZA TUS TURNOS MEDICOS DE FORMA FÁCIL
            Y RÁPIDA
          </h1>
          <div className=" hidden lg:flex flex-col items-center py-7">
            <ButtonAction
              className="my-3 bg-buttonBlue text-secondary "
              onClick={() => navigate("/register")}
              children="SOY USUARIO NUEVO"
            />
            <ButtonAction
              className="my-3 bg-buttonGray text-black"
              onClick={() => navigate("/login")}
              children="INICIAR SESION"
            />
          </div>
          <div className="lg:flex hidden flex-col  justify-center ">
            {/* <Link
                to="/specialists"
                className="hidden lg:flex  items-center bg-lightBlue text-[#FFFFFF] rounded-2xl lg:h-[100px] lg:w-full h-[250px] w-[250px] my-8 px-[43px]"
              >
                <img src={iconSpecialistHome} alt="" />
                <p className="font-montserrat font-semibold text-start text-[22px] leading-6 px-[23px]">
                  Especialistas
                </p>
              </Link> */}
            <div className="bg-gradient-to-b from-primary-start to-primary-end">
              <p className="font-montserrat font-semibold text-start text-[22px] text-textWhite leading-6 px-[23px] py-7">
                Nuestros Especialistas
              </p>
              <Slider />
            </div>
            {/* <Link
                to="#"
                className="hidden lg:flex items-center bg-lightYellow text-[#FFFFFF] rounded-2xl lg:h-[100px] lg:w-full h-[250px] w-[250px] my-8 px-[43px]"
              >
                <img src={iconHeartHome} alt="" />
                <p className="font-montserrat font-semibold text-start text-[22px] leading-6 px-[23px]">
                  Esp. Médicas
                </p>
              </Link> */}
            <p className="font-montserrat font-semibold text-start text-[22px] leading-6 px-[23px] py-7">
              Esp. Médicas
            </p>
            <SliderSpecialities />
          </div>
        </>
      )}

      {/* <select
        onChange={handleChoose}
        name="select"
        className="hidden lg:inline-block lg:w-full mt-8 lg:h-10 w-1/2 h-12 m-auto bg-transparent border-2 border-borders rounded-[3px] text-sm px-2"
      >
        <option>Selecciona la sede</option>
        {sedes.map((sede) => (
          <option value={sede.name}>{sede.name}</option>
        ))}
      </select>
      
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
      </div> */}

      {/* version desktop */}
      <section className="flex justify-center xl:justify-center lg:hidden">
        <IconLanding />
        <div className=" flex flex-col justify-start items-center pr-20">
          <h1 className="text-primary-start font-bold text-4xl text-center max-w-[600px] mt-20">
            AHORRA TIEMPO Y ORGANIZA TUS TURNOS MEDICOS DE FORMA FÁCIL Y RÁPIDA
          </h1>
          {algo ? (
            <Link
              to="/appointment"
              className="lg:hidden flex items-center bg-lightGreen text-[#FFFFFF] rounded-2xl h-[100px] w-[400px] my-16 px-[43px]"
            >
              <img src={iconCalendarHome} alt="" />
              <p className="font-montserrat font-semibold text-[22px] leading-6 px-[23px] lg:w-1/2">
                Agenda tu turno
              </p>
            </Link>
          ) : (
            <div className="flex flex-col items-center py-7">
              <ButtonAction
                className="my-3 bg-buttonBlue text-secondary "
                onClick={() => navigate("/register")}
                children="SOY USUARIO NUEVO"
              />
              <ButtonAction
                className="my-3 bg-buttonGray text-black"
                onClick={() => navigate("/login")}
                children="INICIAR SESION"
              />
            </div>
          )}
        </div>
      </section>
      <section className="lg:hidden flex flex-col justify-center bg-gradient-to-b from-primary-start to-primary-end w-[100%] h-[45rem] px-32">
        <h2 className="text-2xl font-montserrat font-extrabold text-white absolute top-[51rem] left-[10.5rem]">
          Nuestros Especialistas
        </h2>
        <Slider />
        <div className="flex justify-around w-full relative top-[11rem]">
          <div className="flex justify-center items-center w-[25%] h-[10rem] bg-white border-[3px] border-[#1A60B980] rounded-xl">
            <IconPlusFast />
          </div>
          <div className="flex justify-center items-center w-[25%] h-[10rem] bg-white border-[3px] border-[#1A60B980] rounded-xl">
            <IconPlusEasy />
          </div>
          <div className="flex justify-center items-center w-[25%] h-[10rem] bg-white border-[3px] border-[#1A60B980] rounded-xl">
            <IconPlusHome />
          </div>
        </div>
      </section>
      <section className="px-32 lg:hidden">
        <h2 className="font-montserrat font-black text-2xl text-black mt-[8rem] mb-[4rem] ml-[3rem]">
          Nuestros Servicios Médicos
        </h2>
        <GridLanding />
      </section>
      <section className="lg:hidden px-32 flex justify-around m-20 ">
        <div className="flex flex-col justify-between">
          <h2 className="font-montserrat font-extrabold text-2xl text-black py-4">
            Horarios de Atención
          </h2>
          <div className="flex flex-col justify-around h-full text-lg">
            <div className="py-4 font-montserrat">
              <p>Lunes a viernes 06:00 am - 20:30 pm</p>
            </div>
            <div className="py-4 font-montserrat">
              <p>Sábados 08:00 am - 16:00 pm</p>
            </div>
            <div className="py-4 font-montserrat">
              <p>Domingos y feriados cerrado</p>
            </div>
          </div>
        </div>
        <div>
          <h2 className="font-montserrat font-extrabold text-2xl text-black py-4">
            Nuestras Sedes
          </h2>
          <div>
            <img src={Map} alt="" />
          </div>
        </div>
      </section>
      <FloatingChat />
    </div>
  );
};

export default Home;

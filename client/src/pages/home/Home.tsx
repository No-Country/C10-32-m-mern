import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import IconCalendarHome from "../../icons/IconCalendarHome";
import IconSpecialistHome from "../../icons//IconSpecialistHome";
import IconHeartHome from "../../icons/IconHearthHome";

import Header from "../../components/Header";
import FloatingChat from "../../components/FloatingChat";
import { useCustomSelector } from "../../hooks/redux";
import IconLanding from "../../icons/IconLanding";
import Slider from "../../components/Slider";
import GridLanding from "../../components/GridLanding";
import ButtonAction from "../../components/ButtonAction";

import IconPlusFast from "../../icons/IconPlusFast";
import IconPlusEasy from "../../icons/IconPlusEasy";
import IconPlusHome from "../../icons/IconPlusHome";
import SliderSpecialities from "../../components/SliderSpecilities";
import IconLandingMobile from "../../icons/IconLandingMobile";
import Mapa from "../../icons/Map";

import { setSede } from "../../redux/slices/sede";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";
// import { useCustomSelector } from "../hooks/redux";

const Home = () => {
  const [sedes, setSedes] = useState([]);
  const [algo, setAlgo] = React.useState<any>(null);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user } = useCustomSelector((state) => state);

  useEffect(() => {
    axios.get("https://api-c1032mmern.onrender.com/api/sede").then((res) => {
      console.log(res.data);
      setSedes(res.data);
    });
    if (user.name != "") {
      setAlgo(1);
    }
  }, []);

  const handleChoose = (e: any) => {
    e.preventDefault();
    console.log(e.target.value);
    dispatch<any>(setSede(e.target.value));
    console.log("la sede es", sede);
  };

  const { sede } = useCustomSelector((state) => state);
  console.log("la sede id es ", sede.sede.id);

  const alert = () => {
    Swal.fire({
      icon: "info",
      title: "Proximamente",
    });
  };

  const infoDoctors = [
    {
      id: 1,
      name: "Daniel Perez",
      specialty: "Cardiologo",
      rating: 45,
      img: "https://randomuser.me/api/portraits/med/men/57.jpg",
    },
    {
      id: 2,
      name: "Miguel Sanchez",
      specialty: "Neurologo",
      rating: 62,
      img: "https://randomuser.me/api/portraits/med/men/86.jpg",
    },
    {
      id: 3,
      name: "Pedro Lopez",
      specialty: "Oftalmologo",
      rating: 54,
      img: "https://hips.hearstapps.com/hmg-prod/images/portrait-of-a-happy-young-doctor-in-his-clinic-royalty-free-image-1661432441.jpg?crop=0.66698xw:1xh;center,top&resize=1200:*",
    },
    {
      id: 4,
      name: "Juan Marcuay",
      specialty: "Otorrino",
      rating: 80,
      img: "https://randomuser.me/api/portraits/med/men/99.jpg",
    },
    {
      id: 5,
      name: "Fernando Loayza",
      specialty: "Cardiologo",
      rating: 90,
      img: "https://randomuser.me/api/portraits/med/men/82.jpg",
    },
    {
      id: 6,
      name: "Fernaddo Loayza",
      specialty: "Cardiologo",
      rating: 90,
      img: "https://randomuser.me/api/portraits/med/men/85.jpg",
    },
    {
      id: 7,
      name: "Fernanssdo Loayza",
      specialty: "Cardiologo",
      rating: 90,
      img: "https://randomuser.me/api/portraits/med/men/77.jpg",
    },
  ];

  return (
    <div className="flex flex-col justify-center">
      <Header />
      {algo ? (
        <div className="px-6">
          <select
            onChange={(e) => handleChoose(e)}
            name="select"
            className="hidden lg:inline-block lg:w-full mt-8 lg:h-10 w-1/2 h-12 m-auto bg-transparent border-2 border-borders rounded-[3px] text-sm px-2"
          >
            <option>Selecciona la sede</option>
            {sedes.map((sede) => (
              <option key={sede.id} value={sede.id}>
                {sede.name}
              </option>
            ))}
          </select>
          {/* version mobile */}
          <div className="flex flex-wrap gap-8 justify-center lg:block">
            <Link
              to="/appointment"
              className="hidden lg:flex items-center bg-lightGreen text-[#FFFFFF] rounded-2xl lg:h-[100px] lg:w-full h-[250px] w-[250px] my-8 px-[43px]"
            >
              <IconCalendarHome />
              <p className="font-montserrat font-semibold text-start text-[22px] leading-6 px-[23px] lg:w-1/2">
                Agenda tu turno
              </p>
            </Link>
            <Link
              to="/specialists"
              className="hidden lg:flex  items-center bg-lightBlue text-[#FFFFFF] rounded-2xl lg:h-[100px] lg:w-full h-[250px] w-[250px] my-8 px-[43px]"
            >
              <IconSpecialistHome />
              <p className="font-montserrat font-semibold text-start text-[22px] leading-6 px-[23px]">
                Especialistas
              </p>
            </Link>
            <div
              onClick={alert}
              className="hover:cursor-pointer hidden lg:flex items-center bg-lightYellow text-[#FFFFFF] rounded-2xl lg:h-[100px] lg:w-full h-[250px] w-[250px] my-8 px-[43px]"
            >
              <IconHeartHome />
              <p className="font-montserrat font-semibold text-start text-[22px] leading-6 px-[23px]">
                Esp. Médicas
              </p>
            </div>
          </div>
        </div>
      ) : (
        <>
          <h1 className="lg:block hidden font-montserrat font-extrabold text-center text-base leading-[50px] tracking-widest text-darkBlue py-8 px-[23px]">
            AHORRA TU TIEMPO <br /> Y ORGANIZA TUS TURNOS MEDICOS DE FORMA FÁCIL Y RÁPIDA
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
          <IconLandingMobile />
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
            <div className="w-screen bg-gradient-to-b from-primary-start to-primary-end">
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

      {/* version desktop */}
      <section className="flex justify-center xl:justify-center lg:hidden">
        <IconLanding />
        <div className=" flex flex-col justify-start items-center pr-20">
          <h1 className="text-primary-start font-bold text-4xl text-center max-w-[600px] mt-20">
            AHORRA TIEMPO Y ORGANIZA TUS TURNOS MEDICOS DE FORMA FÁCIL Y RÁPIDA
          </h1>
          {algo ? (
            <>
              <select
                onChange={handleChoose}
                name="select"
                className=" mt-8 w-3/4 h-12 bg-transparent border-2 border-borders rounded-[3px] text-sm px-2"
              >
                <option>Selecciona la sede</option>
                {sedes.map((sede) => (
                  <option value={sede.id}>{sede.name}</option>
                ))}
              </select>
              <Link
                to="/appointment"
                className="lg:hidden flex items-center bg-lightGreen text-[#FFFFFF] rounded-2xl h-[100px] w-[400px] my-12 px-[43px]"
              >
                <IconCalendarHome />
                <p className="font-montserrat font-semibold text-[22px] leading-6 px-[23px] lg:w-1/2">
                  Agenda tu turno
                </p>
              </Link>
            </>
          ) : (
            <div className="flex flex-col items-center py-7">
              <ButtonAction
                className="my-3 bg-buttonBlue text-secondary rounded-lg"
                onClick={() => navigate("/register")}
                children="SOY USUARIO NUEVO"
              />
              <ButtonAction
                className="my-3 bg-buttonGray text-black rounded-lg"
                onClick={() => navigate("/login")}
                children="INICIAR SESION"
              />
            </div>
          )}
        </div>
      </section>
      <section className="lg:hidden flex flex-col justify-center bg-gradient-to-b from-primary-start to-primary-end w-screen h-[45rem] px-32">
        <h2 className="text-2xl font-montserrat font-extrabold text-white absolute xl:top-[40rem] top-[51rem] left-[10.5rem]">
          Nuestros Especialistas
        </h2>
        <Slider />
        <div className="flex xl:justify-between justify-around w-full relative top-[11rem]">
          <div className="flex justify-center items-center xl:min-w-[250px] min-w-[350px] w-[25%] h-[10rem] bg-white border-[3px] border-[#1A60B980] rounded-xl">
            <IconPlusFast />
          </div>
          <div className="flex justify-center items-center xl:min-w-[250px] min-w-[350px] w-[25%] h-[10rem] bg-white border-[3px] border-[#1A60B980] rounded-xl">
            <IconPlusEasy />
          </div>
          <div className="flex justify-center items-center xl:min-w-[250px] min-w-[350px] w-[25%] h-[10rem] bg-white border-[3px] border-[#1A60B980] rounded-xl">
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
      <FloatingChat />
    </div>
  );
};

export default Home;

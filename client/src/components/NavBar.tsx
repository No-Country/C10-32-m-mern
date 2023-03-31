import React, { useState } from "react";
import Logo from "../icons/Logo";
import Header from "./Header";
import Link from "react-router";
import { NavLink } from "react-router-dom";
import Notification from "../icons/Notification";
import Profile from "../icons/Profile";
import Calendar from "../icons/Calendar";
import LogOut from "../icons/LogOut";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
    console.log("state changed");
  };

  return (
    <div>
      <i
        className="fa-solid fa-bars absolute top-6 right-6 z-[99] cursor-pointer p-5 text-[30px] text-fontNav rounded-full bg-white"
        onClick={handleNav}
      />
      {nav ? (
        <div className="fixed top-0 right-0 w-screen h-screen bg-bgNav flex flex-col justify-center items-center z-20 px-8 mt-10">
          <div className="fixed top-0 flex flex-col items-center justify-center w-full h-[11rem] bg-gradient-to-b from-primary-start to-primary-end">
            <Logo />
            <div className="lg:absolute lg:top-[7rem] font-semibold flex items-center justify-center mt-[2.5rem] h-[.1rem] w-screen bg-secondary"></div>
          </div>
          <NavLink
            to="/notifications"
            className="w-full flex justify-start items-center gap-8 bg-white text-[#FFFFFF] drop-shadow rounded-2xl h-[5rem] my-5 px-8"
            onClick={handleNav}
          >
            <Notification />
            <p className="text-center text-[30px] text-fontNav leading-6">
              Notificaciones
            </p>
          </NavLink>
          <NavLink
            to="/profile"
            className="w-full flex justify-start items-center gap-8 bg-white text-[#FFFFFF] drop-shadow rounded-2xl h-[5rem] my-5 px-8"
            onClick={handleNav}
          >
            <Profile />
            <p className="text-center text-[30px] text-fontNav leading-6">
              Mi Perfil
            </p>
          </NavLink>
          <NavLink
            to="/programedAppointment"
            className="w-full flex justify-start items-center gap-8 bg-white text-[#FFFFFF] drop-shadow rounded-2xl h-[5rem] my-5 px-8"
            onClick={handleNav}
          >
            <Calendar />
            <p className="text-center text-[30px] text-fontNav leading-6">
              Turnos Agendados
            </p>
          </NavLink>
          <NavLink
            to="/notifications"
            className="w-full flex justify-start items-center gap-8 bg-white text-[#FFFFFF] drop-shadow rounded-2xl h-[5rem] my-5 px-8"
            onClick={handleNav}
          >
            <LogOut />
            <p className="text-center text-[30px] text-fontNav leading-6">
              Cerrar Sesión
            </p>
          </NavLink>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default NavBar;

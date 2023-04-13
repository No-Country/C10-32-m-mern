import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Notification from "../icons/Notification";
import IconProfile from "../icons/IconProfile";
import Calendar from "../icons/Calendar";
import LogOut from "../icons/LogOut";
import HeaderSm from "./HeaderSm";
import { useCustomDispatch, useCustomSelector } from "../hooks/redux";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
    console.log("state changed");
  };

  const { user } = useCustomSelector((state) => state);
  const dispatch = useCustomDispatch();

  const logOut = () => {
    handleNav();
    dispatch;
  };

  return (
    <div className="hidden lg:inline-block">
      <i
        className="fixed fa-solid fa-bars top-6 right-6 z-[99] cursor-pointer p-4 text-[30px] text-fontNav rounded-full bg-white"
        onClick={handleNav}
      />
      {nav ? (
        <nav className="fixed top-0 right-0 w-screen h-screen bg-bgNav flex flex-col justify-center items-center z-20 px-8">
          <HeaderSm />
          <NavLink
            to="/notifications"
            className="w-full flex justify-start items-center gap-8 bg-white text-[#FFFFFF] drop-shadow rounded-2xl h-[5rem] mt-16 my-5 px-8"
            onClick={handleNav}
          >
            <Notification active={false} />
            <p className="text-center text-[30px] text-fontNav leading-6">Notificaciones</p>
          </NavLink>
          <NavLink
            to="/profile"
            className="w-full flex justify-start items-center gap-8 bg-white text-[#FFFFFF] drop-shadow rounded-2xl h-[5rem] my-5 px-8"
            onClick={handleNav}
          >
            <IconProfile active={false} />
            <p className="text-center text-[30px] text-fontNav leading-6">Mi Perfil</p>
          </NavLink>
          <NavLink
            to="/scheduledsshifts"
            className="w-full flex justify-start items-center gap-8 bg-white text-[#FFFFFF] drop-shadow rounded-2xl h-[5rem] my-5 px-8"
            onClick={handleNav}
          >
            <Calendar active={false} />
            <p className="text-center text-[30px] text-fontNav leading-6">Turnos Agendados</p>
          </NavLink>
          <NavLink
            to="/login"
            className="w-full flex justify-start items-center gap-8 bg-white text-[#FFFFFF] drop-shadow rounded-2xl h-[5rem] my-5 px-8"
            onClick={logOut}
          >
            <LogOut />
            <p className="text-center text-[30px] text-fontNav leading-6">Cerrar Sesión</p>
          </NavLink>
        </nav>
      ) : (
        ""
      )}
    </div>
  );
};

export default NavBar;

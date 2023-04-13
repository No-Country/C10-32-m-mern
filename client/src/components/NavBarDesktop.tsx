import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import IconClose from "../icons/IconClose";
import IconNotificationsMini from "../icons/IconNotificationsMini";
import IconTurnosMini from "../icons/IconTurnosMini";
import IconProfileMini from "./IconProfileMini";

const NavBarDesktop = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
    console.log("state changed");
  };

  return (
    <div className="lg:hidden inline-block">
      <i
        className="fixed fa-solid fa-bars top-6 left-6 z-[99] cursor-pointer p-4 text-[30px] text-fontNav rounded-full bg-white"
        onClick={handleNav}
      />
      {nav ? (
        <nav>
          <div className="fixed top-0 left-0 w-[20rem] h-screen bg-white z-[100]">
            <p className="absolute top-6 left-4 font-bold text-primary-start">MENU</p>
            <button onClick={handleNav} className="absolute top-6 right-4">
              <IconClose />
            </button>
            <NavLink
              to={"/notifications"}
              className="relative flex justify-start items-center gap-4 top-[4.5rem] left-6 mb-[2rem]"
            >
              <IconNotificationsMini />
              <p className="text-primary-start font-medium">Notificaciones</p>
            </NavLink>
            <NavLink
              to={"/profile"}
              className="relative flex justify-start items-center gap-4 top-[4.5rem] left-6 mb-[2rem]"
            >
              <IconProfileMini />
              <p className="text-primary-start font-medium relative left-[34px]">Mi Perfil</p>
            </NavLink>
            <NavLink
              to={"/scheduledsshifts"}
              className="relative flex justify-start items-center gap-4 top-[4.5rem] left-6 mb-[2rem] "
            >
              <IconTurnosMini />
              <p className="text-primary-start font-medium relative -left-[6px]">Mis Turnos</p>
            </NavLink>
            <NavLink
              to={"/notifications"}
              className="relative flex justify-start items-center gap-4 top-[4.5rem] left-6 mb-[2rem]"
            >
              <IconNotificationsMini />
              <p className="text-primary-start font-medium">Cerrar Sesion</p>
            </NavLink>
          </div>
        </nav>
      ) : (
        ""
      )}
    </div>
  );
};

export default NavBarDesktop;

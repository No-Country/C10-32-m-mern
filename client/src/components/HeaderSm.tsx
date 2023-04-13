import React from "react";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import Logo from "../icons/Logo";
import NavBar from "./NavBar";
import Profile from "../icons/IconProfile";
import { Link } from "react-router-dom";

const HeaderSm = () => {
  const date = new Date();
  const newDate = format(date, "EEEE d 'de' MMMM 'del' yyyy", { locale: es });

  return (
    <div className="fixed z-10 top-0 right-0 flex flex-col items-center justify-center w-full h-[10rem] bg-gradient-to-b from-primary-start to-primary-end">
      <div className="flex">
        <Logo />
        <div className="lg:hidden absolute right-[2rem] flex justify-center items-center gap-10">
          <Link to={"/login"} className="flex justify-center items-center gap-2">
            <Profile active={true} />
            <p className="text-white text-md">Ingresar</p>
          </Link>
          <input
            type="search"
            className="h-[2.5rem] border-[.5px] border-borders rounded-md pl-7"
          />
          <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none z-[99]">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="black"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"></path>
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute top-[6rem] font-semibold md:flex items-center justify-center mt-[2.5rem] h-[.1rem] w-screen bg-secondary"></div>
      <p className="absolute top-[8.5rem] text-white">{newDate}</p>
    </div>
  );
};

export default HeaderSm;

import React from "react";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import Logo from "../icons/Logo";

const HeaderSm = () => {
  const date = new Date();
  const newDate = format(date, "EEEE d 'de' MMMM 'del' yyyy", { locale: es });

  return (
    <div className="fixed z-10 top-0 right-0 flex flex-col items-center justify-center w-full h-[11rem] bg-gradient-to-b from-primary-start to-primary-end">
      <Logo/>
      <div className="lg:absolute lg:top-[7rem] font-semibold flex items-center justify-center mt-[2.5rem] h-[.1rem] w-screen bg-secondary"></div>
      <p className="lg:absolute lg:top-[9.5rem] text-white">{newDate}</p>
    </div>
  );
};

export default HeaderSm;

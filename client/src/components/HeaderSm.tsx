import React from "react";
import Logo from "../icons/Logo";

const HeaderSm = () => {
  return (
    <div className="fixed top-0 flex flex-col items-center justify-center w-full h-[11rem] bg-gradient-to-b from-primary-start to-primary-end">
      <Logo />
      <div className="lg:absolute lg:top-[7rem] font-semibold flex items-center justify-center mt-[2.5rem] h-[.1rem] w-screen bg-secondary"></div>
    </div>
  );
};

export default HeaderSm;

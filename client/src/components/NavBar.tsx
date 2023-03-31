import React, { useState } from "react";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
    console.log("state changed");
  };

  return (
    <div>
      <i
        className="fa-solid fa-bars absolute top-4 right-4 z-[99] cursor-pointer border p-1 rounded"
        onClick={handleNav}
      />
      {nav ? (
        <div className="fixed w-full h-screen bg-white/ flex flex-col justify-center items-center z-20">
          <a
            onClick={handleNav}
            href="#main"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadpw-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-100"
          >
            <span className="pl-4">Home</span>
          </a>
          <a
            onClick={handleNav}
            href="#work"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadpw-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-100"
          >
            <span className="pl-4">Work</span>
          </a>
          <a
            onClick={handleNav}
            href="#projects"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadpw-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-100"
          >
            <span className="pl-4">Projects</span>
          </a>
          <a
            onClick={handleNav}
            href="#main"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadpw-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-100"
          >
            <span className="pl-4">Resume</span>
          </a>
          <a
            onClick={handleNav}
            href="#contact"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadpw-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-100"
          >
            <span className="pl-4">Contact me</span>
          </a>
        </div>
      ) : (
        ""
      )}
      <div className="fixed top-[25%] left-4 z-10">
        <div
          className="flex flex-col"
          data-aos="flip-up"
        >
          <a
            href="#main"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-100"
          ></a>
          <a
            href="#work"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-100"
          ></a>
          <a
            href="#projects"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-100"
          ></a>
          <a
            href="#main"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-100"
          ></a>
          <a
            href="#contact"
            className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-100"
          ></a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

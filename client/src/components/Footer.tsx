import Logo from "../icons/Logo";

export default function Footer() {

  
    return (
      <div className="flex flex-col items-center  w-full bg-gradient-to-b from-primary-start to-primary-end px-28 py-6 lg:px-10 lg:py-5 lg:h-fit lg:justify-center">
        <Logo />
        <ul className="flex justify-between w-full text-sm text-white my-2 lg:flex-col lg:gap-4 lg:justify-center lg:items-center ">
            <li>
                <a className="font-inter " href="#">Sobre Nosotros</a>
            </li>
            <li>
                <a className="font-inter " href="#">Nuestros Especialistas</a>
            </li>
            <li>
                <a className="font-inter " href="#">Especialidades</a>
            </li>
            <li>
                <a className="font-inter " href="#">Turnos</a>
            </li>
            <li>
                <a className="font-inter " href="#">Preguntas Frecuentes</a>
            </li>
            <li>
                <a className="font-inter " href="#">Contáctanos</a>
            </li>
        </ul>
        <p className=" font-inter text-base text-white">© 2022 Flowbite, Inc. All rights reserved.</p>
      </div>
    );
  }
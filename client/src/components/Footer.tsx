import IconLogoFooter from "../icons/IconLogoFooter";

export default function Footer({ className }) {
  return (
    <footer className="flex flex-col items-center w-full bg-gradient-to-b from-primary-start to-primary-end px-28 py-6 lg:px-10 lg:py-5 lg:h-fit lg:justify-center">
      <div className="mb-8">
        <IconLogoFooter />
      </div>
      <ul
        className={` lg:flex-col lg:items-center flex flex-wrap gap-4 justify-between w-full text-sm text-white my-2 ${className}`}
      >
        <li>
          <a className="font-inter " href="#">
            Sobre Nosotros
          </a>
        </li>
        <li>
          <a className="font-inter " href="#">
            Nuestros Especialistas
          </a>
        </li>
        <li>
          <a className="font-inter " href="#">
            Especialidades
          </a>
        </li>
        <li>
          <a className="font-inter " href="#">
            Turnos
          </a>
        </li>
        <li>
          <a className="font-inter " href="#">
            Preguntas Frecuentes
          </a>
        </li>
        <li>
          <a className="font-inter " href="#">
            Contáctanos
          </a>
        </li>
      </ul>
      <p className=" font-inter text-base text-white">© 2022 Flowbite, Inc. All rights reserved.</p>
    </footer>
  );
}

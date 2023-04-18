import { format } from "date-fns";
import { es } from "date-fns/locale";
import Logo from "../icons/Logo";
import { Link, useNavigate } from "react-router-dom";
import Profile from "../icons/IconProfile";
import { useCustomSelector } from "../hooks/redux";
import NavBarDesktop from "./NavBarDesktop";
import Swal from "sweetalert2";
import NavBar from "./NavBar";

interface User {
  name: string;
  lastName: string;
}

export default function Header({ name, lastName }: User) {
  const { user } = useCustomSelector((state) => state);

  const date = new Date();
  const newDate = format(date, "EEEE d 'de' MMMM 'del' yyyy", { locale: es });

  const navigate = useNavigate();

  const handleLogin = () => {
    if (user.name != "") {
      Swal.fire({
        title: "Cerrar sesión?",
        icon: "question",
        showConfirmButton: true,
        confirmButtonText: "Si",
        showCancelButton: true,
        cancelButtonText: "No",
      }).then((res) => {
        if (res.isConfirmed) {
          //logout
          navigate("/login");
        }
      });
    } else {
      navigate("/login");
    }
  };

  return (
    <div className="fixed z-10 top-0 right-0 flex flex-col items-center justify-center w-full h-[12.5rem] bg-gradient-to-b from-primary-start to-primary-end">
      <div className="flex">
        <NavBar />
        <NavBarDesktop />
        <Logo />
        <div className="absolute lg:hidden right-[2rem] flex justify-center items-center gap-[2rem] z-[99]">
          <div className="right-[2rem] flex justify-center items-center gap-10">
            <div
              onClick={handleLogin}
              className="cursor-pointer flex justify-center items-center gap-2"
            >
              <Profile active={true} />
              <p className="text-white text-md">
                {user.name ? user.name : "Ingresa"}
              </p>
            </div>
          </div>
          <div className="h-[40px]">
            <input
              type="search"
              className=" h-[2.5rem] border-[.5px] border-borders rounded-md pl-7"
            />
            <svg
              aria-hidden="true"
              className="relative bottom-[1.8rem] left-[11.5rem] w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="black"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"></path>
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute top-[9rem] font-semibold flex items-center justify-center h-[2rem] w-screen bg-secondary">
        <h2>Hola, {user.name} ¿Estás listo para organizar tu agenda médica?</h2>
      </div>
      <p className="absolute top-[11rem] text-white">{newDate}</p>
    </div>
  );
}

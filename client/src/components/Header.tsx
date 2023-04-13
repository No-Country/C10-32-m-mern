import { format } from "date-fns";
import { es } from "date-fns/locale";
import Logo from "../icons/Logo";
import { Link } from "react-router-dom";
import Profile from "../icons/IconProfile";
import { useCustomSelector } from "../hooks/redux";

interface UserName {
  name: string;
  lastName: string;
}

export default function Header({ name, lastName }: UserName) {
  const { user } = useCustomSelector((state) => state);

  const date = new Date();
  const newDate = format(date, "EEEE d 'de' MMMM 'del' yyyy", { locale: es });

  return (
    <div className="fixed z-10 top-0 right-0 flex flex-col items-center justify-center w-full h-[12.5rem] bg-gradient-to-b from-primary-start to-primary-end">
      <div className="flex">
        <Logo />
        <Link
          to={"/login"}
          className="lg:hidden absolute right-[2rem] flex justify-center items-center gap-10"
        >
          <div className="flex justify-center items-center gap-2">
            <Profile active={true} />
            <p className="text-white text-md">Ingresar</p>
          </div>
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
        </Link>
      </div>
      <div className="absolute top-[9rem] font-semibold flex items-center justify-center h-[2rem] w-screen bg-secondary">
        <h2>
          Hola, {user.name} {user.secondname}
        </h2>
      </div>
      <p className="absolute top-[11rem] text-white">{newDate}</p>
    </div>
  );
}

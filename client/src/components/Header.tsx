import { format } from "date-fns";
import { es } from "date-fns/locale";
import Logo from "../icons/Logo";

export default function Header() {
  const user = {
    name: "Matias Barengo",
  };

  const date = new Date();
  const newDate = format(
    date,
    "EEEE d 'de' MMMM 'del' yyyy",
    { locale: es }
  );

  return (
    <div className="absolute top-0 right-0 flex flex-col items-center justify-center w-screen h-[13rem] bg-gradient-to-b from-primary-start to-primary-end">
      <Logo />
      <div className="lg:absolute lg:top-[7rem] font-semibold flex items-center justify-center mt-[2.5rem] h-[2rem] w-screen bg-secondary">
        <h2>Hola, {user.name}</h2>
      </div>
      <p className="lg:absolute lg:top-[11.5rem]">
        {newDate}
      </p>
    </div>
  );
}

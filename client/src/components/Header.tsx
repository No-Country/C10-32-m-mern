<<<<<<< HEAD
import Logo from "./Logo";

export default function Header() {
  const name = "Matias Barengo";
  const currentDate = new Date();
  const day = currentDate.getDate();
  const month = currentDate.toLocaleString("default", {
    month: "long",
  });
  const year = currentDate.getFullYear();

  const formattedDate = `${day} ${month} ${year}`;

  return (
    <div className="lg:relative flex items-center justify-center flex-col w-full lg:h-[15rem] bg-gradient-to-b from-primary-start to-primary-end">
      <Logo />
      <div className="h-[2rem] w-full font-semibold text-xl flex items-center justify-center bg-secondary absolute lg:bottom-[1.5rem]">
        Hola, {name}
      </div>
      <p className="lg:absolute bottom-[.05rem]">
        {formattedDate}
=======
import { format } from "date-fns";
import { es } from "date-fns/locale";
import Logo from "./Logo";

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
    <div className="flex flex-col items-center justify-center w-full h-[13rem] bg-gradient-to-b from-primary-start to-primary-end">
      <Logo />
      <div className="lg:absolute lg:top-[7rem] font-semibold flex items-center justify-center mt-[2.5rem] h-[2rem] w-screen bg-secondary">
        <h2>Hola, {user.name}</h2>
      </div>
      <p className="lg:absolute lg:top-[11.5rem]">
        {newDate}
>>>>>>> 124879462789ddb1f5ca86caf7cf3f1559b307e9
      </p>
    </div>
  );
}

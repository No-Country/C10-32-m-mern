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
      </p>
    </div>
  );
}

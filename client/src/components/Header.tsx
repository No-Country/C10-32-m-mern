import Logo from "./Logo";

export default function Header() {
  const user = {
    name: "Matias Barengo",
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-[13rem] bg-gradient-to-b from-primary-start to-primary-end">
      <Logo />
      <div>
        <h2>Hola, {user.name}</h2>
      </div>
    </div>
  );
}

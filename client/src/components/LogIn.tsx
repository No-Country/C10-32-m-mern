import React, { useState } from "react";
import ButtonLogIn from "./ButtonLogIn";
import EyeSlash from "./EyeSlash";
import Lock from "./Lock";
import MailIcon from "./MailIcon";

interface LogInProps {
  onLogIn: (email: string, password: string) => void;
}

const LogIn = ({ onLogIn }: LogInProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    onLogIn(email, password);
  };

  return (
    <form
      className="h-[100%] flex flex-col gap-5 items-center justify-between"
      onSubmit={handleSubmit}
    >
      <div>
        <label htmlFor="email" />
        <input
          placeholder="Correo Electronico"
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="relative border-[.5px] border-buttonBg rounded-md pl-7"
        />
        <MailIcon />
      </div>
      <div className="h-[2rem]">
        <label htmlFor="password" />
        <input
          placeholder="Contraseña"
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="relative border-[.5px] border-buttonBg rounded-md pl-7"
        />
        <Lock />
        <EyeSlash />
      </div>
      <ButtonLogIn>Iniciar Sesion</ButtonLogIn>
    </form>
  );
};

export default LogIn;

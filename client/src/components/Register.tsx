import React, { useState } from "react";
import { ButtonEyeSlash } from "./ButtonEyeSlash";

import ButtonLogIn from "./ButtonLogIn";
import IconDni from "../icons/IconDni";
import Lock from "../icons/Lock";
import MailIcon from "../icons/MailIcon";

interface RegisterProps {
  onRegister: (
    dni: number | string,
    email: string,
    password: string
  ) => void;
}

const Register = ({ onRegister }: RegisterProps) => {
  const [dni, setDni] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const [passwordButton, setPasswordButton] =
  //   useState(false);

  // const handlePasswordButton = () => {
  //   setPasswordButton(!passwordButton);
  //   if (passwordButton === false) return "password";
  //   return "text";
  // };

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();
    onRegister(dni, email, password);
  };

  return (
    <form
      className="h-[100%] mt-[3rem] flex flex-col items-center justify-between"
      onSubmit={handleSubmit}
    >
      <div className="w-full">
        <label htmlFor="dni" />
        <input
          placeholder="Numero de Documento"
          type="number"
          id="dni"
          value={dni}
          onChange={(e) => setDni(e.target.value)}
          required
          className="relative w-full border-[.5px] border-buttonBg rounded-md pl-7"
        />
        <IconDni />
      </div>
      <div className="w-full">
        <label htmlFor="email" />
        <input
          placeholder="Correo Electronico"
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="relative w-full border-[.5px] border-buttonBg rounded-md pl-7"
        />
        <MailIcon />
      </div>
      <div className="w-full">
        <label htmlFor="password" />
        <input
          placeholder="Contraseña"
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="relative w-full border-[.5px] border-buttonBg rounded-md pl-7"
        />
        <Lock />
        <ButtonEyeSlash />
      </div>
      <ButtonLogIn type="submit">Register</ButtonLogIn>
    </form>
  );
};

export default Register;

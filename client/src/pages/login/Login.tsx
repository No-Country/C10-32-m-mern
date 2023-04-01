import React, { SyntheticEvent, useState } from "react";
import { useNavigate } from "react-router";
import { ButtonEyeSlash } from "../../components/ButtonEyeSlash";
import ButtonLogIn from "../../components/ButtonLogIn";
import Lock from "../../icons/Lock";
import MailIcon from "../../icons/MailIcon";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const [redirection, setRedirection] = useState(false);

  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();
    await fetch("", {
      method: "POST",
      headers: { "Content-Type": "aplication/json" },
      credentials: "include",
      body: JSON.stringify({
        email,
        password,
      }),
    });
    setRedirection(true);
  };

  if (redirection) {
    navigate("/");
  }

  return (
    <form
      className="h-[100%] w-[19rem] mt-[3rem] flex flex-col items-center justify-center"
      onSubmit={submit}
    >
      <div className="w-full h-[50px]">
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
      <div className="w-full h-[50px]">
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
      <ButtonLogIn className="mt-[3rem]">
        Iniciar Sesion
      </ButtonLogIn>
    </form>
  );
};

export default Login;
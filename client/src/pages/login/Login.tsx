import React, { SyntheticEvent, useState } from "react";
import { useNavigate } from "react-router";
import { ButtonEyeSlash } from "../../components/ButtonEyeSlash";
import ButtonLogIn from "../../components/ButtonLogIn";
import HeaderSm from "../../components/HeaderSm";
import Lock from "../../icons/Lock";
import MailIcon from "../../icons/MailIcon";
import { useCustomSelector, useCustomDispatch } from "../../hooks/redux";
import { login } from "../../redux/slices/auth";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(true);

  const navigate = useNavigate();
  const [redirection, setRedirection] = useState(false);

  const {
    auth: { accessToken, isLoading },
  } = useCustomSelector((state) => state);
  const dispatch = useCustomDispatch();
  console.log(accessToken);

  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();
    dispatch(
      login({
        email,
        password,
      })
    );
    setRedirection(true);
  };

  if (redirection) {
    navigate("/");
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <HeaderSm />
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
            type={showPassword ? "password" : "text"}
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="relative w-full border-[.5px] border-buttonBg rounded-md pl-7"
          />
          <Lock />
          <ButtonEyeSlash
            className="left-[17.5rem] bottom-11"
            onClick={() => setShowPassword(!showPassword)}
          />
        </div>
        <ButtonLogIn className="mt-[3rem]">Iniciar Sesion</ButtonLogIn>
      </form>
      {isLoading && "cargando..."}
    </div>
  );
};

export default Login;

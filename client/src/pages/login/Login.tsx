import React, { SyntheticEvent, useState } from "react";
import { useNavigate } from "react-router";
import { ButtonEyeSlash } from "../../components/ButtonEyeSlash";
import ButtonLogIn from "../../components/ButtonLogIn";
import HeaderSm from "../../components/HeaderSm";
import Lock from "../../icons/Lock";
import MailIcon from "../../icons/MailIcon";
import { useCustomSelector, useCustomDispatch } from "../../hooks/redux";
import { login } from "../../redux/slices/auth";
import Logo from "../../icons/Logo";
import { AvatarGroup } from "../../icons/AvatarGroup";
import { Link } from "react-router-dom";

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
    dispatch(login({ email, password }));
    setRedirection(true);
  };

  if (redirection) {
    navigate("/home");
  }

  return (
    <div className="flex justify-center">
      <HeaderSm />
      <div className=" flex flex-col justify-between h-[32rem] w-[38rem] min-w-[38rem] bg-gradient-to-b from-primary-start to-primary-end rounded-l-xl p-[2.25rem] lg:hidden">
        <Logo />
        <h1 className="text-4xl text-white font-extrabold">
          La plataforma que te ayuda hacer tus consultas medicas de una forma más rapida.
        </h1>
        <p className="text-base text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A ullam ducimus asperiores modi
          repellat. Ipsa rem, facilis quia voluptatem enim numquam quos recusandae ipsum! Iste animi
          fuga reprehenderit id eius.
        </p>
        <div className="flex justify-start items-center gap-5">
          <AvatarGroup />
          <div className="w-[.5px] h-full bg-[#3F83F8]"></div>
          <p className="text-secondary">
            Rated Best Over <strong className="text-white">15.7k</strong> Reviews
          </p>
        </div>
      </div>
      <div className="w-[23rem] min-w-[22rem] sm:w-[22rem] h-[32rem] bg-white flex flex-col justify-center items-center mb-[5rem] rounded-r-xl lg:rounded-xl">
        <h2 className="text-xl">Ingresa a Citas Medicas a un Click</h2>
        <form
          className="h-fit w-[19rem] mt-[3rem] flex flex-col items-start justify-center gap"
          onSubmit={submit}
        >
          <div className="flex flex-col justify-start gap-10 w-full">
            <div className="w-full h-[50px] ">
              <p className="mb-2">Tu correo electronico</p>
              <label htmlFor="email" />
              <input
                placeholder="Correo Electronico"
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="relative w-full border-[.5px] h-[2.5rem] border-borders rounded-md pl-7"
              />
              <MailIcon />
            </div>
            <div className="w-full">
              <p className="mb-2">Contraseña</p>
              <label htmlFor="password" />
              <input
                placeholder="Contraseña"
                type={showPassword ? "password" : "text"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="relative w-full h-[2.5rem] border-[.5px] border-borders rounded-md pl-7"
              />
              <Lock />
              <ButtonEyeSlash
                className="left-[280px] bottom-[50px]"
                onClick={() => setShowPassword(!showPassword)}
              />
            </div>
            <div className="flex justify-end">
              <p className="text-primary-start text-xs pb-6">¿Olvidaste tu contraseña?</p>
            </div>
          </div>
          <ButtonLogIn className="bg-primary-start">INGRESAR</ButtonLogIn>
          <div>
            <p className="text-xs pt-4">
              ¿No tienes un cuenta?{" "}
              <Link to={"/register"} className="text-primary-start">
                Crea una cuenta
              </Link>
              .
            </p>
          </div>
        </form>
        {isLoading && "cargando..."}
      </div>
    </div>
  );
};

export default Login;

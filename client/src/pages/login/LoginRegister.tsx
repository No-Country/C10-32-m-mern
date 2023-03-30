import React, { useState } from "react";
import ButtonLogIn from "../../components/ButtonLogIn";
import LogIn from "../../components/LogIn";
import Register from "../../components/Register";
import ButtonBack from "../../components/ButtonBack";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface User {
  dni?: number | string;
  email: string;
  password: string;
}

const LoginRegister = () => {
  const [user, setUser] = useState<User | null>(null);

  const [logIn, setLogIn] = useState<boolean>(false);
  const [register, setRegister] = useState<boolean>(false);

  const handleLogIn = (email: string, password: string) => {
    // Aquí debería hacer una petición al servidor para autenticar al usuario
    // y almacenar el token de autenticación en el estado de la aplicación.
    setUser({ email, password });
  };

  const handleRegister = (
    dni: number | string,
    email: string,
    password: string
  ) => {
    // Aquí debería hacer una petición al servidor para crear un nuevo usuario
    // y almacenar el token de autenticación en el estado de la aplicación.
    setUser({ dni, email, password });
  };

  const handleRenderLogIn = () => {
    setLogIn(!logIn);
  };

  const handleRenderRegister = () => {
    setRegister(!register);
  };

  return (
    <div className="flex flex-col items-center justify-center max-w-[1024px]">
      {!logIn && !register && (
        <div className="flex flex-col gap-[5rem] justify-around items-center mt-[8rem]">
          <ButtonLogIn onClick={handleRenderLogIn}>
            Iniciar sesion
          </ButtonLogIn>
          <ButtonLogIn onClick={handleRenderRegister}>
            Registrarse
          </ButtonLogIn>
        </div>
      )}
      {logIn && (
        <div className="flex flex-col justify-center mt-[5rem]">
          <ButtonBack onClick={handleRenderLogIn} />
          <LogIn onLogIn={handleLogIn} />
        </div>
      )}
      {register && (
        <div className="flex flex-col justify-center mt-[5rem]">
          <ButtonBack onClick={handleRenderRegister} />
          <Register onRegister={handleRegister} />
        </div>
      )}
    </div>
  );
};

export default LoginRegister;

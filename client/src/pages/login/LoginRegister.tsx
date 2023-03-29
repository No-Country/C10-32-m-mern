import React, { useState } from "react";
import Header from "../../components/Header";
import LogIn from "../../components/LogIn";

interface User {
  email: string;
  password: string;
}

const LoginRegister = () => {
  const [user, setUser] = useState<User | null>(null);

  const handleLogIn = (email: string, password: string) => {
    // Aquí debería hacer una petición al servidor para autenticar al usuario
    // y almacenar el token de autenticación en el estado de la aplicación.
    setUser({ email, password });
  };

  const handleRegister = (
    email: string,
    password: string
  ) => {
    // Aquí debería hacer una petición al servidor para crear un nuevo usuario
    // y almacenar el token de autenticación en el estado de la aplicación.
    setUser({ email, password });
  };

  return (
    <div>
      <LogIn onLogIn={handleLogIn} />
      {/* <Register onRegister={handleRegister} /> */}
    </div>
  );
};

export default LoginRegister;

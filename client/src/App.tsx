import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
  } from "react-router-dom";
import Header from "./components/Header";
import React, { useState } from "react";
import Register from "./components/Register";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import { ProtectedRoute } from "./routes/protectedRouted/ProtectedRoutes";

interface User {
  email: string;
  password: string;
}

const App = () => {
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
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login onLogin={handleLogIn} />} />
            <Route path="/register" element={<Register onRegister={handleRegister}/>} />
        </Routes>
     
    </div>
  );
};

export default App;

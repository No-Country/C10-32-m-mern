
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Register from "./components/Register";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import { ProtectedRoute } from "./routes/protectedRouted/ProtectedRoutes";

const App = () => {

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  )
}

export default App




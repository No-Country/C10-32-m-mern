import React, { SyntheticEvent, useState } from "react";
import { useNavigate } from "react-router";
import { ButtonEyeSlash } from "../../components/ButtonEyeSlash";
import ButtonLogIn from "../../components/ButtonLogIn";
import HeaderSm from "../../components/HeaderSm";
import NavBar from "../../components/NavBar";

const Register = () => {
  const [name, setName] = useState("");
  const [secondname, setSecondname] = useState("");
  const [document, setDocument] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [obrasocialId, setObrasocialId] = useState("");

  const obraSocial = [
    {
      id: 1,
      name: "PAMI",
    },
    {
      id: 2,
      name: "IOMA",
    },
    {
      id: 3,
      name: "OSDE",
    },
    {
      id: 4,
      name: "OBRASOCIAL3",
    },
  ];

  const navigate = useNavigate();
  const [redirection, setRedirection] = useState(false);

  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();
    await fetch("http://localhost:3000/api/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        secondname,
        document,
        email,
        password,
        phone,
        obrasocialId,
      }),
    });
    setRedirection(true);
  };

  if (redirection) {
    navigate("/login");
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <HeaderSm />
      <form
        className="h-[100%] w-full flex flex-col gap-[1rem] items-center justify-between"
        onSubmit={submit}
      >
        <input
          className="relative w-full h-[2.5rem] border-[.5px] border-borders rounded-md pl-2"
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nombre"
        />
        <input
          className="relative w-full h-[2.5rem] border-[.5px] border-borders rounded-md pl-2"
          type="text"
          id="secondname"
          value={secondname}
          onChange={(e) => setSecondname(e.target.value)}
          placeholder="Apellido"
        />
        <input
          placeholder="Correo Electronico"
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="relative w-full h-[2.5rem] border-[.5px] border-borders rounded-md pl-2"
        />
        <input
          placeholder="Numero de Documento"
          type="number"
          id="document"
          value={document}
          onChange={(e) => setDocument(e.target.value)}
          required
          className="relative w-full h-[2.5rem] border-[.5px] border-borders rounded-md pl-2"
        />
        <input
          placeholder="Telefono de contacto"
          type="number"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
          className="relative w-full h-[2.5rem] border-[.5px] border-borders rounded-md pl-2"
        />
        <select
          name="marital-status"
          className="border border-borders rounded-md w-full h-[2.5rem] px-2"
        >
          <option>Seleccione su obra social</option>
          {obraSocial.map((name) => (
            <option value={name.id}>{name.name}</option>
          ))}
        </select>
        <div className="w-full h-[2.5rem]">
          <input
            placeholder="Contraseña"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="relative w-full h-[2.5rem] border-[.5px] border-borders rounded-md pl-2"
          />
          <ButtonEyeSlash />
        </div>
        <div className="w-full h-[2.5rem]">
          <input
            placeholder="Contraseña"
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="relative w-full h-[2.5rem] border-[.5px] border-borders rounded-md pl-2"
          />
          <ButtonEyeSlash />
        </div>
        <ButtonLogIn
          className="mt-[3rem]"
          type="submit"
        >
          Register
        </ButtonLogIn>
      </form>
    </div>
  );
};

export default Register;

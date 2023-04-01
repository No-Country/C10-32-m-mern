import React, { SyntheticEvent, useState } from "react";
import { useNavigate } from "react-router";
import { ButtonEyeSlash } from "../../components/ButtonEyeSlash";
import ButtonLogIn from "../../components/ButtonLogIn";
import IconDni from "../../icons/IconDni";
import Lock from "../../icons/Lock";
import MailIcon from "../../icons/MailIcon";

const Register = () => {
  const [document, setDocument] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const [redirection, setRedirection] = useState(false);

  const submit = async (e: SyntheticEvent) => {
    e.preventDefault();
    await fetch("http://localhost:3000/api/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: "name",
        secondname: "asd",
        document: "5678",
        email: "matiass@algo.com.ar",
        password: "1234",
        phone: "12345678",
        obrasocialId: 1,
      }),
    });
    setRedirection(true);
  };

  if (redirection) {
    navigate("/login");
  }

  return (
    <div>
      <form
        className="h-[100%] mt-[3rem] flex flex-col items-center justify-between"
        onSubmit={submit}
      >
        <div className="w-full h-[50px]">
          <label htmlFor="dni" />
          <input
            placeholder="Numero de Documento"
            type="number"
            id="document"
            value={document}
            onChange={(e) => setDocument(e.target.value)}
            required
            className="relative w-full border-[.5px] border-buttonBg rounded-md pl-7"
          />
          <IconDni />
        </div>
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

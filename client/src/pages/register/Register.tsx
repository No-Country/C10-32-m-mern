import { SyntheticEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router";

import { ButtonEyeSlash } from "../../components/ButtonEyeSlash";
import ButtonLogIn from "../../components/ButtonLogIn";
import HeaderSm from "../../components/HeaderSm";

import axios from "axios";
import Swal from "sweetalert2";

const Register = () => {
  // estados del usuario
  const [name, setName] = useState("");
  const [secondname, setSecondname] = useState("");
  const [document, setDocument] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [obrasocialeId, setObrasocialeId] = useState("");

  // estados para mostrar y ocultar contraseñas
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // estado con la lista de las obras sociales
  const [obraSocial, setObraSocial] = useState([]);

  // consumo del endpoint que trae la lista de las obras sociales
  useEffect(() => {
    axios
      .get("https://api-c1032mmern.onrender.com/api/obrasocial")
      .then((res) => setObraSocial(res.data));
  }, []);

  // estado para redireccionar la pagina hacia el login cuando el formulario quede validado
  const navigate = useNavigate();
  const [redirection, setRedirection] = useState(false);

  const submit = async (e: SyntheticEvent) => {
    if (password === confirmPassword) {
      if (name && secondname && document && email && password && phone && obrasocialeId) {
        e.preventDefault();
        await fetch("https://api-c1032mmern.onrender.com/api/signup", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name,
            secondname,
            document,
            email,
            password,
            phone,
            obrasocialeId,
          }),
        });
        setRedirection(true);
      } else {
        e.preventDefault();
        Swal.fire({
          icon: "error",
          title: "Quedan campos sin completar",
          showConfirmButton: false,
          timer: 3000,
        });
      }
    } else {
      e.preventDefault();
      Swal.fire({
        icon: "error",
        title: "Las contraseñas no coinciden",
        showConfirmButton: false,
        timer: 3000,
      });
    }
  };

  if (redirection) {
    navigate("/login");
  }

  return (
    <div>
      {/* <HeaderSm /> */}
      <div className="flex flex-col justify-center items-center">
        <div className="w-[23rem] bg-white p-4 mb-[3rem] rounded-xl">
          <h2 className="mb-[2rem] text-xl">Completa tus datos:</h2>
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
              className="relative  w-full h-[2.5rem] border-[.5px] border-borders rounded-md pl-2"
            />
            <input
              placeholder="Numero de Documento"
              type="number"
              id="document"
              value={document}
              onChange={(e) => setDocument(e.target.value)}
              required
              className="relative  w-full h-[2.5rem] border-[.5px] border-borders rounded-md pl-2"
            />
            <input
              placeholder="Telefono de contacto"
              type="number"
              id="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="relative  w-full h-[2.5rem] border-[.5px] border-borders rounded-md pl-2"
            />
            <select
              name="marital-status"
              className="border border-borders rounded-md  w-full h-[2.5rem] px-2"
              onChange={(e) => setObrasocialeId(e.target.value)}
            >
              <option>Seleccione su obra social</option>
              {obraSocial.map((name) => (
                <option value={name.id}>{name.name}</option>
              ))}
              <option>pami</option>
            </select>
            <div className=" w-full h-[2.5rem]">
              <input
                placeholder="Contraseña"
                type={showPassword ? "text" : "password"}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="relative  w-full h-[2.5rem] border-[.5px] border-borders rounded-md pl-2"
              />
              <ButtonEyeSlash
                className="bottom-8 left-[19.5rem]"
                onClick={() => setShowPassword(!showPassword)}
              />
            </div>
            <div className=" w-full h-[2.5rem]">
              <input
                placeholder=" Confirme su contraseña"
                type={showConfirmPassword ? "text" : "password"}
                id="confirm-password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="relative  w-full h-[2.5rem] border-[.5px] border-borders rounded-md pl-2"
              />
              <ButtonEyeSlash
                className="bottom-8 left-[19.5rem]"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              />
            </div>
            <ButtonLogIn className="mt-[3rem] bg-primary-start" type="submit">
              CREAR CUENTA
            </ButtonLogIn>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;

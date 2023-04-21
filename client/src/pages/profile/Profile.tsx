import { useEffect, useState } from "react";
import NavBar from "../../components/NavBar";
import IconProfile from "../../icons/IconProfile";
import IconPencil from "../../icons/IconPencil";
import ButtonAction from "../../components/ButtonAction";

import axios from "axios";

import { useCustomDispatch, useCustomSelector } from "../../hooks/redux";

import {
  setBirthDate,
  setCode,
  setCountry,
  setDocument,
  setEmail,
  setGender,
  setMaritalState,
  setName,
  setObrasocial,
  setObrasocialeId,
  setPhone,
  setProcessNumber,
  setSecondName,
} from "../../redux/slices/user";

const Profile = () => {
  // nuevos estados para modificar el estado global del usuario
  const [newName, setNewName] = useState("");
  const [newSecondname, setNewSecondname] = useState("");
  const [newDocument, setNewDocument] = useState("");
  const [newGender, setNewGender] = useState("");
  const [newProcessNumber, setNewProcessNumber] = useState("");
  const [newObraSocial, setNewObraSocial] = useState("");
  const [newObraSocialeId, setNewObraSocialeId] = useState(null);
  const [newBirthDate, setNewBirthDate] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newCode, setNewCode] = useState("");
  const [newPhone, setNewPhone] = useState("");
  const [newCountry, setNewCountry] = useState("");
  const [newMaritalState, setNewMaritalState] = useState("");

  const [fullData, setFullData] = useState<boolean | null>(null);

  const [obraSocial, setObraSocial] = useState([]);

  useEffect(() => {
    axios
      .get("https://api-c1032mmern.onrender.com/api/obrasocial")
      .then((res) => setObraSocial(res.data));
  }, []);

  const { user } = useCustomSelector((state) => state);
  const dispatch = useCustomDispatch();

  const handleForm = () => {
    setFullData(!fullData);
  };

  const submit = () => {
    setNewBirthDate(`${day}-${month}-${year}`);
    dispatch(setName(newName));
    dispatch(setSecondName(newSecondname));
    dispatch(setDocument(newDocument));
    dispatch(setGender(newGender));
    dispatch(setProcessNumber(newProcessNumber));
    dispatch(setObrasocial(newObraSocial));
    dispatch(setBirthDate(newBirthDate));
    dispatch(setObrasocialeId(newObraSocialeId));
    dispatch(setEmail(newEmail));
    dispatch(setCode(newCode));
    dispatch(setPhone(newPhone));
    dispatch(setCountry(newCountry));
    dispatch(setMaritalState(newMaritalState));
    setFullData(!fullData);
  };

  const [day, setDay] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  const days = [];
  for (let i = 1; i <= 31; i++) {
    days.push(i);
  }

  const months = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  const years = [];
  for (let i = 1900; i <= 2023; i++) {
    years.push(i);
  }

  return (
    <div className="flex justify-center items-center">
      <NavBar />
      <div className="max-w-[30rem] flex flex-col justify-center items-center mb-16">
        <div className="px-8 max-w-[30rem] w-[30rem] lg:w-[90vw] mt-10 flex justify-start items-center gap-8 bg-fontNav drop-shadow rounded-2xl h-[5rem]">
          <IconProfile active={true} />
          <p className="text-center text-[30px] text-white leading-6">Mi Perfil</p>
        </div>
        {fullData ? (
          <div className="max-w-[30rem] mx-8 min-w-0 mt-8 bg-white w-full h-fit border border-borders rounded">
            <div className="flex justify-between border-b border-b-borders p-2">
              <p>
                <strong>Datos</strong>
              </p>
              <button onClick={handleForm}>
                <IconPencil />
              </button>
            </div>
            <div className="px-8 py-4 mb-4">
              <p>
                Nombre: <strong>{user.name}</strong>
              </p>
              <p>
                Apellido: <strong>{user.secondname}</strong>
              </p>
              <p>
                DNI: <strong>{user.document}</strong>
              </p>
              <p>
                Género : <strong>{user.gender}</strong>
              </p>
              <p>
                Número de Tramite: <strong>{user.processNumber}</strong>
              </p>
              <p>
                Obra Social: <strong>{user.obraSocial}</strong>
              </p>
              <p>
                Fecha de Nacimietno: <strong>{user.birthDate}</strong>
              </p>
              <p>
                Email: <strong>{user.email}</strong>
              </p>
              <p>
                Cod. Área: <strong>{user.code}</strong>
              </p>
              <p>
                Celular: <strong>{user.phone}</strong>
              </p>
              <p>
                Nacionalidad: <strong>{user.country}</strong>
              </p>
              <p>
                Estado Civil: <strong>{user.maritalState}</strong>
              </p>
            </div>
          </div>
        ) : (
          <div className="flex flex-col justify-center items-center mb-16">
            <form
              action=""
              className="max-w-[30rem] w-[30rem] lg:w-[90vw] flex flex-col justify-center items gap-5 my-5"
            >
              <input
                onChange={(e) => setNewName(e.target.value)}
                className="border border-borders rounded-md h-[2.5rem] px-2"
                type="text"
                id="name"
                placeholder="Nombre"
              />
              <input
                onChange={(e) => setNewSecondname(e.target.value)}
                className="border border-borders rounded-md h-[2.5rem] px-2"
                type="text"
                id="lastName"
                placeholder="Apellido"
              />
              <div className="flex justify-between">
                <input
                  onChange={(e) => setNewDocument(e.target.value)}
                  className="border border-borders rounded-md w-[47.5%] h-[2.5rem] px-2"
                  type="number"
                  id="document"
                  placeholder="Dni"
                />
                <select
                  name="gender"
                  className="border border-borders rounded-md w-[47.5%] h-[2.5rem] px-2"
                  onChange={(e) => setNewGender(e.target.value)}
                >
                  <option defaultValue={"Genero"}>Genero</option>
                  <option value="Masculino">Masculino</option>
                  <option value="Femenino">Femenino</option>
                  <option value="Indefinido">No especificado</option>
                </select>
              </div>
              <input
                onChange={(e) => setNewProcessNumber(e.target.value)}
                className="border border-borders rounded-md h-[2.5rem] px-2"
                type="text"
                id="processNumber"
                placeholder="Número de trámite"
              />
              <select
                name="obraSocial"
                className="border border-borders rounded-md h-[2.5rem] px-2"
                onChange={(e) => setNewObraSocial(e.target.value)}
              >
                <option>Obra Social</option>
                {obraSocial.map((obrasocial) => (
                  <option value={obrasocial.name}>{obrasocial.name}</option>
                ))}
              </select>
              <div className="flex justify-between">
                <select
                  name="day"
                  className="w-[30%] border border-borders rounded-md h-[2.5rem] px-2"
                  onChange={(e) => setDay(e.target.value)}
                >
                  <option>Día</option>
                  {days.map((day) => (
                    <option value={day}>{day}</option>
                  ))}
                </select>
                <select
                  name="month"
                  className="w-[30%] border border-borders rounded-md h-[2.5rem] px-2"
                  onChange={(e) => setMonth(e.target.value)}
                >
                  <option>Mes</option>
                  {months.map((month) => (
                    <option value={month}>{month}</option>
                  ))}
                </select>
                <select
                  name="year"
                  className="w-[30%] border border-borders rounded-md h-[2.5rem] px-2"
                  onChange={(e) => setYear(e.target.value)}
                >
                  <option>Año</option>
                  {years.map((year) => (
                    <option value={year}>{year}</option>
                  ))}
                </select>
              </div>
              <input
                onChange={(e) => setNewEmail(e.target.value)}
                className="border border-borders rounded-md h-[2.5rem] px-2"
                type="email"
                id="email"
                placeholder="E-mail"
              />
              <div className="flex justify-between">
                <input
                  onChange={(e) => setNewCode(e.target.value)}
                  className="border border-borders rounded-md h-[2.5rem] px-2 w-[30%]"
                  type="number"
                  id="code"
                  placeholder="Cod. de Área"
                />
                <input
                  onChange={(e) => setNewPhone(e.target.value)}
                  className="border border-borders rounded-md h-[2.5rem] px-2 w-[65%]"
                  type="number"
                  id="phone"
                  placeholder="Celular"
                />
              </div>
              <input
                onChange={(e) => setNewCountry(e.target.value)}
                className="border border-borders rounded-md h-[2.5rem] px-2"
                type="text"
                id="country"
                placeholder="Nacionalidad"
              />
              <select
                name="marital-status"
                className="border border-borders rounded-md w-[30%] h-[2.5rem] px-2"
                onChange={(e) => setNewMaritalState(e.target.value)}
              >
                <option>Estado Civil</option>
                <option value="Soltero">Soltero/a</option>
                <option value="Casado">Casado/a</option>
                <option value="Concubinato">Concubinato</option>
                <option value="Separado">Separado/a</option>
                <option value="Divorciado">Divorciado/a</option>
                <option value="Viudo">Viudo/a</option>
              </select>
            </form>
            <ButtonAction type="submit" className="mt-2 bg-darkPurple text-white" onClick={submit}>
              ACEPTAR
            </ButtonAction>
          </div>
        )}
      </div>
    </div>
  );
};

export default Profile;

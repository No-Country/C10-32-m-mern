import { Link } from "react-router-dom";
import NavBar from "../../components/NavBar";
import iconCalendarHome from "../../assets/iconCalendarHome.svg";
import iconSpecialistHome from "../../assets/iconSpecialistHome.svg";
import iconHeartHome from "../../assets/iconHeartHome.svg";
import Header from "../../components/Header";
import { useEffect, useState } from "react";
import axios from "axios";
import FloatingChat from "../../components/FloatingChat";
import { useCustomSelector } from "../../hooks/redux";

const Home = () => {
  const [sedes, setSedes] = useState([]);

  const { user } = useCustomSelector((state) => state);

  useEffect(() => {
    axios.get("http://localhost:3000/api/sede").then((res) => {
      console.log(res.data);
      setSedes(res.data);
    });
  }, []);

  const handleChoose = (e: any) => {
    console.log(e.target.value);
  };

  return (
    <div className="flex-col justify-center">
      <NavBar />
      <Header name={user.name} lastName={user.secondname} />
      <select
        onChange={handleChoose}
        name="select"
        className="w-full mt-8 h-10 bg-transparent border-2 border-borders rounded-[3px] text-sm px-2"
      >
        <option>Selecciona la sede</option>
        {sedes.map((sede) => (
          <option value={sede.name}>{sede.name}</option>
        ))}
      </select>
      <div className="">
        <Link
          to="/appointment"
          className="flex justify-center items-center bg-lightGreen text-[#FFFFFF] rounded-2xl h-[100px] my-8 px-8"
        >
          <img src={iconCalendarHome} alt="" className="mr-4" />
          <p className="font-montserrat font-semibold text-center text-[22px] leading-6">
            Agenda tu turno
          </p>
        </Link>
        <Link
          to="/specialists"
          className="flex justify-center items-center bg-lightBlue text-[#FFFFFF] rounded-2xl h-[100px] my-8 px-8"
        >
          <img src={iconSpecialistHome} alt="" className="mr-4" />
          <p className="font-montserrat font-semibold text-center text-[22px] leading-6">
            Especialistas
          </p>
        </Link>
        <Link
          to="#"
          className="flex justify-center items-center bg-lightYellow text-[#FFFFFF] rounded-2xl h-[100px] my-8 px-8"
        >
          <img src={iconHeartHome} alt="" className="mr-4" />
          <p className="font-montserrat font-semibold text-center text-[22px] leading-6">
            Esp. Médicas
          </p>
        </Link>
      </div>
      <FloatingChat />
    </div>
  );
};

export default Home;

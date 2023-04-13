import ButtonAction from "../../components/ButtonAction";
import Map from "../../assets/Mapsicle Map.jpg";
import Bg from "../../assets/landingBg.svg";
import IconLanding from "../../icons/IconLanding";
import { Navigate, useNavigate } from "react-router";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div>
      <section className="py-6">
        {/* <IconLanding/> */}
        <div className="text-center">
          <p className="font-montserrat font-extrabold text-center text-[16px] leading-[50px] tracking-widest text-darkBlue py-4">
            AHORRA TU TIEMPO Y ORGANIZA TUS TURNOS MEDICOS DE FORMA FÁCIL Y RÁPIDA
          </p>
        </div>
        <div className="flex flex-col items-center py-7">
          <ButtonAction onClick={() => navigate("/register")} children="SOY USUARIO NUEVO" />
          <ButtonAction onClick={() => navigate("/login")} children="INICIAR SESION" />
        </div>
      </section>
      <section className="bg-gradient-to-b from-primary-start to-primary-end py-6">
        <h2 className="font-montserrat font-extrabold text-2xl text-textWhite">
          Nuestros especialistas
        </h2>
      </section>
      <section className="py-6 flex lg:flex-col justify-between">
        <div className="">
          <h2 className="font-montserrat font-extrabold text-2xl text-black py-4">
            Horarios de Atención
          </h2>
          <div>
            <div className="lg:flex lg:justify-between py-4">
              <p>Lunes a Viernes</p>
              <p>06:00 am - 20:30 pm</p>
            </div>
            <div className="lg:flex lg:justify-between py-4">
              <p>Sabados</p>
              <p>08:00 am - 16:00 pm</p>
            </div>
            <div className="lg:flex lg:justify-between py-4">
              <p>Domingos y Feriados</p>
              <p>Cerrado</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="font-montserrat font-extrabold text-2xl text-black py-4">
            Nuestras Sedes
          </h2>
          <div>
            <img src={Map} alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Landing;

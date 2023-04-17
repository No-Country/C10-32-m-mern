import ButtonAction from "../../components/ButtonAction";
import Map from "../../assets/Mapsicle Map.jpg";
import IconLanding from "../../icons/IconLanding";
import { useNavigate } from "react-router";
import GridLanding from "../../components/GridLanding";
import SpecialistLandingCard from "../../components/SpecialistLandingCard";
import Slider from "../../components/Slider";
import HeaderSm from "../../components/HeaderSm";
import SliderSpecialities from "../../components/SliderSpecilities";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div>
      <HeaderSm/>
      <section className="py-6">
        {/* <IconLanding/> */}
        <div className="text-center">
          <p className="font-montserrat font-extrabold text-center text-[16px] leading-[50px] tracking-widest text-darkBlue py-4">
            AHORRA TU TIEMPO Y ORGANIZA TUS TURNOS MEDICOS DE FORMA FÁCIL Y RÁPIDA
          </p>
        </div>
        <div className="flex flex-col items-center py-7">
          <ButtonAction className="my-3 bg-buttonBlue text-secondary " onClick={() => navigate("/register")} children="SOY USUARIO NUEVO" />
          <ButtonAction className="my-3 bg-buttonGray text-black" onClick={() => navigate("/login")} children="INICIAR SESION" />
        </div>
      </section>
      <section className="lg:hidden bg-gradient-to-b from-primary-start to-primary-end py-16">
        <h2 className="font-montserrat font-extrabold text-2xl text-textWhite">
          Nuestros especialistas
        </h2>
        <Slider/>
      </section>
      <section className="lg:hidden py-6">
        <h2 className="font-montserrat  font-extrabold text-2xl text-black">
          Nuestros Servicios Médicos
        </h2>
        
        <GridLanding/>
      </section>
      <section className="lg:hidden py-6 flex lg:flex-col justify-between">
        <div className="">
          <h2 className="font-montserrat font-extrabold text-2xl text-black py-4">
            Horarios de Atención
          </h2>
          <div>
            <div className="py-4 font-montserrat">
              <p>Lunes a viernes 06:00 am - 20:30 pm</p>
            </div>
            <div className="py-4 font-montserrat">
              <p>Sábados 08:00 am - 16:00 pm</p>

            </div>
            <div className="py-4 font-montserrat">
              <p>Domingos y feriados cerrado</p>

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

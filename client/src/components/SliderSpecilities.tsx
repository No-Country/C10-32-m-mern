import { A11y, Navigation, Pagination, Scrollbar } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Link } from "react-router-dom";

import GridCard from "./GridCard";
import Stethoscope from "../assets/gridDentist.svg";
import Dentist from "../assets/gridDentist.svg";
import Ophtalmology from "../assets/gridOphtalmology.svg";
import Cardiology from "../assets/gridCardiology.svg";
import Dermatology from "../assets/gridDermatology.svg";
import Pediatry from "../assets/gridPediatry.svg";
import Obstetriscm from "../assets/gridObstetriscm.svg";
import Neurology from "../assets/gridNeurology.svg";

const SliderSpecialities = () => {
  const infoSpecialities = [
    {
      id: 1,
      name: Stethoscope,
      title: "MEDICINA GENERAL",
    },
    {
      id: 2,
      name: Dentist,
      title: "ODONTOLOGÍA",
    },
    {
      id: 3,
      name: Ophtalmology,
      title: "OFTALMOLOGÍA",
    },
    {
      id: 4,
      name: Cardiology,
      title: "CARDIOLOGÍA",
    },
    {
      id: 5,
      name: Dermatology,
      title: "DERMATOLOGÍA",
    },
    {
      id: 6,
      name: Pediatry,
      title: "PEDIATRÍA",
    },
    {
      id: 7,
      name: Obstetriscm,
      title: "GINECOLOGÍA Y OBSTETRICIA",
    },
    {
      id: 8,
      name: Neurology,
      title: "NEUROLOGÍA",
    },
  ];

  return (
    <div className="relative max-[1024px] lg:flex hidden justify-center items-center">
      <Swiper
        style={{ position: "unset" }}
        slidesPerView={"auto"}
        className="w-[70vw] h-[110%] py-7"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={3}
        breakpoints={{
          425: {
            slidesPerView: 1,
            spaceBetween: 50,
          },
          767: {
            slidesPerView: 2,
            spaceBetween: 5,
          },
        }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <RightArrow />
        <LeftArrow />
        {infoSpecialities.map((item) => (
          <SwiperSlide
            key={item.id}
            className="flex justify-center items-center transition duration-300 hover:scale-110"
          >
            <GridCard source={item.name} title={item.title} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SliderSpecialities;

const RightArrow = () => {
  const swiper = useSwiper();
  return (
    <button className="absolute bottom-[6rem] right-4 z-10" onClick={() => swiper.slideNext()}>
      <svg
        width="48"
        height="49"
        viewBox="0 0 48 49"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect y="0.5" width="48" height="48" rx="24" fill="#FFFBFE" />
        <path
          d="M25.6446 24.4999L25.291 24.8534L20.0223 30.1222C20.0222 30.1222 20.0222 30.1222 20.0222 30.1222C19.816 30.3285 19.7002 30.6082 19.7002 30.8999C19.7002 31.1916 19.816 31.4713 20.0223 31.6776C20.2285 31.8837 20.5082 31.9995 20.7999 31.9995C21.0915 31.9995 21.3712 31.8837 21.5775 31.6775L25.6446 24.4999ZM25.6446 24.4999L25.291 24.1463L20.0256 18.8809C19.8269 18.6737 19.7171 18.3971 19.7196 18.11C19.7221 17.8216 19.8377 17.5457 20.0417 17.3417C20.2456 17.1378 20.5215 17.0221 20.81 17.0196C21.0971 17.0171 21.3737 17.1269 21.5809 17.3256L27.9774 23.7222C27.9775 23.7222 27.9775 23.7222 27.9775 23.7222C28.1837 23.9285 28.2995 24.2082 28.2995 24.4999C28.2995 24.7915 28.1837 25.0712 27.9775 25.2775C27.9775 25.2775 27.9775 25.2776 27.9774 25.2776L21.5776 31.6775L25.6446 24.4999Z"
          fill="#1A5EB6"
          stroke="#1A5EB6"
        />
      </svg>
    </button>
  );
};

const LeftArrow = () => {
  const swiper = useSwiper();
  return (
    <button
      className="rotate-180 flex justify-end absolute left-4 bottom-[6rem]"
      onClick={() => swiper.slidePrev()}
    >
      <svg
        width="48"
        height="49"
        viewBox="0 0 48 49"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect y="0.5" width="48" height="48" rx="24" fill="#FFFBFE" />
        <path
          d="M25.6446 24.4999L25.291 24.8534L20.0223 30.1222C20.0222 30.1222 20.0222 30.1222 20.0222 30.1222C19.816 30.3285 19.7002 30.6082 19.7002 30.8999C19.7002 31.1916 19.816 31.4713 20.0223 31.6776C20.2285 31.8837 20.5082 31.9995 20.7999 31.9995C21.0915 31.9995 21.3712 31.8837 21.5775 31.6775L25.6446 24.4999ZM25.6446 24.4999L25.291 24.1463L20.0256 18.8809C19.8269 18.6737 19.7171 18.3971 19.7196 18.11C19.7221 17.8216 19.8377 17.5457 20.0417 17.3417C20.2456 17.1378 20.5215 17.0221 20.81 17.0196C21.0971 17.0171 21.3737 17.1269 21.5809 17.3256L27.9774 23.7222C27.9775 23.7222 27.9775 23.7222 27.9775 23.7222C28.1837 23.9285 28.2995 24.2082 28.2995 24.4999C28.2995 24.7915 28.1837 25.0712 27.9775 25.2775C27.9775 25.2775 27.9775 25.2776 27.9774 25.2776L21.5776 31.6775L25.6446 24.4999Z"
          fill="#1A5EB6"
          stroke="#1A5EB6"
        />
      </svg>
    </button>
  );
};

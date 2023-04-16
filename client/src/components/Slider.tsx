import { A11y, Navigation, Pagination, Scrollbar } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Link } from "react-router-dom";

const Slider = () => {
  const infoDoctors = [
    {
      id: 1,
      name: "Daniel Perez",
      specialty: "Cardiologo",
      rating: 45,
      img: "https://randomuser.me/api/portraits/med/men/57.jpg",
    },
    {
      id: 2,
      name: "Miguel Sanchez",
      specialty: "Neurologo",
      rating: 62,
      img: "https://randomuser.me/api/portraits/med/men/86.jpg",
    },
    {
      id: 4,
      name: "Juan Marcuay",
      specialty: "Otorrino",
      rating: 80,
      img: "https://randomuser.me/api/portraits/med/men/99.jpg",
    },
    {
      id: 5,
      name: "Fernando Loayza",
      specialty: "Cardiologo",
      rating: 90,
      img: "https://randomuser.me/api/portraits/med/men/82.jpg",
    },
    {
      id: 6,
      name: "Fernaddo Loayza",
      specialty: "Cardiologo",
      rating: 90,
      img: "https://randomuser.me/api/portraits/med/men/85.jpg",
    },
    {
      id: 7,
      name: "Fernanssdo Loayza",
      specialty: "Cardiologo",
      rating: 90,
      img: "https://randomuser.me/api/portraits/med/men/77.jpg",
    },
  ];

  return (
    <div className="relative max-[1024px] flex justify-center items-center">
      <Swiper
        style={{ position: "unset" }}
        slidesPerView={"auto"}
        className="w-[70vw] h-[110%] mt-[7rem]"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={3}
        breakpoints={{
          639: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          767: {
            slidesPerView: 2,
            spaceBetween: 30,
          },
          1230: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1535: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
      >
        <RightArrow />
        <LeftArrow />
        {infoDoctors.map((doctor) => (
          <SwiperSlide
            key={doctor.id}
            className="flex justify-center items-center transition duration-300 hover:scale-110"
          >
            <Link
              to={"/"}
              className=" flex flex-col justify-around items-center bg-white border-[3px] border-[#1A60B980] w-[15rem] h-[15rem] rounded-2xl "
            >
              <img src={doctor.img} alt="" className="rounded-full h-28" />
              <p className="font-semibold">Dr. {doctor.name}</p>
              <div className="flex flex-col justify-center items-center text-borders">
                <p>{doctor.specialty}</p>
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;

const RightArrow = () => {
  const swiper = useSwiper();
  return (
    <button className="absolute bottom-[6rem] right-12 z-10" onClick={() => swiper.slideNext()}>
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
      className="rotate-180 flex justify-end absolute left-12 bottom-[6rem]"
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

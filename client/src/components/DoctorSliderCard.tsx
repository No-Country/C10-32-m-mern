import React, { useEffect, useState } from "react";
import axios from "axios";
import Profile from "../icons/IconProfile";
import DoctorPic from "../icons/DoctorPic";
import { Link } from "react-router-dom";

const DoctorSliderCard = () => {
  const [doctors, setDoctors] = useState<any>([]);

  useEffect(() => {
    axios.get("https://api-c1032mmern.onrender.com/api/specialistbfl?letter=a").then((res) => {
      console.log(res.data[0]);
      setDoctors(res.data[0]);
    });
  }, []);

  return "";
};

export default DoctorSliderCard;

{
  /* <Link
      to={"/"}
      className=" flex flex-col justify-around items-center bg-white w-[15rem] h-[15rem] rounded-2xl"
    >
      {infoDoctors.map((doctors) => (
        <div key={doctors.id}>
          <img src={doctors.img} alt="" />
          <p className="font-semibold">Dr. {doctors.name}</p>
          <div className="flex flex-col justify-center items-center text-borders">
            {doctors.specialty}
          </div>
        </div>
      ))}
    </Link> */
}

{
  /* <div className=" flex flex-col justify-around items-center bg-white w-[15rem] h-[15rem] rounded-2xl">
      <DoctorPic />
      <p className="font-semibold">Dr. {doctors.name}</p>
      <div>
        {doctors.specialties.map((speciality) => (
          <div key={speciality.id}>
            <p className="flex flex-col justify-center items-center text-borders">
              {speciality.description}
            </p>
          </div>
        ))}
      </div>
    </div> */
}

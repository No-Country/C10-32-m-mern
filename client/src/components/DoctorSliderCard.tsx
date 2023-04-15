import React, { useEffect, useState } from "react";
import axios from "axios";
import Profile from "../icons/IconProfile";

const DoctorSliderCard = () => {
  const [doctors, setDoctors] = useState<any>([]);

  useEffect(() => {
    axios.get("http://localhost:3000/api/specialistbfl?letter=a").then((res) => {
      console.log(res.data[0].name);
      setDoctors(res.data[0]);
    });
  }, []);

  return (
    <div className="relative top-40 flex flex-col bg-white w-96 h-[30rem]">{doctors.name}</div>
  );
};

export default DoctorSliderCard;

import React, { useEffect, useState } from "react";
import axios from "axios";
import Profile from "../icons/IconProfile";

const DoctorSliderCard = () => {
  const [doctors, setDoctors] = useState<any>([]);

  useEffect(() => {
    axios.get("http://localhost:3000/api/specialistbfl?letter=1").then((res) => {
      console.log(res.data[0].name);
      setDoctors(res.data[0]);
    });
  }, []);

  return <div className=" flex flex-col bg-white w-[15rem] h-[15rem]">{doctors.name}</div>;
};

export default DoctorSliderCard;

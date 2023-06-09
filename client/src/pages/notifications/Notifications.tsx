import React from "react";
import NavBar from "../../components/NavBar";
import NotificationsDetail from "../../components/NotificationsDetail";
import Notification from "../../icons/Notification";
import { useCustomSelector } from "../../hooks/redux";

const Notifications = () => {
  const {
    user: { name, secondname },
  } = useCustomSelector((state) => state);
  const data = {
    date: "2 de Abril",
    name,
    secondname,
    doctor: "Pedro Pascal",
    hour: "6:00 pm",
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <NavBar />
      <div className="max-w-[30rem] w-[30rem] lg:w-[90vw] mt-10 flex justify-start items-center gap-8 bg-fontNav drop-shadow rounded-2xl h-[5rem] px-8">
        <Notification active={true} />
        <p className="text-center text-[30px] text-white leading-6">Notificaciones</p>
      </div>
      <section className="w-full max-w-[30rem]">
        {<NotificationsDetail data={data} />}
        {<NotificationsDetail data={data} />}
        {<NotificationsDetail data={data} />}
        {<NotificationsDetail data={data} />}
      </section>
    </div>
  );
};

export default Notifications;

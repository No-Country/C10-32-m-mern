import React from "react";
import HeaderSm from "../../components/HeaderSm";
import NavBar from "../../components/NavBar";
import NotificationsDetail from "../../components/NotificationsDetail";
import Notification from "../../icons/Notification";

const Notifications = () => {
  const data = {
    date: "2 de Abril",
    name: "Pepito",
    doctor: "Pedro Pascal",
    hour: "6:00 pm",
  };

  return (
    <>
      <HeaderSm />
      <NavBar />
      <div className="w-full flex justify-start items-center gap-8 bg-fontNav drop-shadow rounded-2xl h-[5rem] px-8">
        <Notification active={true} />
        <p className="text-center text-[30px] text-white leading-6">
          Notificaciones
        </p>
      </div>
      <section>
        {<NotificationsDetail data={data} />}
        {<NotificationsDetail data={data} />}
        {<NotificationsDetail data={data} />}
        {<NotificationsDetail data={data} />}
      </section>
    </>
  );
};

export default Notifications;

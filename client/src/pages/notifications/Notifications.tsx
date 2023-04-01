import React from "react";
import { Link } from "react-router-dom";
import Notification from "../../icons/Notification";

const Notifications = () => {
  return (
    <>
      <div className="w-full flex justify-start items-center gap-8 bg-fontNav drop-shadow rounded-2xl h-[5rem] px-8">
        <Notification active={false} />
        <p className="text-center text-[30px] text-white leading-6">
          Notificaciones
        </p>
      </div>
      {}
    </>
  );
};

export default Notifications;

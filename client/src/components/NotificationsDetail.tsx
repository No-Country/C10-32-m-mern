import React from "react";

interface Data {
  data: {
    date: string;
    name: string;
    doctor: string;
    hour: string;
  };
}

const NotificationsDetail = ({ data }: Data) => {
  return (
    <div className="flex flex-col w-full h-full border border-borders rounded-xl bg-white my-8 overflow-hidden">
      <div className="flex justify-center items-center border-b border-borders w-full py-4">
        <p className="font-bold">
          Hola, {data.name}, recuerda tu cita de {data.date}
        </p>
      </div>
      <div className="flex flex-col justify-center items-start px-5 py-4">
        <p>Tienes cita con el Dr. {data.doctor}</p>
        <p className="font-bold">Hora: {data.hour}</p>
      </div>
    </div>
  );
};

export default NotificationsDetail;

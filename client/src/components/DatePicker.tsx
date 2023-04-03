import React from "react";

const DatePicker = () => {
  const days = [];
  for (let i = 1; i <= 31; i++) {
    days.push(i);
  }

  const months = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  const years = [];
  for (let i = 1900; i <= 2023; i++) {
    years.push(i);
  }

  return (
    <div className="flex justify-between">
      <select
        name="day"
        className="w-[30%] border border-borders rounded-md h-[2.5rem] px-2"
      >
        <option>Día</option>
        {days.map((day) => (
          <option value={day}>{day}</option>
        ))}
      </select>
      <select
        name="month"
        className="w-[30%] border border-borders rounded-md h-[2.5rem] px-2"
      >
        <option>Mes</option>
        {months.map((month) => (
          <option value={month}>{month}</option>
        ))}
      </select>
      <select
        name="year"
        className="w-[30%] border border-borders rounded-md h-[2.5rem] px-2"
      >
        <option>Año</option>
        {years.map((year) => (
          <option value={year}>{year}</option>
        ))}
      </select>
    </div>
  );
};

export default DatePicker;

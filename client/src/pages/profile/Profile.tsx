import React, { useState } from "react";
import HeaderSm from "../../components/HeaderSm";
import NavBar from "../../components/NavBar";
import IconProfile from "../../icons/IconProfile";
import DatePicker from "../../components/DatePicker";
import ButtonAction from "../../components/ButtonAction";

const Profile = () => {
  return (
    <div className="flex flex-col justify-center items-center mb-16">
      <HeaderSm />
      <NavBar />
      <div className="w-full flex justify-start items-center gap-8 bg-fontNav drop-shadow rounded-2xl h-[5rem] px-8">
        <IconProfile active={true} />
        <p className="text-center text-[30px] text-white leading-6">
          Mi Perfil
        </p>
      </div>
      <form
        action=""
        className="flex flex-col justify-center items gap-5 my-5"
      >
        <input
          className="border border-borders rounded-md h-[2.5rem] px-2"
          type="text"
          id="name"
          placeholder="Nombre"
        />
        <input
          className="border border-borders rounded-md h-[2.5rem] px-2"
          type="text"
          id="lastName"
          placeholder="Apellido"
        />
        <div className="flex justify-between">
          <input
            className="border border-borders rounded-md w-[47.5%] h-[2.5rem] px-2"
            type="number"
            id="document"
            placeholder="Dni"
          />
          <select
            name="gender"
            className="border border-borders rounded-md w-[47.5%] h-[2.5rem] px-2"
          >
            <option defaultValue={"Genero"}>Genero</option>
            <option value="male">Masculino</option>
            <option value="female">Femenino</option>
            <option value="undefined">
              No especificado
            </option>
          </select>
        </div>
        <input
          className="border border-borders rounded-md h-[2.5rem] px-2"
          type="text"
          id="processNumber"
          placeholder="Número de trámite"
        />
        <DatePicker />
        <input
          className="border border-borders rounded-md h-[2.5rem] px-2"
          type="email"
          id="email"
          placeholder="E-mail"
        />
        <div className="flex justify-between">
          <input
            className="border border-borders rounded-md h-[2.5rem] px-2 w-[30%]"
            type="number"
            id="code"
            placeholder="Cod. de Área"
          />
          <input
            className="border border-borders rounded-md h-[2.5rem] px-2 w-[65%]"
            type="number"
            id="phone"
            placeholder="Celular"
          />
        </div>
        <input
          className="border border-borders rounded-md h-[2.5rem] px-2"
          type="text"
          id="country"
          placeholder="Nacionalidad"
        />
        <select
          name="marital-status"
          className="border border-borders rounded-md w-[30%] h-[2.5rem] px-2"
        >
          <option>Estado Civil</option>
          <option value="single">Soltero/a</option>
          <option value="married">Casado/a</option>
          <option value="common-law">Concubinato</option>
          <option value="separate">Separado/a</option>
          <option value="divorced">Divorciado/a</option>
          <option value="widower">Viudo/a</option>
        </select>
      </form>
      <ButtonAction className="mt-2">ACEPTAR</ButtonAction>
    </div>
  );
};

export default Profile;

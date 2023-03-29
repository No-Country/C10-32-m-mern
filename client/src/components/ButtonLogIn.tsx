import React from "react";
interface Props {
  children: string;
}

const ButtonLogIn = ({ children }: Props) => {
  return (
    <button
      type="submit"
      className="bg-buttonBg text-secondary text-md w-[19rem] h-[2.5rem] rounded-md"
    >
      {children}
    </button>
  );
};

export default ButtonLogIn;

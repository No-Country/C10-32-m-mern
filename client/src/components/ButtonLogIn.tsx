import React, { FC } from "react";
interface IActionButton extends React.ComponentPropsWithoutRef<"button"> {}

export const ButtonLogIn: FC<IActionButton> = ({ children, className, ...buttonProps }) => {
  return (
    <button
      type="submit"
      className={`bg-buttonBg text-secondary text-md w-full h-[2.5rem] rounded-md ${className}`}
      {...buttonProps}
    >
      {children}
    </button>
  );
};

export default ButtonLogIn;

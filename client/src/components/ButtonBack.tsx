import React, { FC } from "react";
interface IActionButton
  extends React.ComponentPropsWithoutRef<"button"> {}

export const ButtonLogIn: FC<IActionButton> = ({
  children,
  className,
  ...buttonProps
}) => {
  return (
    <button
      type="submit"
      className={`bg-buttonBg text-secondary text-md w-[2.5rem] h-[2.5rem] rounded-md mt-[7rem]${className}`}
      {...buttonProps}
    >
      <i className="fa-solid fa-arrow-left"></i>
    </button>
  );
};

export default ButtonLogIn;

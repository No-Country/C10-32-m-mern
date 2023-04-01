import React, { FC } from "react";
interface IActionButton
  extends React.ComponentPropsWithoutRef<"button"> {}

export const ButtonRight: FC<IActionButton> = ({
  children,
  className,
  color,
  ...buttonProps
}) => {
  return (
    <button
      type="submit"
      className={`${color} text-secondary text-md w-[2.5rem] h-[2.5rem] rounded-full mt-[7rem]${className}`}
      {...buttonProps}
    >
      <i className="fa-solid fa-arrow-right"></i>
    </button>
  );
};

export default ButtonRight;

import React, { FC } from "react";
interface IActionButton
  extends React.ComponentPropsWithoutRef<"button"> {}

import RightArrow from "../assets/chevron-right.svg"

export const ButtonRight: FC<IActionButton> = ({
  children,
  className,
  color,
  ...buttonProps
}) => {
  return (
    <button
      type="submit"
      className={`${color} text-secondary text-md w-12 h-12 rounded-full mt-[7rem]${className}`}
      {...buttonProps}
    >
      <img src={RightArrow} alt="" className="m-auto" />
    </button>
  );
};

export default ButtonRight;

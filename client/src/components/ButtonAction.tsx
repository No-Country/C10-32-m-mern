import React, { FC } from "react";
interface IActionButton
  extends React.ComponentPropsWithoutRef<"button"> {}

export const ButtonAction: FC<IActionButton> = ({
  children,
  className,
  ...buttonProps
}) => {
  return (
    <button
      type="submit"
      className={`bg-actionButtonBg text-secondary text-md w-[15rem] h-[3rem] rounded-md ${className}`}
      {...buttonProps}
    >
      {children}
    </button>
  );
};

export default ButtonAction;
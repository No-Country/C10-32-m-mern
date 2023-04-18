import React, { FC } from "react";
interface IActionButton extends React.ComponentPropsWithoutRef<"button"> {}

export const ButtonEyeSlash: FC<IActionButton> = ({ children, className, ...buttonProps }) => {
  return (
    <button
      type="button"
      className={`relative w-[1rem] left-[18.5rem] bottom-[3rem] z-50 ${className}`}
      {...buttonProps}
    >
      <svg
        width="17"
        height="13"
        viewBox="0 0 17 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.502 12.4775C13.6925 12.6825 13.9841 12.6957 14.1746 12.4775C14.371 12.2526 14.3591 11.9352 14.1746 11.7301L4.08043 0.519786C3.89593 0.314759 3.58643 0.308145 3.40193 0.519786C3.22338 0.718199 3.22338 1.06211 3.40193 1.26053L13.502 12.4775ZM8.81207 0.89677C7.77051 0.89677 6.83013 1.09518 5.95523 1.41926L6.91941 2.49069C7.52054 2.3055 8.13952 2.19307 8.81207 2.19307C12.5974 2.19307 15.603 5.85048 15.603 6.6243C15.603 7.14678 14.6507 8.48938 13.133 9.54758L14.0258 10.5463C15.8946 9.18383 16.9838 7.40472 16.9838 6.6243C16.9838 5.26847 13.6984 0.89677 8.81207 0.89677ZM8.81207 12.3584C9.90719 12.3584 10.913 12.1468 11.8236 11.7963L10.8595 10.7248C10.2167 10.9365 9.53818 11.0621 8.81207 11.0621C5.01485 11.0621 2.00922 7.55022 2.00922 6.6243C2.00922 6.18117 3.01507 4.75921 4.62799 3.6481L3.71737 2.63619C1.7771 4.01186 0.628418 5.83726 0.628418 6.6243C0.628418 7.98012 3.9852 12.3584 8.81207 12.3584ZM11.7701 7.88753C11.9248 7.50393 12.0082 7.06742 12.0082 6.6243C12.0082 4.64678 10.5857 3.07931 8.81207 3.07931C8.4014 3.07931 8.02048 3.17191 7.66933 3.33064L11.7701 7.88753ZM8.81207 10.1759C9.2644 10.1759 9.69292 10.0568 10.0798 9.85182L5.89571 5.20233C5.70526 5.63223 5.60408 6.11504 5.60408 6.63091C5.61003 8.55552 7.02654 10.1759 8.81207 10.1759Z"
          fill="#313131"
        />
      </svg>
    </button>
  );
};

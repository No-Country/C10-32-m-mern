import React from "react";

interface IsActive {
  active: boolean;
}

const Notification = ({ active }: IsActive) => {
  return (
    <div>
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_194_4778)">
          <path
            d="M42 12C42 15.86 38.86 19 35 19C31.14 19 28 15.86 28 12C28 8.14001 31.14 5.00001 35 5.00001C38.86 5.00001 42 8.14001 42 12ZM38 22.58C37 22.84 36 23 35 23C32.0842 22.9947 29.2894 21.8341 27.2277 19.7723C25.1659 17.7106 24.0053 14.9158 24 12C24 9.06001 25.16 6.40001 27 4.42001C26.637 3.97509 26.1794 3.61675 25.6604 3.3711C25.1414 3.12545 24.5742 2.99867 24 3.00001C21.8 3.00001 20 4.80001 20 7.00001V7.58001C14.06 9.34001 10 14.8 10 21V33L6 37V39H42V37L38 33V22.58ZM24 45C26.22 45 28 43.22 28 41H20C20 42.0609 20.4214 43.0783 21.1716 43.8284C21.9217 44.5786 22.9391 45 24 45Z"
            fill={active ? "#ffffff" : "#2381F9"}
          />
        </g>
        <defs>
          <clipPath id="clip0_194_4778">
            <rect width="48" height="48" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default Notification;

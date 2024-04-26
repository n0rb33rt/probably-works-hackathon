import { NavLink } from "react-router-dom";

export default function ReturnButton() {
  return (
    <div className="w-12 h-12 bg-[#232323] rounded-full flex justify-center items-center">
      <NavLink to={".."} relative="path">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19 12H5M5 12L12 19M5 12L12 5"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </NavLink>
    </div>
  );
}

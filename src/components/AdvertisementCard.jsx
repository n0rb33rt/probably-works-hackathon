import present from "../assets/present.png";
import user from "../assets/user.png";
import budanov from "../assets/budanov.jpg";
import pes from "../assets/pes.jpeg";
import { NavLink } from "react-router-dom";
export default function AdvertisementCard({ category, advertismentName }) {
  category = "Волонтерство";
  advertismentName = "Плетення маскувальних сіток";
  return (
    <div className="bg-[#232323] h-[260px] w-full rounded-[35px] pt-4 px-2 flex flex-col justify-between">
      <div className="flex justify-between">
        <div className="flex items-center gap-2">
          <div className="bg-[#393939] rounded-full w-12 h-12 flex justify-center items-center ">
            <img src={present} alt="present" />
          </div>
          <p className="font-semibold text-[18px] text-white">{category}</p>
        </div>

        <div className="bg-[#3C3C3D] w-28 h-14 rounded-[20px] text-white text-[15px] px-3 py-1">
          12:00-17:25 <br />
          24.04
        </div>
      </div>
      <div className="flex">
        <img src={user} alt="user_icon" className="w-12 h-12 rounded-full " />
        <img
          src={pes}
          alt="user_icon"
          className="w-12 h-12 rounded-full z-10 relative right-2"
        />

        <img
          src={budanov}
          alt="user_icon"
          className="w-12 h-12 rounded-full z-20 relative right-4"
        />
      </div>
      <div className="flex justify-between pb-3">
        <p className="text-[22px] text-white font-medium w-2/3">
          {advertismentName}
        </p>
        <div className="bg-[#1A30A6] w-14 h-14 rounded-full flex justify-center items-center">
          <NavLink to={"/home/advId"}>
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.33334 22.6666L22.6667 9.33331M22.6667 9.33331H9.33334M22.6667 9.33331V22.6666"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </NavLink>
        </div>
      </div>
    </div>
  );
}

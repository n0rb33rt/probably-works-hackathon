import present from "../assets/present.png";
import doggy from "../assets/doggy.png";
import worker from "../assets/worker.png";
import { NavLink } from "react-router-dom";
export default function AdvertisementCard({
  category,
  requestName,
  requestId,
  eventDate,
  eventTime,
  price,
}) {
  let categoryString, icon;
  if (category === 1) {
    categoryString = "Волонтерство";
    icon = present;
  } else if (category === 2) {
    categoryString = "Петсітінг";
    icon = doggy;
  } else if (category === 3) {
    categoryString = "Найм";
    icon = worker;
  }
  return (
      <div className="bg-[#232323] h-[290px] w-full rounded-[35px] pt-4 px-2 flex flex-col justify-between">
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <div className="bg-[#393939] rounded-full w-12 h-12 flex justify-center items-center ">
              <img src={icon} alt="icon"/>
            </div>
            <div className="font-semibold text-[18px] text-white w-10">
              {categoryString}
            </div>
          </div>

          <div className="bg-[#3C3C3D] w-28 h-14 rounded-[20px] text-white text-[15px] px-3 py-1">
            {eventTime} <br/>
            {eventDate}
          </div>
        </div>
        <div className="font-semibold text-[28px] flex gap-2 items-center">
          {price === 0 ? "Безплатно" : ${price}₴}
          <p className="font-thin text-[14px]">{price !== 0 && "в годину"}</p>
        </div>
        <div className="flex justify-between mb-8">
          <div className="text-[18px] text-white font-Outfit text-left h-10 w-4/5 break-words ">
            {requestName}
          </div>
          <div className="bg-[#1A30A6] w-14 h-14 rounded-full flex justify-center items-center ">
            <NavLink to={`/requests/${requestId}`}>
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

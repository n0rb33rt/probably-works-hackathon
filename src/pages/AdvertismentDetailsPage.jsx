/* eslint-disable no-unused-vars */
import { useLoaderData } from "react-router-dom";

import ReturnButton from "../components/ReturnButton";

import prutyla from "../assets/prutyla.jpg";
import zhadan from "../assets/zhadan.jpg";
import sternenko from "../assets/sternenko.jpg";
import present from "../assets/present.png";
import doggy from "../assets/doggy.png";
import worker from "../assets/worker.png";

export default function AdvertismentDetailsPage() {
  const requestData = useLoaderData().items[0];
  let categoryString, icon;
  if (requestData.category === 1) {
    categoryString = "Волонтерство";
    icon = present;
  } else if (requestData.category === 2) {
    categoryString = "Петсітінг";
    icon = doggy;
  } else if (requestData.category === 3) {
    categoryString = "Найм";
    icon = worker;
  }
  return (
    <div>
      <header>
        <div className="flex items-center gap-2 w-full">
          <ReturnButton />
          <p className="text-[20px] w-4/5">{requestData.title}</p>
        </div>
      </header>
      <main className="pt-8 flex flex-col gap-10">
        <div className="flex items-end ">
          <img
            src={prutyla}
            alt="user_icon"
            className="w-12 h-12 rounded-full "
          />
          <img
            src={sternenko}
            alt="user_icon"
            className="w-12 h-12 rounded-full z-10 relative right-2"
          />

          <img
            src={zhadan}
            alt="user_icon"
            className="w-12 h-12 rounded-full z-20 relative right-4"
          />
          <p className="text-[#A0A0A0] text-[10px]">Людей, які беруть участь</p>
        </div>
        <div className="text-[36px]">
          <p>{requestData.eventTime}</p>
          <div className="ml-28 flex items-center gap-2">
            <p className="font-thin ">{requestData.eventDate}</p>
            <p className="text-[#A7A7A7] font-thin text-[15px] break-words">
              {requestData.address}
            </p>
          </div>
        </div>
        <div>
          <p className="font-semibold text-[14px]">Опис</p>
          <p className="font-light mt-4">{requestData.description}</p>
        </div>
        <div className="font-semibold">
          <p className=" text-[14px]">Категорія</p>
          <div className="flex gap-4 mt-6">
            <div className="bg-[#1E1E1E] min-w-24 px-2 rounded-[60px] h-16 flex justify-center items-center gap-1 ">
              <img src={icon} alt="present" className="" />
              <p>{categoryString}</p>
            </div>
          </div>
        </div>
        <div className="bg-[#1A30A6] w-11/12 mx-auto h-16 rounded-[60px] mb-10 text-center py-5 text-[12px] font-semibold">
          <a href={requestData.contactPersonTelegram}>Написати</a>
        </div>
      </main>
    </div>
  );
}
export async function loader({ request, params }) {
  console.log(params.requestId);
  const response = await fetch(
    "https://testtmpss.azurewebsites.net/api/v1/support/requests",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("accessToken"),
      },
      body: JSON.stringify({
        searchQuery: "",
        orderBy: 0,
        orderField: "",
        page: 1,
        amountOnPage: 0,
        id: params.requestId,
      }),
    }
  );
  console.log(response);
  return response;
}

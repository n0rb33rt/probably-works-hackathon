import NavBar from "../components/NavBar";
import AdvertisementCard from "../components/AdvertisementCard";
import SettingsButton from "../components/SettingsButton";
import another_helmet from "../assets/another-helmet.png";
import medkit from "../assets/medkit.png";
import prize from "../assets/prize.png";
import car from "../assets/car.png";
import user from "../assets/user.png";

import { json, useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ProfilePage() {
  const userData = useLoaderData().parsedRequests;
  const requests = useLoaderData().parsedRequests;

  console.log(userData.id);

  async function fethUserRequests() {
    const response = await fetch(
      "https://testtmpss.azurewebsites.net/api/v1/support/requests",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("accessToken"),
        },
        body: JSON.stringify({
          page: 1,
          amountOnPage: 10,
          userId: userData.id,
        }),
      }
    );
    const parsedRes = await response.json();
    console.log(parsedRes);
    return parsedRes.items;
  }

  return (
    <>
      <div className="flex flex-col items-center text-[16px] gap-2">
        <div className="flex justify-center w-full">
          <div className="ml-16 w-5/6 flex">
            <img
              src={userData.imageBase64 ?? user}
              alt="user icon"
              className="relative mx-auto rounded-full w-32 h-32"
            />
            <SettingsButton />
          </div>
        </div>
        <p className="font-semibold">{userData.name}</p>
        <p className="text-[#D6D6D6]">
          {userData.description ?? "Місце для коротенького опису"}
        </p>
      </div>
      <div className="mt-4">
        <p className="text-[14px] font-semibold">Досягнення</p>
        <div className="bg-[#232323] flex py-4 min-h-28 rounded-[26px] items-center gap-1 px-4 mt-2 flex-wrap">
          <div className="w-16 h-16 bg-[#393939] rounded-full flex items-center justify-center">
            <img src={another_helmet} alt="another_helmet" />
          </div>
          <div className="w-16 h-16 bg-[#393939] rounded-full flex items-center justify-center">
            <img src={medkit} alt="medkit" />
          </div>
          <div className="w-16 h-16 bg-[#393939] rounded-full flex items-center justify-center">
            <img src={car} alt="car" />
          </div>
          <div className="w-16 h-16 bg-[#393939] rounded-full flex items-center justify-center">
            <img src={prize} alt="prize" />
          </div>
        </div>
      </div>
      <div className="mt-4">
        <p className="text-[14px] font-semibold">Запит(и)</p>
        <div className="mt-4 flex flex-col gap-5">
          {requests === undefined && (
            <div className="bg-[#232323] h-[290px] w-full rounded-[35px] pt-4 px-2 flex flex-col items-center justify-center">
              <svg
                width="103"
                height="103"
                viewBox="0 0 103 103"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M68.6666 68.6666C68.6666 68.6666 62.2291 60.0833 51.4999 60.0833C40.7708 60.0833 34.3333 68.6666 34.3333 68.6666M64.3749 38.625H64.4178M38.6249 38.625H38.6678M94.4166 51.5C94.4166 75.2022 75.2021 94.4166 51.4999 94.4166C27.7977 94.4166 8.58325 75.2022 8.58325 51.5C8.58325 27.7978 27.7977 8.58331 51.4999 8.58331C75.2021 8.58331 94.4166 27.7978 94.4166 51.5ZM66.5207 38.625C66.5207 39.8101 65.56 40.7708 64.3749 40.7708C63.1898 40.7708 62.2291 39.8101 62.2291 38.625C62.2291 37.4399 63.1898 36.4791 64.3749 36.4791C65.56 36.4791 66.5207 37.4399 66.5207 38.625ZM40.7708 38.625C40.7708 39.8101 39.81 40.7708 38.6249 40.7708C37.4398 40.7708 36.4791 39.8101 36.4791 38.625C36.4791 37.4399 37.4398 36.4791 38.6249 36.4791C39.81 36.4791 40.7708 37.4399 40.7708 38.625Z"
                  stroke="#A0A0A0"
                  strokeWidth="6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className="font-Outfit text-center text-[15px] w-4/5 mt-4">
                У Вас ще немає запитів Ви можете створити їх у вкладці “Запити”.
              </p>
            </div>
          )}
          {requests !== undefined &&
            requests.map((request) => (
              <AdvertisementCard
                key={request.id}
                category={request.category}
                requestName={request.title}
                requestId={request.id}
                eventDate={request.eventDate}
                eventTime={request.eventTime}
                price={request.price}
              />
            ))}
        </div>
      </div>
      <NavBar />
    </>
  );
}

export async function loader() {
  const response = await fetch(
    "https://testtmpss.azurewebsites.net/api/v1/user/info",
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("accessToken"),
      },
    }
  );
  if (!response.ok) {
    throw json({ message: "Couldn't fetch the data" });
  }

  const parsedRes = await response.json();

  const fetchedRequests = await fetch(
    "https://testtmpss.azurewebsites.net/api/v1/support/requests",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("accessToken"),
      },
      body: JSON.stringify({
        page: 1,
        amountOnPage: 10,
        userId: parsedRes.id,
      }),
    }
  );
  const parsedRequests = await fetchedRequests.json();

  return { parsedRes, parsedRequests: parsedRequests.items };
}

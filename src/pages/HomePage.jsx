/* eslint-disable react-refresh/only-export-components */
import { json, useLoaderData } from "react-router-dom";
import user from "../assets/user.png";
import AdvertisementCard from "../components/AdvertisementCard";
import NavBar from "../components/NavBar";
import Notification from "../components/Notification";

export default function HomePage() {
  const { userInfo, requests } = useLoaderData();

  return (
    <>
      <header className="flex justify-between">
        <div>
          <img
            src={userInfo.imageBase64 ?? user}
            alt="user_icon"
            className="w-16 h-16 rounded-full "
          />
          <p className="text-[#D6D6D6] text-[18px] pt-3">
            Привіт, {userInfo.name}
          </p>
          <p className="text-white text-[22px]">
            Допомога - це вияв <br />
            людяності і відповідальності.
          </p>
        </div>
      </header>
      <main className="mt-[24px] flex flex-col gap-5">
        {requests?.map((request) => (
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
        <NavBar />
      </main>
    </>
  );
}

export async function loader() {
  const userInfoResponse = await fetch(
    "https://testtmpss.azurewebsites.net/api/v1/user/info",
    {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("accessToken"),
      },
    }
  );
  if (!userInfoResponse.ok) {
    throw new Response("Error fetching user data", { status: 400 });
  }
  const userInfo = await userInfoResponse.json(); // Convert response to JSON

  const requestsResponse = await fetch(
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
      }),
    }
  );
  if (!requestsResponse.ok) {
    throw json({ message: "Couldn't send request" });
  }
  const requests = await requestsResponse.json(); // Convert response to JSON

  return { userInfo, requests: requests.items };
}

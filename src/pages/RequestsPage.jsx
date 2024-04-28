/* eslint-disable no-unused-vars */
import AdvertisementCard from "../components/AdvertisementCard";
import { NavLink, json, useLoaderData } from "react-router-dom";
import NavBar from "../components/NavBar";

export default function RequestsPage() {
  const requests = useLoaderData().items;

  return (
    <>
      <header className="flex gap-2">
        <NavLink
          to="/requests/create-request"
          className="w-12 h-12 bg-[#1A30A6] rounded-full flex justify-center items-center"
        >
          <div className="w-4 bg-white h-[1px]"></div>
          <div className="w-[1px] bg-white h-4 relative right-2"></div>
        </NavLink>
        <NavLink
          to="/requests/filter"
          className="w-12 h-12 bg-[#1E1E1E] rounded-full flex flex-col gap-1 justify-center items-center"
        >
          <div className="w-5 bg-white h-[2px]"></div>
          <div className="w-3 bg-white h-[2px]"></div>
          <div className="w-2 bg-white h-[2px]"></div>
        </NavLink>
      </header>
      <main className="mt-[24px] flex flex-col gap-5">
        {requests === undefined && <p>Empty</p>}
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
        <NavBar />
      </main>
    </>
  );
}
export async function loader({ request, params }) {
  const searchParams = { page: 1, amountOnPage: 10 };

  if (params.category) {
    searchParams.category = +params.category;
  }
  console.log(searchParams);
  const response = await fetch(
    "https://testtmpss.azurewebsites.net/api/v1/support/requests",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("accessToken"),
      },
      body: JSON.stringify(searchParams),
    }
  );
  if (!response.ok) {
    throw json({ message: "Couldn't fetch the data" });
  }

  return response;
}

/* eslint-disable react-refresh/only-export-components */
import { redirect } from "react-router-dom";
import user from "../assets/user.png";
import AdvertisementCard from "../components/AdvertisementCard";
import NavBar from "../components/NavBar";
import Notification from "../components/Notification";

export default function HomePage() {
  return (
    <>
      <header className="flex justify-between">
        <div>
          <img src={user} alt="user_icon" className="w-16 h-16 rounded-full " />
          <p className="text-[#D6D6D6] text-[18px] pt-3">Привіт, user</p>
          <p className="text-white text-[22px]">
            Допомога - це вияв <br />
            людяності і відповідальності.
          </p>
        </div>
        <Notification />
      </header>
      <main className="mt-[24px] flex flex-col gap-5">
        <AdvertisementCard />
        <AdvertisementCard />
        <AdvertisementCard />
        <AdvertisementCard />
        <AdvertisementCard />
        <NavBar />
      </main>
    </>
  );
}
export async function loader() {
  const responseData = await fetch(
    "https://testtmpss.azurewebsites.net/api/v1/support/requests",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        searchQuery: "",
        orderBy: 0,
        orderField: "",
        page: 0,
        amountOnPage: 0,
        id: 0,
      }),
    }
  );

  const parsedRes = await responseData.json();

  console.log(parsedRes);

  return redirect("/home");
}

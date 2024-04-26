import AdvertisementCard from "../components/AdvertisementCard";
import { NavLink } from "react-router-dom";
import NavBar from "../components/NavBar";

export default function RequestsPage() {
  return (
    <>
      <header className="flex gap-2">
        <NavLink
          to={"/requests/create-request"}
          className="w-12 h-12 bg-[#1A30A6] rounded-full flex justify-center items-center"
        >
          <div className="w-4 bg-white h-[1px]"></div>
          <div className="w-[1px] bg-white h-4 relative right-2"></div>
        </NavLink>
        <NavLink
          to={"/filter"}
          className="w-12 h-12 bg-[#1E1E1E] rounded-full flex flex-col gap-1 justify-center items-center"
        >
          <div className="w-5 bg-white h-[2px]"></div>
          <div className="w-3 bg-white h-[2px]"></div>
          <div className="w-2 bg-white h-[2px]"></div>
        </NavLink>
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

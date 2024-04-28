import NavBar from "../components/NavBar";
import AdvertisementCard from "../components/AdvertisementCard";

import user from "../assets/user.png";
import another_helmet from "../assets/another-helmet.png";
import medkit from "../assets/medkit.png";
import prize from "../assets/prize.png";
import car from "../assets/car.png";
import SettingsButton from "../components/SettingsButton.jsx";

export default function ProfilePage() {
  return (
    <>
        <div className="flex flex-col items-center text-[16px] gap-2">
          <div className="flex justify-center w-full">
            <div className="ml-14 w-4/5 flex">
              <img src={user} alt="user icon" className="relative mx-auto rounded-full w-32 h-32" />
              <SettingsButton />
            </div>
          </div>
          <p className="font-semibold">Антон</p>
          <p className="text-[#D6D6D6]">Місце для короткого опису</p>
        </div>
      <div className="mt-4">
        <p className="text-[14px] font-semibold">Досягнення</p>
        <div className="bg-[#232323] flex h-28 rounded-[26px] items-center gap-1 px-4 mt-2">
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
          <AdvertisementCard />
          <AdvertisementCard />
          <AdvertisementCard />
          <AdvertisementCard />
          <AdvertisementCard />
          <AdvertisementCard />
          <AdvertisementCard />
        </div>
      </div>
      <NavBar />
    </>
  );
}

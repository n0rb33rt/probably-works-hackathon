import user from "../assets/user.webp";
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

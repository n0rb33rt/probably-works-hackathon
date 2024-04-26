import ReturnButton from "../components/ReturnButton";
import user from "../assets/user.webp";
import budanov from "../assets/budanov.jpg";
import pes from "../assets/pes.jpeg";
import present from "../assets/present.png";
import helmet from "../assets/helmet.png";

export default function AdvertismentDetailsPage() {
  return (
    <div>
      <header>
        <div className="flex items-center gap-10">
          <ReturnButton />
          <p className="text-[22px]">
            Плетення <br /> маскувальних сіток
          </p>
        </div>
      </header>
      <main className="pt-8 flex flex-col gap-10">
        <div className="flex ">
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
        <div className="text-[36px]">
          <p>12:00-17:25</p>
          <div className="ml-16 flex items-center gap-2">
            <p className="font-thin ">24.04-2024</p>
            <p className="text-[#A7A7A7] font-thin text-[15px]">
              Площа ринок, 12 <br />
              Львів, Україна
            </p>
          </div>
        </div>
        <div>
          <p className="font-semibold text-[14px]">Опис</p>
          <p className="font-light mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            nihil repudiandae culpa ipsum unde laboriosam, minus odio?
            Laudantium adipisci nulla debitis facilis placeat ad? Ratione
            cupiditate alias possimus culpa maxime!
          </p>
        </div>
        <div className="font-semibold">
          <p className=" text-[14px]">Категорії</p>
          <div className="flex gap-4 mt-6">
            <div className="bg-[#1E1E1E] min-w-24 px-2 rounded-[60px] h-16 flex justify-center items-center gap-1 ">
              <img src={present} alt="present" className="" />
              <p>Волонтерство</p>
            </div>
            <div className="bg-[#1E1E1E] min-w-24 h-16 rounded-[60px] flex justify-center items-center gap-1 ">
              <img src={helmet} alt="helmet" />
              <p>ЗСУ</p>
            </div>
          </div>
        </div>
        <button className="bg-[#1A30A6] w-11/12 mx-auto h-16 rounded-[60px] mb-10">
          Допомогти
        </button>
      </main>
    </div>
  );
}

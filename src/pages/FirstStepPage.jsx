import { Link } from "react-router-dom";
import ReturnButton from "../components/ReturnButton";

export default function FirstStepPage() {
  return (
    <div className="flex flex-col justify-between h-[85vh] w-full">
      <div className="flex items-center gap-20">
        <ReturnButton />
        <p className="text-[22px]">Перший крок</p>
      </div>
      <div>
        <p className="text-[15px] text-center">
          Для початку оберіть чи Ви будете надавати допомогу, чи Ви потребуєте
          допомогу
        </p>
        <div className="flex flex-col items-center mt-8 gap-5">
          <Link
            to="/first-step/sign-up?mode=helper"
            className="bg-white text-black  text-[12px] font-semibold h-[60px] text-center py-5 rounded-[60px] w-full"
          >
            Надаю допомогу
          </Link>
          <Link
            to="/first-step/sign-up?mode=need-help"
            className="bg-[#1A30A6] text-white text-[12px] font-semibold h-[60px] text-center py-5 rounded-[60px] w-full"
          >
            Потребую допомогу
          </Link>
        </div>
      </div>
    </div>
  );
}

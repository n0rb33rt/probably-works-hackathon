import { useState } from "react";
import { Link } from "react-router-dom";
import ReturnButton from "../components/ReturnButton";

import present from "../assets/present-emoji.png";
import doggy from "../assets/doggy.png";
import worker from "../assets/worker.png";

export default function RequestFilterPage() {
  const [searchCategory, setSearchCategory] = useState();

  return (
    <>
      <header>
        <div className="flex items-center gap-10">
          <ReturnButton />
          <p className="text-[22px] w-8/12">Фільтр</p>
        </div>
      </header>
      <main className="flex flex-col gap-6 mt-8">
        <div>
          <p className="text-[20px]">Фільтр</p>
          <form className="flex flex-col mt-4">
            <p className="font-semibold text-[14px]">Оплата</p>
            <div className="flex justify-between  mt-6">
              <input
                type="text"
                className="bg-[#1E1E1E] text-white text-[12px] font-semibold h-[60px] text-center rounded-[60px]"
                placeholder="Від"
              />
              <input
                type="text"
                className="bg-[#1E1E1E] text-white text-[12px] font-semibold h-[60px] text-center rounded-[60px]"
                placeholder="До"
              />
            </div>
          </form>
          <div>
            <p className="text-[14px] font-semibold mt-4">Категорія</p>
            <div className="flex gap-4 mt-4 font-semibold text-[12px]">
              <button
                onClick={() => setSearchCategory(1)}
                className={`${
                  searchCategory === 1 ? "bg-[#1A30A6]" : "bg-[#1E1E1E]"
                } w-36 rounded-[60px] h-16 flex px-2 items-center gap-1 `}
              >
                <img src={present} alt="present" className="w-8 h-12" />
                <p>Волонтерство</p>
              </button>
              <button
                onClick={() => setSearchCategory(2)}
                className={`${
                  searchCategory === 2 ? "bg-[#1A30A6]" : "bg-[#1E1E1E]"
                } w-32 h-14 rounded-[60px] flex px-2 items-center gap-1 `}
              >
                <img src={doggy} alt="doggy" />
                <p>Петсітінг</p>
              </button>
            </div>
            <div className="flex gap-4 mt-4 font-semibold text-[12px]">
              <button
                onClick={() => setSearchCategory(3)}
                className={`${
                  searchCategory === 3 ? "bg-[#1A30A6]" : "bg-[#1E1E1E]"
                } min-w-24 h-14 rounded-[60px] flex justify-center items-center gap-1 `}
              >
                <img src={worker} alt="helmet" />
                <p>Найм</p>
              </button>
            </div>
          </div>
          <Link
            to={`/requests/categories/${searchCategory}`}
            className="bg-[#1A30A6] text-white text-[12px] font-semibold h-[60px] text-center py-5 rounded-[60px] w-11/12 mt-10 ml-4 block "
          >
            Пошук
          </Link>
        </div>
      </main>
    </>
  );
}

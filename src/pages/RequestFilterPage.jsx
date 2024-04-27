import React, { useState } from "react";
import { Link } from "react-router-dom";
import ReturnButton from "../components/ReturnButton";

import present from "../assets/present-emoji.png";
import doggy from "../assets/doggy.png";
import worker from "../assets/worker.png";
import helmet from "../assets/helmet.png";

export default function RequestFilterPage() {
  const [sortingMethod, setSortingMethod] = useState();

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
          <p className="text-[20px]">Сортування</p>
          <div className="flex flex-col gap-5 mt-5">
            <button
              className={`${
                sortingMethod === "distance" ? "bg-[#1A30A6]" : "bg-[#1E1E1E]"
              } text-white text-[12px] font-semibold h-[60px] text-center rounded-[60px] w-full flex items-center px-4 gap-2`}
              onClick={() => setSortingMethod("distance")}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 22C16 18 20 14.4183 20 10C20 5.58172 16.4183 2 12 2C7.58172 2 4 5.58172 4 10C4 14.4183 8 18 12 22Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p className="text-[12px]">Відстань найближча</p>
            </button>
            <button
              className={`${
                sortingMethod === "time" ? "bg-[#1A30A6]" : "bg-[#1E1E1E]"
              } text-white text-[12px] font-semibold h-[60px] text-center rounded-[60px] w-full flex items-center px-4 gap-2`}
              onClick={() => setSortingMethod("time")}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 3L2 6M22 6L19 3M6 19L4 21M18 19L20 21M12 9V13L14 15M12 21C14.1217 21 16.1566 20.1571 17.6569 18.6569C19.1571 17.1566 20 15.1217 20 13C20 10.8783 19.1571 8.84344 17.6569 7.34315C16.1566 5.84285 14.1217 5 12 5C9.87827 5 7.84344 5.84285 6.34315 7.34315C4.84285 8.84344 4 10.8783 4 13C4 15.1217 4.84285 17.1566 6.34315 18.6569C7.84344 20.1571 9.87827 21 12 21Z"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p>Найшвидше</p>
            </button>
          </div>
        </div>
        <div>
          <p className="text-[20px]">Фільтр</p>
          <form className="flex flex-col mt-4">
            <p className="font-semibold text-[14px]">Оплата</p>
            <div className="flex justify-between px-6 mt-6">
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
              <button className="bg-[#1E1E1E] w-36 rounded-[60px] h-16 flex px-2 items-center gap-1 ">
                <img src={present} alt="present" className="w-8 h-12" />
                <p>Волонтерство</p>
              </button>
              <button className="bg-[#1E1E1E] w-32 h-14 rounded-[60px] flex px-2 items-center gap-1 ">
                <img src={doggy} alt="doggy" />
                <p>Петсітінг</p>
              </button>
            </div>
            <div className="flex gap-4 mt-4 font-semibold text-[12px]">
              <button className="bg-[#1E1E1E] min-w-24 h-14 rounded-[60px] flex justify-center items-center gap-1 ">
                <img src={helmet} alt="helmet" />
                <p>ЗСУ</p>
              </button>
              <button className="bg-[#1E1E1E] min-w-24 h-14 rounded-[60px] flex justify-center items-center gap-1 ">
                <img src={worker} alt="helmet" />
                <p>Найм</p>
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

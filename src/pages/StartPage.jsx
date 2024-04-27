import { Link } from "react-router-dom";

export default function StartPage() {
  return (
    <div className="flex flex-col justify-end h-[80vh] w-full">
      <div className="text-center max-w-md mx-auto">
        <h1 className="text-[22px] font-regular mb-4">Вітаємо в CareCall</h1>
        <p className="text-[15px] text-left">
          Ваш шлях до надання та отримання допомоги в одному додатку.
          Звертайтеся за підтримкою або пропонуйте свою допомогу швидко і легко,
          будуючи спільноту доброти.
        </p>
      </div>
      <div className="flex flex-col items-center mt-8 gap-5">
        <Link
          to="/log-in"
          className="bg-white text-black  text-[12px] font-semibold h-[60px] text-center py-5 rounded-[60px] w-full"
        >
          Увійти
        </Link>
        <Link
          to="/first-step"
          className="bg-[#1A30A6] text-white text-[12px] font-semibold h-[60px] text-center py-5 rounded-[60px] w-full"
        >
          Зареєструватись
        </Link>
      </div>
    </div>
  );
}

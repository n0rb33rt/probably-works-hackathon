import ReturnButton from "../components/ReturnButton";

export default function SignUpPage() {
  return (
    <>
      <header>
        <div className="flex items-center gap-10">
          <ReturnButton />
          <p className="text-[22px]">
            Створити акаунт <br /> надавача послуг
          </p>
        </div>
      </header>
      <main>
        <form className="flex flex-col gap-6 pt-4">
          <div>
            <label htmlFor="user_name" className="font-semibold text-[14px]">
              Ім'я користувача*
            </label>
            <input
              type="text"
              name="user_name"
              id="user_name"
              className="w-full h-16 rounded-[360px] bg-[#232323] px-8 text-[#A0A0A0] mt-3"
              placeholder="Наприклад, @abcd"
            />
          </div>
          <div>
            <label
              htmlFor="user_real_name"
              className="font-semibold text-[14px]"
            >
              Ваше ім'я*
            </label>
            <input
              type="text"
              name="user_real_name"
              id="user_real_name"
              className="w-full h-16  rounded-[360px] bg-[#232323] px-8 text-[#A0A0A0] mt-3"
              placeholder="Наприклад, Василь Сніжок"
            />
          </div>
          <div>
            <label htmlFor="phone_number" className="font-semibold text-[14px]">
              Номер телефону*
            </label>
            <input
              type="number"
              name="phone_number"
              id="phone_number"
              className="w-full h-16  rounded-[360px] bg-[#232323] px-8 text-[#A0A0A0] mt-3"
              placeholder="Наприклад, 098-333-33-33"
            />
          </div>
          <div>
            <label htmlFor="password" className="font-semibold text-[14px]">
              Пароль*
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="w-full h-16  rounded-[360px] bg-[#232323] px-8 text-[#A0A0A0] mt-3"
              placeholder="Пароль"
            />
          </div>
          <div>
            <label
              htmlFor="repeat_password"
              className="font-semibold text-[14px]"
            >
              Повторіть пароль*
            </label>
            <input
              type="password"
              name="repeat_password"
              id="repeat_password"
              className="w-full h-16  rounded-[360px] bg-[#232323] px-8 text-[#A0A0A0] mt-3"
              placeholder="Пароль"
            />
          </div>
          <button className="bg-[#1A30A6] text-center font-semibold text-[14px] w-11/12 h-14 rounded-[60px] mx-auto mb-4">
            Продовжити
          </button>
        </form>
      </main>
    </>
  );
}

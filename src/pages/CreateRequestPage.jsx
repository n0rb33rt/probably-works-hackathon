/* eslint-disable react-refresh/only-export-components */
import ReturnButton from "../components/ReturnButton";

import present from "../assets/present.png";
import worker from "../assets/worker.png";
import doggy from "../assets/doggy.png";
import { Form } from "react-router-dom";

export default function CreateRequestPage() {
  const options = [
    { type: "Волонтерство", icon: present },
    { type: "Петсітінг", icon: doggy },
    { type: "Найм", icon: worker },
  ];

  // function handleSubmit(event) {
  //   event.preventDefault();

  //   const data = new FormData(event.target);
  //   const formData = Object.fromEntries(data.entries());
  //   console.log(formData);
  // }
  return (
    <>
      <header>
        <div className="flex items-center gap-10">
          <ReturnButton />
          <p className="text-[22px]">Створити оголошення</p>
        </div>
      </header>
      <main>
        <p className="text-[20px]">Деталі оголошення</p>
        <Form method="POST" className="flex flex-col gap-6 pt-4">
          <div>
            <label
              htmlFor="advertisment_header"
              className="font-semibold text-[14px]"
            >
              Заголовок оголошення*
            </label>
            <input
              type="text"
              name="advertisment_header"
              id="advertisment_header"
              className="w-full h-16 rounded-[360px] bg-[#232323] px-8 text-[#A0A0A0] mt-3"
              placeholder="Наприклад, потрібна допомога!"
            />
          </div>
          <div>
            <label htmlFor="category" className="font-semibold text-[14px]">
              Категорія
            </label>
            <select
              name="category"
              className="bg-[#232323] w-full h-16 px-8 text-[#A0A0A0] mt-3 rounded-[360px] appearance-none"
            >
              <option defaultValue={true} value={""}>
                Виберіть категорію
              </option>
              {options.map((option) => (
                <option
                  key={option.type}
                  value={option.type}
                  className="bg-[#232323]  text-[#A0A0A0] "
                >
                  {option.type}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="time" className="font-semibold text-[14px]">
              Приблизний час*
            </label>
            <input
              type="number"
              name="time"
              id="time"
              className="w-full h-16  rounded-[360px] bg-[#232323] px-8 text-[#A0A0A0] mt-3"
              placeholder="Наприклад, з 12:00 до 13:00"
            />
          </div>
          <div>
            <label htmlFor="price" className="font-semibold text-[14px]">
              Ціна допомоги/в годину*
            </label>
            <input
              type="text"
              name="price"
              id="price"
              className="w-full h-16  rounded-[360px] bg-[#232323] px-8 text-[#A0A0A0] mt-3"
              placeholder="Пароль"
            />
          </div>
          <div>
            <label htmlFor="description" className="font-semibold text-[14px]">
              Опис*
            </label>
            <textarea
              type="password"
              name="description"
              id="description"
              className="w-full h-[150px]  rounded-[26px] bg-[#232323] px-8 text-[#A0A0A0] mt-3"
              placeholder="..."
            />
          </div>
          <div>
            <label htmlFor="location" className="font-semibold text-[14px]">
              Місце Знаходження*
            </label>
            <input
              type="text"
              name="location"
              id="location"
              className="w-full h-16  rounded-[26px] bg-[#232323] px-8 text-[#A0A0A0] mt-3"
              placeholder="Наприкалад, Кульпарківська 143а"
            />
          </div>
          <div>
            <label htmlFor="" className="font-semibold text-[14px]">
              Контактна Особа
            </label>
            <input
              type="text"
              name="contact_person"
              id="contact_person"
              className="w-full h-16  rounded-[26px] bg-[#232323] px-8 text-[#A0A0A0] mt-3"
              placeholder="Наприклад, Антон"
            />
          </div>
          <div>
            <label htmlFor="" className="font-semibold text-[14px]">
              Телеграм
            </label>
            <input
              type="text"
              name="tg"
              id="tg"
              className="w-full h-16  rounded-[26px] bg-[#232323] px-8 text-[#A0A0A0] mt-3"
              placeholder="Наприклад, @Антон"
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

          <button className="bg-[#1A30A6] text-center font-semibold text-[14px] w-11/12 h-14 rounded-[60px] mx-auto mb-4">
            Опублікувати
          </button>
        </Form>
      </main>
    </>
  );
}
// export async function createNewRequest({ request, params }) {
//   const data = await request.formData();

//   const requestData = data.get("");
// }

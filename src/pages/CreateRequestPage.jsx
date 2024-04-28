/* eslint-disable react-refresh/only-export-components */
import ReturnButton from "../components/ReturnButton";

import present from "../assets/present.png";
import worker from "../assets/worker.png";
import doggy from "../assets/doggy.png";
import { Form, redirect, json, useActionData } from "react-router-dom";
import { useState } from "react";

export default function CreateRequestPage() {
  const error = useActionData();
  const options = [
    { value: 1, type: "Волонтерство", icon: present },
    { value: 2, type: "Петсітінг", icon: doggy },
    { value: 3, type: "Найм", icon: worker },
  ];
  const [errorState, setErrorState] = useState();

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
            <label htmlFor="title" className="font-semibold text-[14px]">
              Заголовок оголошення*
            </label>
            <input
              type="text"
              name="title"
              id="title"
              className="w-full h-16 rounded-[360px] bg-[#232323] px-8 text-[#A0A0A0] mt-3"
              placeholder="Наприклад, потрібна допомога!"
              required
            />
            {error === "title" && <p>{error.message}</p>}
          </div>
          <div>
            <label htmlFor="category" className="font-semibold text-[14px]">
              Категорія
            </label>
            <select
              name="category"
              className="bg-[#232323] w-full h-16 px-8 text-[#A0A0A0] mt-3 rounded-[360px] appearance-none"
            >
              <option defaultValue={true} value={""} name="category" required>
                Виберіть категорію
              </option>
              {options.map((option) => (
                <option
                  key={option.type}
                  value={option.value}
                  className="bg-[#232323]  text-[#A0A0A0] "
                >
                  {option.type}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="event_time" className="font-semibold text-[14px]">
              Приблизний час*
            </label>
            <input
              type="string"
              name="event_time"
              id="event_time"
              className="w-full h-16  rounded-[360px] bg-[#232323] px-8 text-[#A0A0A0] mt-3"
              placeholder="Наприклад, з 12:00-13:00"
              required
            />
          </div>
          <div>
            <label htmlFor="event_date" className="font-semibold text-[14px]">
              Дата події*
            </label>
            <input
              type="string"
              name="event_date"
              id="event_ate"
              className="w-full h-16  rounded-[360px] bg-[#232323] px-8 text-[#A0A0A0] mt-3"
              placeholder="Наприклад, 24.04"
              required
            />
          </div>
          <div>
            <label htmlFor="price" className="font-semibold text-[14px]">
              Ціна допомоги/в годину*
            </label>
            <input
              type="number"
              name="price"
              id="price"
              className="w-full h-16  rounded-[360px] bg-[#232323] px-8 text-[#A0A0A0] mt-3"
              placeholder="Наприклад, 100₴"
              min="0"
              required
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
              placeholder="Наприклад, Кульпарківська 143а"
              required
            />
          </div>
          <div>
            <label htmlFor="" className="font-semibold text-[14px]">
              Контактна Особа*
            </label>
            <input
              type="text"
              name="contact_person"
              id="contact_person"
              className="w-full h-16  rounded-[26px] bg-[#232323] px-8 text-[#A0A0A0] mt-3"
              placeholder="Наприклад, Антон"
              required
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
              required
            />
          </div>
          <div>
            <label htmlFor="phone_number" className="font-semibold text-[14px]">
              Номер телефону*
            </label>
            <input
              type="text"
              name="phone_number"
              id="phone_number"
              className="w-full h-16  rounded-[360px] bg-[#232323] px-8 text-[#A0A0A0] mt-3"
              placeholder="Наприклад, 098-333-33-33"
              required
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
export async function action({ request }) {
  const data = await request.formData();

  const requestData = {
    title: data.get("title"),
    category: +data.get("category"),
    price: data.get("price"),
    description: data.get("description"),
    contactPersonName: data.get("contact_person"),
    contactPersonTelegram: data.get("tg"),
    address: data.get("location"),
    phone: data.get("phone_number"),
    eventDate: data.get("event_date"),
    eventTime: data.get("event_time"),
  };
  console.log(requestData);

  const response = await fetch(
    "https://testtmpss.azurewebsites.net/api/v1/support/requests/createOrUpdate",
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("accessToken"),
      },
      body: JSON.stringify(requestData),
    }
  );
  if (requestData.title.length > 100)
    return { errorField: "title", message: "Заголовок надто довгий" };
  if (!response.ok) {
    throw json({ message: "Couldn't send request" });
  }

  return redirect("/requests");
}

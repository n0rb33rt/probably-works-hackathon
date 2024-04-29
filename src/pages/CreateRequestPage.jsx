/* eslint-disable react-refresh/only-export-components */
import { Form, redirect, json, useSubmit } from "react-router-dom";
import { useState } from "react";

import ReturnButton from "../components/ReturnButton";

import present from "../assets/present.png";
import worker from "../assets/worker.png";
import doggy from "../assets/doggy.png";

const options = [
  { value: 1, type: "Волонтерство", icon: present },
  { value: 2, type: "Петсітінг", icon: doggy },
  { value: 3, type: "Найм", icon: worker },
];

function validateDateFormat(date) {
  const pattern = /\b(0[1-9]|[12][0-9]|3[01])\.(0[1-9]|1[0-2])\b/;
  console.log(date);
  console.log(pattern.test(date));
  return !pattern.test(date);
}

function validateTimeFormat(time) {
  const pattern = /^(0\d|1\d|2[0-4]):([0-5]\d)-(0\d|1\d|2[0-4]):([0-5]\d)$/;
  return !pattern.test(time);
}

function validateAddress(address) {
  const pattern = /^[a-zA-Z0-9\s,.\-/]+$/;
  return !pattern.test(address);
}
function validateName(name) {
  const pattern = /^[a-zA-Zа-яА-ЯґҐєЄіІїЇ,\-\s]*$/;
  return !pattern.test(name);
}
function validatePhoneNumber(phoneNumber) {
  const pattern = /^\d{3}-\d{3}-\d{2}-\d{2}$/;
  return pattern.test(phoneNumber);
}

export default function CreateRequestPage() {
  const submit = useSubmit();

  const [errors, setErrors] = useState({
    title: "",
    category: "",
    eventTime: "",
    eventDate: "",
    price: "",
    description: "",
    location: "",
    contactPerson: "",
    phoneNumber: "",
  });

  function submitHandler(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    const formData = Object.fromEntries(data.entries());

    const newErrors = {};

    if (formData.title.length > 100) {
      newErrors.title = "Заголовок надто довгий";
    }

    if (+formData.category === 0) {
      newErrors.category = "Категорія не обрана";
    }

    if (validateTimeFormat(formData.event_time)) {
      newErrors.eventTime = "Некоректний формат часу";
    }

    if (validateDateFormat(formData.event_date)) {
      newErrors.eventDate = "Некоректний формат дати";
    }

    if (formData.description.length > 600) {
      newErrors.description = "Опис надто великий";
    }

    if (validateAddress(formData.address)) {
      newErrors.location = "Вказана адреса не коректна";
    }

    if (validateName(formData.contact_person)) {
      newErrors.contactPerson = "Ім'я контактної особи не коректне";
    }

    if (!validatePhoneNumber(formData.phone_number)) {
      newErrors.phoneNumber = "Некоректний номер телефону";
    }

    if (Object.keys(newErrors).length === 0) {
      submit(formData, { method: "POST" });

      setErrors({
        title: "",
        category: "",
        eventTime: "",
        eventDate: "",
        price: "",
        description: "",
        location: "",
        contactPerson: "",
        phoneNumber: "",
      });
    } else {
      setErrors(newErrors);
    }
  }

  return (
    <>
      <header>
        <div className="flex items-center gap-6 ">
          <ReturnButton />
          <p className="text-[22px]">Створити оголошення</p>
        </div>
      </header>
      <main>
        <p className="text-[20px] mt-8">Деталі оголошення</p>
        <Form onSubmit={submitHandler} className="flex flex-col gap-6 pt-4">
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
            <p className="text-red-600 mt-2 font-semibold">{errors.title}</p>
          </div>
          <div>
            <label htmlFor="category" className="font-semibold text-[14px]">
              Категорія
            </label>
            <select
              name="category"
              className="bg-[#232323] w-full h-16 px-8 text-[#A0A0A0] mt-3 rounded-[360px] appearance-none"
              required
            >
              <option defaultValue={true} value="0">
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
            <p className="text-red-600 mt-2 font-semibold">{errors.category}</p>
          </div>
          <div>
            <label htmlFor="event_time" className="font-semibold text-[14px]">
              Приблизний час*
            </label>
            <input
              type="text"
              name="event_time"
              id="event_time"
              className="w-full h-16  rounded-[360px] bg-[#232323] px-8 text-[#A0A0A0] mt-3"
              placeholder="Наприклад, з 12:00-13:00"
              required
            />
            <p className="text-red-600 mt-2 font-semibold">
              {errors.eventTime}
            </p>
          </div>
          <div>
            <label htmlFor="event_date" className="font-semibold text-[14px]">
              Дата події*
            </label>
            <input
              type="text"
              name="event_date"
              id="event_date"
              className="w-full h-16  rounded-[360px] bg-[#232323] px-8 text-[#A0A0A0] mt-3"
              placeholder="Наприклад, 24.04"
              required
            />
            <p className="text-red-600 mt-2 font-semibold">
              {errors.eventDate}
            </p>
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
              required
            />
            <p className="text-red-600 mt-2 font-semibold">
              {errors.description}
            </p>
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
            <p className="text-red-600 mt-2 font-semibold">{errors.location}</p>
          </div>
          <div>
            <label
              htmlFor="contact_person"
              className="font-semibold text-[14px]"
            >
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
            <p className="text-red-600 mt-2 font-semibold">
              {errors.contactPerson}
            </p>
          </div>
          <div>
            <label htmlFor="" className="font-semibold text-[14px]">
              Телеграм*
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
            <p className="text-red-600 mt-2 font-semibold">
              {errors.phoneNumber}
            </p>
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

  if (!response.ok) {
    throw json({ message: "Couldn't send request" });
  }

  return redirect("/requests");
}

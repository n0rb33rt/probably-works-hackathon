/* eslint-disable react-refresh/only-export-components */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import ReturnButton from "../components/ReturnButton";
import { Form, redirect } from "react-router-dom";

export default function Login() {
  return (
    <div>
      <div className="flex flex-col items-center justify-start">
        <div className="flex w-full gap-16">
          <ReturnButton />
          <h1 className="text-[22px] font-regular mb-8 text-center">
            Увійти в аккаунт
          </h1>
        </div>
        <Form
          method="POST"
          className="flex flex-col justify-between w-full h-[80vh]"
        >
          <div className="flex flex-col gap-8">
            <div>
              <label htmlFor="email" className="font-semibold text-[14px]">
                Email*
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="w-full h-16  rounded-[360px] bg-[#232323] px-8 text-[#A0A0A0] mt-3"
                placeholder="Наприклад, @abcd"
                required
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
                required
              />
            </div>
          </div>

          <button className="bg-[#1A30A6] text-white text-[12px] font-semibold h-[60px] text-center py-5 rounded-[60px] w-full mb-16 ">
            Увійти
          </button>
        </Form>
      </div>
    </div>
  );
}
export async function action({ request, params }) {
  const data = await request.formData();

  const requestData = {
    email: data.get("email"),
    password: data.get("password"),
  };

  const response = await fetch(
    "https://testtmpss.azurewebsites.net/api/v1/auth/login",
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestData),
    }
  );

  const parsedRes = await response.json();
  localStorage.setItem("accessToken", parsedRes.accessToken);

  console.log(parsedRes);
  return redirect("/home");
}

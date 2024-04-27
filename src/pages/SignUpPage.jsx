/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/no-unescaped-entities */
import ReturnButton from "../components/ReturnButton";
import { Form, redirect, useSearchParams } from "react-router-dom";
import {useCallback, useEffect, useState} from "react";

export default function SignUpPage() {
  const [searchParams] = useSearchParams();

  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [flag, setFlag] = useState(true);

  useEffect(() => {
    validatePassword();
  }, [password, repeatPassword]); // Effect dependency on password states

  const validatePassword = useCallback(() => {
    if (!password || !repeatPassword) {
      return;
    }
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (password !== repeatPassword) {
      setPasswordError("Паролі не співпадають.");
    } else if (!regex.test(password)) {
      setPasswordError("Пароль має містити мінімум 8 символів, одну велику літеру, одну маленьку літеру, одну цифру та один спеціальний символ.");
    } else {
      setPasswordError("");
    }
  },[flag]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    validatePassword();
  };

  const mode = searchParams.get("mode");
  return (
    <>
      <header>
        <div className="flex items-center gap-10">
          <ReturnButton />
          <p className="text-[22px] w-8/12">
            {`Створити акаунт  ${
              mode === "need-help" ? "отримувача" : "надавача"
            } послуг`}
          </p>
        </div>
      </header>
      <main>
        <Form onSubmit={handleSubmit} method="POST" className="flex flex-col gap-6 pt-4">
          <div>
            <label htmlFor="email" className="font-semibold text-[14px]">
              Email*
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="w-full h-16 rounded-[360px] bg-[#232323] px-8 text-[#A0A0A0] mt-3"
              placeholder="Наприклад, @abcd"
              required
            />
          </div>
          <div>
            <label htmlFor="user_name" className="font-semibold text-[14px]">
              Ваше ім'я*
            </label>
            <input
              type="text"
              name="user_name"
              id="user_name"
              className="w-full h-16  rounded-[360px] bg-[#232323] px-8 text-[#A0A0A0] mt-3"
              placeholder="Наприклад, Василь Сніжок"
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
                className="w-full h-16 rounded-[360px] bg-[#232323] px-8 text-[#A0A0A0] mt-3"
                placeholder="Пароль"
                required
                value={password}
                onChange={e => setPassword(e.target.value)}/>
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
                className="w-full h-16 rounded-[360px] bg-[#232323] px-8 text-[#A0A0A0] mt-3"
                placeholder="Пароль"
                required
                value={repeatPassword}
                onChange={e => setRepeatPassword(e.target.value)}/>
          </div>
          {passwordError && <p className="text-red-500 text-sm">{passwordError}</p>}
          <button
              onClick={()=>setFlag(prevState => !prevState)}
              className="bg-[#1A30A6] text-white text-[12px] font-semibold h-[60px] text-center py-5 rounded-[60px] w-full mt-8"
          >
            Продовжити
          </button>
        </Form>
      </main>
    </>
  );
}

// eslint-disable-next-line react-refresh/only-export-components

export async function action({ request }) {
  const data = await request.formData();

  const requestData = {
    name: data.get("user_name"),
    email: data.get("email"),
    password: data.get("password"),
    passwordConfirmation: data.get("repeat_password"),
    isAgreedWithTerms: true,
    phoneNumber: data.get("phone_number"),
    platformRole: 0,
  };

  const response = await fetch(
      "https://testtmpss.azurewebsites.net/api/v1/auth/register",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(requestData),
      }
  );
  const parsedRes = await response.json();
  console.log(parsedRes);

  return redirect("/home");
}
//вимоги до паролю
// хочаб 1 символ, 1 маленька літера, 1 велика літера
// test@test.com
//11111111Aa@
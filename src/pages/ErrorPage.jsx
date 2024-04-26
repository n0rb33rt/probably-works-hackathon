import error from "../assets/upset-emoji.webp";

export default function ErrorPage() {
  return (
    <div className="flex flex-col items-center justify-between  pt-10">
      <img src={error} alt="upset_emoji" className="w-24 h-24" />
      <h1 className="font-Outfit font-semibold text-[40px]">От халепа...</h1>
      <div className="font-Outfit mt-5 text-[20px] text-center">
        Схоже щось пішло не так. Спробуйте знову виконати попередню дію
      </div>
    </div>
  );
}

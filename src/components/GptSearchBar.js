import lang from "../utils/languageConstant";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const language = useSelector((store) => store.config.lang);

  return (
    <div className="pt-[10%]">
      <form className="bg-black w-6/12 mx-auto grid grid-cols-12 px-4 py-4 gap-2 rounded-lg ">
        <input
          className="col-span-8 px-4 rounded-md outline-none font-Inter"
          type="text"
          placeholder={lang[language].gptSearchPlaceHolder}
        />
        <button className="col-span-4 text-white  rounded-md bg-[#e50914] font-semibold font-Poppins px-4 py-2">
          {lang[language].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;

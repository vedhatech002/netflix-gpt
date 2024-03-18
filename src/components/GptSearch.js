import React from "react";
import GptSearchBar from "./GptSearchBar";
import { BG_URL } from "../utils/constant";

const GptSearch = () => {
  return (
    <div className="">
      <img
        className="h-screen w-full object-cover absolute -z-10  "
        src={BG_URL}
        alt="background"
      />
      <GptSearchBar />
    </div>
  );
};

export default GptSearch;

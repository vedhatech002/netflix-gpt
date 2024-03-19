import React from "react";
import GptSearchBar from "./GptSearchBar";
import { BG_URL } from "../utils/constant";
import GptMovieSuggestion from "./GptMovieSuggestion";

const GptSearch = () => {
  return (
    <div className="">
      <img
        className="h-screen w-full object-cover fixed -z-10  "
        src={BG_URL}
        alt="background"
      />
      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  );
};

export default GptSearch;

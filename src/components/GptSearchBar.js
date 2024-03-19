import openai from "../utils/openAi";
import { useRef } from "react";
import lang from "../utils/languageConstant";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addGptMovieResults } from "../utils/gptSlice";

const GptSearchBar = () => {
  const language = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const searchMovieTMDB = async (movie) => {
    const response = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&page=1",
      API_OPTIONS
    );

    const json = await response.json();

    return json.results;
  };

  const handleGptSearchClick = async () => {
    //Make an api Call to Gpt Api and get Movie Results

    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query:" +
      searchText.current.value +
      ". only give me names of 5 movies, comma seprated like the example result given ahead. Example Result: Jailer, Leo, Blue Star, Vada Chennai,Billa";

    const gptResult = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    if (!gptResult.choices) {
      console.log("Gpt api error");
    }

    console.log(gptResult.choices);
    // Jailer, Leo, Blue Star, Vada Chennai,Billa

    const gptMovies = gptResult.choices[0]?.message?.content.split(",");

    //[Jailer, Leo, Blue Star, Vada Chennai,Billa]

    //for each movie search tmdb api
    const moviePromises = gptMovies.map((movie) => searchMovieTMDB(movie)); //returns a  array of promises

    const tmdbResults = await Promise.all(moviePromises);

    console.log(tmdbResults);
    dispatch(
      addGptMovieResults({ movieNames: gptMovies, movieResults: tmdbResults })
    );
  };

  return (
    <div className="pt-[10%]">
      <form
        className="bg-black w-6/12 mx-auto grid grid-cols-12 px-4 py-4 gap-6 rounded-lg "
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          className="col-span-8 px-4 rounded-md outline-none font-Inter"
          type="text"
          placeholder={lang[language].gptSearchPlaceHolder}
        />
        <button
          className="col-span-4 text-white  rounded-md bg-[#e50914] font-semibold font-Poppins px-4 py-2 "
          onClick={handleGptSearchClick}
        >
          {lang[language].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;

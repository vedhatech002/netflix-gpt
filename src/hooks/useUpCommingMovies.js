import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { useEffect } from "react";
import { addUpCommingMovies } from "../utils/moviesSlice";

const useUpCommingMovies = () => {
  const dispatch = useDispatch();
  const upCommingMovies = useSelector((store) => store.movies.upCommingMovies);

  const getUpCommingMovies = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/upcoming?page=2",
        API_OPTIONS
      );
      const data = await response.json();
      dispatch(addUpCommingMovies(data.results));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!upCommingMovies) getUpCommingMovies();
  }, []);
};

export default useUpCommingMovies;

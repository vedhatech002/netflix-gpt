import { useDispatch, useSelector } from "react-redux";
import { addPopularaMovies } from "../utils/moviesSlice";
import { API_OPTIONS } from "../utils/constant";
import { useEffect } from "react";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const popularMovies = useSelector((store) => store.movies.popularMovies);

  const getPopularMovies = async () => {
    try {
      const response = await fetch(
        "https://api.themoviedb.org/3/movie/popular?page=2",
        API_OPTIONS
      );
      const data = await response.json();
      dispatch(addPopularaMovies(data.results));
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!popularMovies) getPopularMovies();
  }, []);
};

export default usePopularMovies;

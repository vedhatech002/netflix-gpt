import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    <div className="sm:px-16 px-8  text-white  bg-black ">
      <div className="relative xl:-mt-40 lg:-mt-20 md:-mt-32 sm:-mt-40 z-20 -mt-[35rem]">
        <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
        <MovieList title={"Top Rated"} movies={movies?.topRatedMovies} />
        <MovieList title={"Poppular"} movies={movies?.popularMovies} />
        <MovieList title={"Upcoming"} movies={movies?.upCommingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;

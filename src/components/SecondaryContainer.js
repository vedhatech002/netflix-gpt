import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);

  return (
    <div className="px-16  text-white  bg-black ">
      <div className="relative -mt-40 z-20">
        <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
        <MovieList title={"Top Rated"} movies={movies?.topRatedMovies} />
        <MovieList title={"Poppular"} movies={movies?.popularMovies} />
        <MovieList title={"Upcoming"} movies={movies?.upCommingMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;

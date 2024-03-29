import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="">
      <h1 className="font-Poppins sm:text-xl text-[1rem] font-semibold py-4">
        {title}
      </h1>

      <div className="flex  overflow-x-auto scroll-smooth snap-align-none touch-auto">
        <div className="flex  ">
          {movies &&
            movies.map((movie) => (
              <MovieCard key={movie.id} posterPath={movie?.poster_path} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;

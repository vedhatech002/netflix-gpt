import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
import useUpCommingMovies from "../hooks/useUpCommingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  useNowPlayingMovies();
  useTopRatedMovies();
  usePopularMovies();
  useUpCommingMovies();

  return (
    <div className="">
      <Header />
      <MainContainer />
      <SecondaryContainer />
      {/* 
      MainContainer
        -VideoBackgroud
        -video title
      SecondaryContainer
         -MovieList * n
          -cards * n 
      
      
      */}
    </div>
  );
};

export default Browse;

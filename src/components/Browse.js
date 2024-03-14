import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import Header from "./Header";
import MainContainer from "./MainContainer";

const Browse = () => {
  useNowPlayingMovies();

  return (
    <>
      <Header />
      <MainContainer />
      {/* 
      MainContainer
        -VideoBackgroud
        -video title
      SecondaryContainer
         -MovieList * n
          -cards * n 
      
      
      */}
    </>
  );
};

export default Browse;

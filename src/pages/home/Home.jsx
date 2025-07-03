import React from "react";
import TopCarousel from "../../components/carousel/TopCarousel";
import MiddleCarousel from "../../components/carousel/MiddleCarousel";
import { useQuery} from '@tanstack/react-query';
import { getPopularMovies } from "../../shared/services/movies";
import { getPopularTvShows } from "../../shared/services/tvshows";
import Loader from "../../components/commonLoader/Loader";

const Home = () => {
 const { isPending: isMoviesLoading, error: moviesError, data: movies } = useQuery({
  queryKey: ['popularMovies'],
  queryFn: getPopularMovies,
});

const { isPending: isTvLoading, error: tvError, data: tvshows } = useQuery({
  queryKey: ['popularTvShows'],
  queryFn: getPopularTvShows,
});

  if (isMoviesLoading || isTvLoading) return 'Loading...';

  if (moviesError) return 'An error has occurred: ' + moviesError.message;
  if (tvError) return 'An error has occurred: ' + tvError.message;

  // console.log("movies",movies);
  // console.log("tvshows",tvshows);
  return <div>
    <TopCarousel movies={movies} tvshows={tvshows}/>
    <MiddleCarousel  movies={movies} tvshows={tvshows} />
    {/* <Loader /> */}
  </div>;
  };

export default Home;

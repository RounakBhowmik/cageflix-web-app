import { useContext, useEffect } from "react";
import TopCarousel from "../../components/carousel/TopCarousel";
import MiddleCarousel from "../../components/carousel/MiddleCarousel";
import { useQuery } from '@tanstack/react-query';
import Loader from "../../components/commonLoader/Loader";
import { getPopularMovies, getPopularTvShows } from "../../shared/services/shows";
import { fetchShows } from "../../store/actions/shows";
import { AppContext } from "../../store/AppProvider";

const Home = () => {
  const appCtx = useContext(AppContext);
  const { shows } = appCtx;
  const { isPending: isMoviesLoading, error: moviesError, data: movies, refetch: moviesRefetch } = useQuery({
    queryKey: ['popularMovies', shows?.state?.genre?.value],
    queryFn: async () => { return await getPopularMovies(shows?.state?.genre?.value  && { with_genres: shows?.state?.genre?.value }) },
  });

  const { isPending: isTvLoading, error: tvError, data: tvShows, refetch: tvShowsRefetch } = useQuery({
    queryKey: ['popularTvShows', shows?.state?.genre?.value],
    queryFn: async () => { 
      return await getPopularTvShows(shows?.state?.genre?.value  && { with_genres: shows?.state?.genre?.value })
    },
  });

  useEffect(() => {    
    fetchShows({ movies, tvShows }, shows.dispatch);
  }, [movies, tvShows]);

  if (isMoviesLoading || isTvLoading) {
    return <Loader />;
  }

  if (shows.state.isSearch) {
    return (
      <div>
        <MiddleCarousel movies={shows?.state?.searchData?.movies} tvShows={shows?.state?.searchData?.tvShows} />
      </div>
    )
  }
  return (
    <div>
      <TopCarousel movies={movies} tvshows={tvShows} />
      <MiddleCarousel movies={movies?.results} tvShows={tvShows?.results} />
    </div>
  );
};

export default Home;

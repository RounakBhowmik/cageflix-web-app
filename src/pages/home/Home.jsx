import { useContext, useEffect, useRef } from "react";
import TopCarousel from "../../components/carousel/TopCarousel";
import MiddleCarousel from "../../components/carousel/MiddleCarousel";
import { useQueries, useQuery } from '@tanstack/react-query';
import Loader from "../../components/commonLoader/Loader";
import { getMoviesByGenre, getPopularMovies, getPopularTvShows, getTvShowsByGenre } from "../../shared/services/shows";
import { fetchShows, searchShows } from "../../store/actions/shows";
import { AppContext } from "../../store/AppProvider";
import { isEmpty, isEqual } from "lodash";

const Home = () => {
  const appCtx = useContext(AppContext);
  const { shows } = appCtx;
  const { data: genresMovies, refetch: genresMoviesRefetch, isPending: genresMoviesLoading } = useQuery({
    queryKey: ['popularMovies', shows?.state?.genre?.value],
    queryFn: async () => {
      if (shows?.state?.genre?.value != -1) {
        return await getMoviesByGenre({ with_genres: shows?.state?.genre?.value })
      }
    },
    enabled: false
  });
  const movies = useQueries({
    queries: shows?.state?.genres?.slice(0, 4).map((ele) => ({
      queryKey: ['movies', ele.id],
      queryFn: () => getMoviesByGenre({ with_genres: ele.id }),
      refetchOnWindowFocus: false,
    })) || [], // fallback if genres not ready
  });
  // const { isPending: isTvLoading, error: tvError, data: tvShows, refetch: tvShowsRefetch } = useQuery({
  //   queryKey: ['popularTvShows', shows?.state?.genre?.value],
  //   queryFn: async () => {       
  //     if(shows?.state?.genre?.value != -1) {
  //       return await getTvShowsByGenre({ with_genres: shows?.state?.genre?.value })
  //     }
  //     return await getPopularTvShows();
  //   },
  // });



  const prevData = useRef();

  useEffect(() => {
    const movieData = movies.map((q) => q.data);
    if (movieData.every(Boolean) && !isEqual(movieData, prevData.current)) {
      fetchShows({ movies: movieData }, shows.dispatch);
      prevData.current = movieData;
    }
  }, [movies]);

  useEffect(() => {
    genresMoviesRefetch();
  }, [shows?.state?.genre?.value]);

  useEffect(() => {
    if (genresMovies ) {
      searchShows([...genresMovies?.results], shows.dispatch);
    }
  }, [genresMovies]);

  if (isEmpty(movies)) {
    return <Loader />;
  }

  
  return (
    <div>
      <TopCarousel movies={movies} />
      <MiddleCarousel movies={movies} genres={shows?.state.genres} />
    </div>
  );
};

export default Home;

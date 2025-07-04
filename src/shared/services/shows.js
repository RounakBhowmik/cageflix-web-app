import { AppMovieService } from "../../config/appServiceConn";

export const getPopularTvShows = async () => {
    return await AppMovieService({
        url: "/3/tv/popular",
        method: "GET",
    }).then((res) => {
        return Promise.resolve(res.data);
    }).catch((err) => {
        return Promise.reject(err.data);
    });
};

export const getTvShowsByGenre = async (params) => {
    return await AppMovieService({
        url: "/3/discover/tv",
        method: "GET",
        params: params ? { ...params } : null
    }).then((res) => {
        return Promise.resolve(res.data);
    }).catch((err) => {
        return Promise.reject(err.data);
    });
};

export const getPopularMovies = async (params) => {
    return await AppMovieService({
        url: "/3/movie/popular",
        method: "GET",
        params: params ? { ...params } : null
    }).then((res) => {
        return Promise.resolve(res.data);
    }).catch((err) => {
        return Promise.reject(err.data);
    });
};

export const getMoviesByGenre = async (params) => {
    return await AppMovieService({
        url: "/3/discover/movie",
        method: "GET",
        params: params ? { ...params } : null
    }).then((res) => {
        return Promise.resolve(res.data);
    }).catch((err) => {
        return Promise.reject(err.data);
    });
};

export const getGenres = async () => {
    return await AppMovieService({
        url: "/3/genre/movie/list",
        method: "GET",
    }).then((res) => {
        return Promise.resolve(res.data);
    }).catch((err) => {
        return Promise.reject(err.data);
    });
};
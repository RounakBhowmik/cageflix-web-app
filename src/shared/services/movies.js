import { AppMovieService } from "../../config/appServiceConn";

export const getPopularMovies = async () => {
    return await AppMovieService({
        url: "/3/movie/popular",
        method: "GET",
        // data: postData
    }).then((res) => {
        return Promise.resolve(res.data);
    }).catch((err) => {
        return Promise.reject(err.data);
    });
};
import { AppMovieService } from "../../config/appServiceConn";

export const getPopularTvShows = async () => {
    return await AppMovieService({
        url: "/3/tv/popular",
        method: "GET",
        // data: postData
    }).then((res) => {
        return Promise.resolve(res.data);
    }).catch((err) => {
        return Promise.reject(err.data);
    });
};
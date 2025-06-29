import { AppService } from "../../config/appServiceConn";

export const signIn = async (postData) => {
    return await AppService({
        url: "/auth/signin",
        method: "POST",
        data: postData
    }).then((data) => {
        return Promise.resolve(data);
    }).catch((err) => {
        return Promise.reject(err.data);
    });
};
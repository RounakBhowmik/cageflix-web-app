import axios from "axios";
import { APP_CONFIG } from "./appConfig";

const AUTH_URLS = ['/auth/signin', '/auth/signup'];


export const AppService = axios.create({
    baseURL: APP_CONFIG.APP_SERVICE_URL,
});

AppService.interceptors.request.use((request) => {
    if (!AUTH_URLS.includes(request.url)) {
        request.headers['authorization'] = "Bearer " + localStorage.getItem('usertoken');
    }
    return request;
}, async (err) => {
    Promise.reject(err)
});
AppService.interceptors.response.use((response) => {
    return response;
}, async (err) => {
    console.log(err);
    return Promise.reject(err.response)
});
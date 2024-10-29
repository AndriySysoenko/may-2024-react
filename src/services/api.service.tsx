import axios from "axios";
import {IFormLogin} from "../models/IFormLogin";
import {IUserWithToken} from "../models/IUserWithToken";
import {IAxiosResponse} from "../models/IAxiosResponse";
import {ICart} from "../models/ICart";
import {extractLocalStorage} from "../components/helpers/helpers";
import {ITokenResponse} from "../models/ITokenResponse";

const axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com/auth',
    headers: { 'Content-Type': 'application/json' },
})

axiosInstance.interceptors.request.use(request => {
    if(request.method?.toUpperCase() === 'GET'){
        let userFromLocalStorage = extractLocalStorage<IUserWithToken>('user');
        request.headers.Authorization = 'Bearer ' + userFromLocalStorage.accessToken;
}
    return request
})

export const login = async (dataForLogin:IFormLogin):Promise<IUserWithToken> => {
    const expiresInMins:number = 1;
    const {data:userLoginData} = await axiosInstance.post<IUserWithToken>('/login', {...dataForLogin, expiresInMins});
    localStorage.setItem('user', JSON.stringify(userLoginData))
    return userLoginData

}

export const loadCarts = async (): Promise<ICart[]> => {
    const {data} = await axiosInstance.get<IAxiosResponse & {carts:ICart[]}>('/carts');
    return data.carts
}

export const refresh = async () => {
    console.log('refresh')
    const userFromLocalStorage = extractLocalStorage<IUserWithToken>('user');
    const {data} = await axiosInstance.post<ITokenResponse>('/refresh', {
        refreshToken: userFromLocalStorage.refreshToken,
        expiresInMins: 1
    });
    userFromLocalStorage.accessToken = data.accessToken;
    userFromLocalStorage.refreshToken = data.refreshToken;
    localStorage.setItem('user', JSON.stringify(userFromLocalStorage));
}

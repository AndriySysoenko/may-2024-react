import axios from "axios";
import {IFormLogin} from "../models/IFormLogin";
import {IUserWithToken} from "../models/IUserWithToken";
import {IAxiosResponse} from "../models/IAxiosResponse";
import {ICart} from "../models/ICart";

const axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com/auth',
    headers: { 'Content-Type': 'application/json' },
})



export const login = async (dataForLogin:IFormLogin):Promise<IUserWithToken> => {
    const exexpiresInMins:number = 10;
    const {data:userLoginData} = await axiosInstance.post<IUserWithToken>('/login', {...dataForLogin, exexpiresInMins});
    localStorage.setItem('user', JSON.stringify(userLoginData))
    return userLoginData
}

export const loadCarts = async (): Promise<ICart[]> => {
    const {data} = await axiosInstance.get<IAxiosResponse & {carts:ICart[]}>('/carts');

    return data.carts
}
import axios from "axios";
import {IFormLogin} from "../models/IFormLogin";
import {IUserWithToken} from "../models/IUserWithToken";

const axiosInstance = axios.create({
    baseURL: 'https://dummyjson.com/auth',
    headers: { 'Content-Type': 'application/json' },
})



export const login = async (dataForLogin:IFormLogin):Promise<IUserWithToken> => {
    const exexpiresInMins:number = 10;
    const {data:userLoginData} = await axiosInstance.post<IUserWithToken>('/login', {...dataForLogin, exexpiresInMins})
    return userLoginData
}

import axios from "axios";
import {IUser} from "../moduls/IUser";

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {"Content-Type" : "application/json"}
})

export const getUsers = async():Promise<IUser[]> => {
    let axiosResponse = await axiosInstance.get<IUser[]>('/users')
    return axiosResponse.data
}
import axios from "axios";
import {IUser} from "../moduls/IUser";
import {IPost} from "../moduls/IPost";
import {IComment} from "../moduls/IComment";

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {"Content-Type" : "application/json"}
})

export const getUsers = async():Promise<IUser[]> => {
    let axiosResponse = await axiosInstance.get<IUser[]>('/users')
    return axiosResponse.data
}

export const getPosts = async():Promise<IPost[]> => {
    let axiosResponse = await axiosInstance.get<IPost[]>('/posts')
    return axiosResponse.data
}

export const getComments = async():Promise<IComment[]> => {
    let axiosResponse = await axiosInstance.get<IComment[]>('/comments')
    return axiosResponse.data
}
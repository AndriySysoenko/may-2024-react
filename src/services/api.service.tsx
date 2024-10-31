import axios from "axios";
import {IUser} from "../models/IUser";
import {IPost} from "../models/IPost";
import {IComment} from "../models/IComment";

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
    headers: { 'Content-Type': 'application/json' },
})

export const getUsers = async ():Promise<IUser[]> => {
    const axiosResponse = await axiosInstance.get<IUser[]>('/users')
    return axiosResponse.data
}
export const getPosts = async():Promise<IPost[]> => {
    const axiosResponse = await axiosInstance.get<IPost[]>('/posts')
    return axiosResponse.data
}

export const getComments = async():Promise<IComment[]> => {
    const axiosResponse = await axiosInstance.get<IComment[]>('/comments')
    return axiosResponse.data
}
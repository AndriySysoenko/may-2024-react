import axios from "axios"
import {IFormPost, IPost} from '../models/IFormPost';

const axiosInstance = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com',
    headers: {'Content-type': 'application/json; charset=UTF-8'}
});

export const addPost = async (formInputData: IFormPost): Promise<IPost>=> {
    const response = await axiosInstance.post<IPost>('/posts', formInputData)
    return response.data
}
import axios from "axios"
import { IFormPost } from '../models/IFormPost';

const axiosInstance = axios.create({
    baseURL:'https://jsonplaceholder.typicode.com',
    headers: {'Content-type': 'application/json; charset=UTF-8'}
});

export const addPost = async (formInputData: IFormPost) => {
    axiosInstance.post<IFormPost>('/posts', formInputData)
        .then(response => {
            console.log('New post added:', response.data)});
}
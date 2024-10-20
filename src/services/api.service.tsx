import axios from 'axios'
import { IUser } from '../models/IUser'
import { IDummyResponse } from '../models/IDummyResponse'
import { IPost } from '../models/IPost'

export const axiosInstance = axios.create (
    {
        baseURL:'https://dummyjson.com/',
        headers: {"Content-Type" : "application/json"}
    })

export const getUsers = async (page:number):Promise <IUser[]> =>{
    let limit:number = 20;
    let skip: number = (page-1)*limit;
    let axiosResponse = await axiosInstance.get<IDummyResponse & {users:IUser[]}> ('/users', {
        params: {
            skip:skip,
            limit:limit
        }
    })
    return axiosResponse.data.users
}

export const getPosts = async ():Promise<IPost[]> =>{
    let response = await axiosInstance.get<IDummyResponse & {posts:IPost[]}> ('/posts')
    return response.data.posts
}


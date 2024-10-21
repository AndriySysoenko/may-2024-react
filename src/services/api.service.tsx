import axios from 'axios'
import { IUser } from '../models/IUser'
import { IDummyResponse } from '../models/IDummyResponse'
import { IPost } from '../models/IPost'

export const axiosInstance = axios.create (
    {
        baseURL:'https://dummyjson.com/',
        headers: {"Content-Type" : "application/json"}
    })

export const getUsers = async (page:number):Promise <{users:IUser[]} & {marker: boolean}> =>{
    let limit:number = 20;
    let skip: number = (page-1)*limit;
    let axiosResponse = await axiosInstance.get<IDummyResponse & {users:IUser[]}> ('/users', {
        params: {
            skip:skip,
            limit:limit
        }
    })
    let marker:boolean;
    if(+axiosResponse.data.total/(axiosResponse.data.limit + axiosResponse.data.skip) <= 1)
        marker = true;
    else
        marker = false;
    return {
        users: axiosResponse.data.users,
        marker
    }
}

export const getPosts = async (page:number):Promise<{posts:IPost[]} & {marker: boolean}> =>{
    let limit:number = 26;
    let skip: number = (page-1)*limit;
    let axiosResponse = await axiosInstance.get<IDummyResponse & {posts:IPost[]}> ('/posts', {
        params: {
            skip:skip,
            limit:limit
        }
    })
    let marker:boolean;
    if(+axiosResponse.data.total/(axiosResponse.data.limit + axiosResponse.data.skip) <= 1)
        marker = true;
    else
        marker = false;
    return {
        posts: axiosResponse.data.posts,
        marker
    }
}

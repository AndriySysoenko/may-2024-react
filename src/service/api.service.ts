import {IUser} from "../models/IUser";
import {IPost} from "../models/IPost";
import axios from 'axios';

let axiosInstance = axios.create ({
	baseURL:'https://dummyjson.com',
	// header: {"Content-Type":"application/json"}
});

export const getUsers = async():Promise<IUser[]> => {
	let axiosResponse:IUser[] = await axiosInstance.get<IUser>('/users');
	return (axiosResponse.data);
}

export const getPostsOfUser = async(userId:number):Promise<IPost[]> => {
	let axiosResponse:IPost[] = await axiosInstance.get<IUser>('/users/' + userId + '/posts');
	return (axiosResponse.data);
}
import {IUser} from "../models/IUser";
import {IPost} from "../models/IPost";
import axios from 'axios';
import {IResponseUsers} from "../models/IResponseUsers";
import {IResponsePosts} from "../models/IResponsePosts";

let axiosInstance = axios.create ({
	baseURL:'https://dummyjson.com',
});

export const getUsers = async():Promise<IUser[]> => {
	let axiosResponse= await axiosInstance.get<IResponseUsers>('/users');
	return axiosResponse.data.users;
}

export const getPostsOfUser = async(userId:number):Promise<IPost[]> => {
	let axiosResponse = await axiosInstance.get<IResponsePosts>('/users/' + userId + '/posts');
	return (axiosResponse.data.posts);
}
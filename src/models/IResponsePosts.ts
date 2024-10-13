import {IPost} from "./IPost";

export interface IResponsePosts {
   posts: IPost[],
    total: number,
    skip: number,
    limit: number
}
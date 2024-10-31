import {IUser} from "./IUser";
import {IPost} from "./IPost";
import {IComment} from "./IComment";

export type StoreType = {
    userSlice: {
        allUsers: IUser[],
        loadUsers: (users:IUser[])=> void
    },
    postSlice:{
        allPosts: IPost[],
        loadPosts: (posts: IPost[]) => void
    },
    commentSlice:{
        allComments: IComment[],
        loadComments: (comments: IComment[]) => void
    }

}
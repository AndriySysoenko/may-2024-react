import {create} from "zustand/react";
import {StoreType} from "./models/StoreType";
import {IUser} from "./models/IUser";
import {IPost} from "./models/IPost";
import {IComment} from "./models/IComment";


export  const useStore = create<StoreType>()((set) => {
    return {
        userSlice:{
            allUsers:[],
            loadUsers: (users: IUser[]) => {
                return set (state => {
                    return {...state, userSlice:{
                        ...state.userSlice, allUsers: users}
                    }
                })
            }
        },
        postSlice:{
            allPosts:[],
            loadPosts: (posts: IPost[]) => {
                return set (state => {
                    return {...state, postSlice:{
                            ...state.postSlice, allPosts: posts}
                    }
                })
            }
        },
        commentSlice:{
            allComments:[],
            loadComments: (comments: IComment[]) => {
                return set (state => {
                    return {...state, commentSlice:{
                            ...state.commentSlice, allComments: comments}
                    }
                })
            }
        }
    }
})
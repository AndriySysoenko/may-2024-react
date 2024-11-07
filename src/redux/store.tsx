import {configureStore} from "@reduxjs/toolkit";
import {useDispatch, useSelector} from "react-redux";
import {usersSlice} from "./slices/usersSlice";
import {postsSlice} from "./slices/postsSlice";
import {commentsSlice} from "./slices/commentsSlice";


export let store = configureStore({
    reducer:{
        usersSlice: usersSlice.reducer,
        postsSlice: postsSlice.reducer,
        commentsSlice: commentsSlice.reducer
    }
})

export const useAppDispatch = useDispatch.withTypes<typeof store.dispatch>();
export const useAppSelector = useSelector.withTypes<ReturnType<typeof store.getState>>();

import {AxiosError} from "axios";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IPost} from "../../models/IPost";
import {getPosts} from "../../services/api.service";

type PostSliceType = {
    posts: IPost[]
}

const postsInitState:PostSliceType = {
    posts: [],
}

const loadPosts = createAsyncThunk <IPost[], void, {rejectValue: AxiosError}>('PostsSlice/loadPosts', async (_, thunkAPI)=>{
    try {
        let postsFromAPI = await getPosts();
        return thunkAPI.fulfillWithValue(postsFromAPI)
    } catch (error){
        const axiosError = error as AxiosError;
        return thunkAPI.rejectWithValue(axiosError)
    }
})

export const postsSlice = createSlice({
    name: 'postsSliceName',
    initialState: postsInitState,
    reducers:{},
    extraReducers: builder =>
        builder
            .addCase(loadPosts.fulfilled, (state, action: PayloadAction<IPost[]>)=>{
                state.posts = action.payload;
            })
            .addCase(loadPosts.rejected, (state, action: PayloadAction<AxiosError | undefined>) => {
                alert(action.payload?.message)
            })
})

export const postsSliceAction = {...postsSlice.actions, loadPosts}

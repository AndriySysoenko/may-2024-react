import {AxiosError} from "axios";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {getComments} from "../../services/api.service";
import {IComment} from "../../models/IComment";

type CommentSliceType = {
    comments: IComment[]
}

const commentsInitState:CommentSliceType = {
    comments: []
}

const loadComments = createAsyncThunk <IComment[], void, {rejectValue: AxiosError}>('CommentsSlice/loadComments', async (_, thunkAPI)=>{
    try {
        let commentsFromAPI = await getComments();
        return thunkAPI.fulfillWithValue(commentsFromAPI)
    } catch (error){
        const axiosError = error as AxiosError;
        return thunkAPI.rejectWithValue(axiosError)
    }
})

export const commentsSlice = createSlice({
    name: 'commentsSliceName',
    initialState: commentsInitState,
    reducers:{},
    extraReducers: builder =>
        builder
            .addCase(loadComments.fulfilled, (state, action: PayloadAction<IComment[]>)=>{
                state.comments = action.payload;
            })
            .addCase(loadComments.rejected, (state, action: PayloadAction<AxiosError | undefined>) => {
                alert('Comments ' + action.payload?.message)
            })
})

export const commentsSliceAction = {...commentsSlice.actions, loadComments}

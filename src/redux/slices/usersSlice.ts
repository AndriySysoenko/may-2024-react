import {IUser} from "../../models/IUser";
import {AxiosError} from "axios";
import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {getUsers} from "../../services/api.service";

type UserSliceType = {
    users: IUser[];
}

const usersInitState:UserSliceType = {
    users: [],
}

const loadUsers = createAsyncThunk<IUser[], void, {rejectValue: AxiosError}>('usersSlice/loadUsers', async (_, thunkAPI)=>{
    try {
        let usersFromAPI = await getUsers();
        return thunkAPI.fulfillWithValue(usersFromAPI)
    } catch (error){
        const axiosError = error as AxiosError;
        return thunkAPI.rejectWithValue(axiosError)
    }
})

export const usersSlice = createSlice({
    name: 'usersSliceName',
    initialState: usersInitState,
    reducers:{},
    extraReducers: builder =>
        builder
            .addCase(loadUsers.fulfilled, (state, action: PayloadAction<IUser[]>)=>{
                state.users = action.payload;
            })
            .addCase(loadUsers.rejected, (state, action: PayloadAction<AxiosError | undefined>) => {
                alert(action.payload?.message)
            })
})

export const usersSliceAction = {...usersSlice.actions, loadUsers}

import { createSlice, createAsyncThunk,  } from '@reduxjs/toolkit';
import axios from 'axios'
import { Login_Url } from '../../services/constant';
export const loginHanlder = createAsyncThunk('posts/loginPostcall', async (data, thunkAPI) => {

})

export const loginHandleSlice = createSlice({
    name: 'loginHandle',
    initialState: {
        data: "No data",
        isSuccess: false,
        message: "",
        loading: false,
    },
    reducers: {},
    extraReducers: (builder) => {
        // Add reducers for additional action types here, and handle loading state as needed
        // console.log(loginHanlder, "search response")
        builder.addCase(loginHanlder.fulfilled, (state, action) => {
            state.data = action.payload;
        })
    },
})
export default loginHandleSlice.reducer;



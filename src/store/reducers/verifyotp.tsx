import { createSlice, createAsyncThunk,  } from '@reduxjs/toolkit';
import axios from 'axios'
import { Login_Url } from '../../services/constants';
export const verifyOtpHanlder = createAsyncThunk('posts/verifyOtpPostcall', async (data, thunkAPI) => {

})

export const verifyOtpHandleSlice = createSlice({
    name: 'verifyOtpHandle',
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
        builder.addCase(verifyOtpHanlder.fulfilled, (state, action) => {
            state.data = action.payload;
        })
    },
})
export default verifyOtpHandleSlice.reducer;


